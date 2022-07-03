import objectFitCover from "./objectFitCover";
import { Alg } from "./types";

// TODO
// - parametrize
// - investigate exit

const batch = 1000;
const multiplier = 5;
const divider = 5;
const stopAt = 0.5;

const computePalette = (id: ImageData, nb: number) => {
  const length = id.width * id.height;
  const sortedBySum = Array(length)
    .fill(null)
    .map((_, i) => ({
      r: id.data[4 * i],
      g: id.data[4 * i + 1],
      b: id.data[4 * i + 2],
    }))
    .sort((a, b) => a.r + a.g + a.b - (b.r + b.g + b.b));
  return Array(nb)
    .fill(null)
    .map((_, i) => sortedBySum[Math.floor((length / nb) * (i + 0.5))])
    .map(({ r, g, b }) => `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`);
};

const options = {
  image: {
    kind: "file",
    accept: "image/*",
  },
} as const;

export default {
  options,
  defaultValues: {
    image: undefined,
  },
  ready: (values) => !!values.image,
  async create(canvas, values) {
    if (!values.image) throw new Error("Image is undefined");

    const { width, height } = canvas.parentElement!.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Can not get context");

    const img = document.createElement("img");
    img.src = URL.createObjectURL(values.image);
    await img.decode();
    ctx.drawImage(img, ...objectFitCover(img.width, img.height, width, height), 0, 0, width, height);
    const id = ctx.getImageData(0, 0, width, height);

    const palette = computePalette(id, 8);

    const stopFn = (light: number, i: number) => (light * multiplier) % 1 < i / divider;

    const createMatrix = <T>(fn: (x: number, y: number) => T) =>
      new Array(width).fill(null).map((_, x) => new Array(height).fill(null).map((__, y) => fn(x, y)));

    const srcR = createMatrix((x, y) => id.data[4 * (width * y + x)] / 256);
    const srcG = createMatrix((x, y) => id.data[4 * (width * y + x) + 1] / 256);
    const srcB = createMatrix((x, y) => id.data[4 * (width * y + x) + 2] / 256);
    const drawnR = createMatrix(() => false);
    const drawnG = createMatrix(() => false);
    const drawnB = createMatrix(() => false);

    const posR = { x: Math.floor(width / 2), y: Math.floor(height / 2) };
    const posG = { x: Math.floor(width / 2), y: Math.floor(height / 2) };
    const posB = { x: Math.floor(width / 2), y: Math.floor(height / 2) };

    const draw = () => {
      drawnR[posR.x][posR.y] = true;
      ctx.fillStyle =
        palette[(drawnR[posR.x][posR.y] ? 4 : 0) + (drawnG[posR.x][posR.y] ? 2 : 0) + (drawnB[posR.x][posR.y] ? 1 : 0)];
      ctx.fillRect(posR.x, posR.y, 1, 1);

      drawnG[posG.x][posG.y] = true;
      ctx.fillStyle =
        palette[(drawnR[posG.x][posG.y] ? 4 : 0) + (drawnG[posG.x][posG.y] ? 2 : 0) + (drawnB[posG.x][posG.y] ? 1 : 0)];
      ctx.fillRect(posG.x, posG.y, 1, 1);

      drawnB[posB.x][posB.y] = true;
      ctx.fillStyle =
        palette[(drawnR[posB.x][posB.y] ? 4 : 0) + (drawnG[posB.x][posB.y] ? 2 : 0) + (drawnB[posB.x][posB.y] ? 1 : 0)];
      ctx.fillRect(posB.x, posB.y, 1, 1);
    };

    const isInCanvas = ({ x, y }: { x: number; y: number }) => x >= 0 && x < width && y >= 0 && y < height;

    let done = false;

    function* spiralPositions(pos: { x: number; y: number }) {
      const spiralPosition = { ...pos };
      for (let l = 1; l < Math.max(width, height); l += 2) {
        for (let i = 0; i < l; i++) {
          spiralPosition.x++;
          if (isInCanvas(spiralPosition)) yield spiralPosition;
        }
        for (let i = 0; i < l; i++) {
          spiralPosition.y++;
          if (isInCanvas(spiralPosition)) yield spiralPosition;
        }
        for (let i = 0; i < l + 1; i++) {
          spiralPosition.x--;
          if (isInCanvas(spiralPosition)) yield spiralPosition;
        }
        for (let i = 0; i < l + 1; i++) {
          spiralPosition.y--;
          if (isInCanvas(spiralPosition)) yield spiralPosition;
        }
      }
      done = true;
    }

    const moveColor = (drawn: boolean[][], pos: { x: number; y: number }, src: number[][]) => {
      let i = 0;
      for (const spiralPosition of spiralPositions(pos)) {
        i++;
        const { x, y } = spiralPosition;
        if (!drawn[x][y]) {
          if (stopFn(src[x][y], i)) {
            pos.x = spiralPosition.x;
            pos.y = spiralPosition.y;
            return;
          }
        }
      }
    };
    const move = () => {
      moveColor(drawnR, posR, srcR);
      moveColor(drawnG, posG, srcG);
      moveColor(drawnB, posB, srcB);
    };

    let nbDrawn = 0;
    let playing = true;
    const loop = () => {
      if (done) return;
      if (!playing) return;
      if (nbDrawn > 3 * width * height * stopAt) return;

      for (let i = 0; i < batch; i++) {
        if (done) return;
        move();
        draw();
        nbDrawn++;
      }
      requestAnimationFrame(loop);
    };
    loop();

    return {
      play() {
        playing = true;
        loop();
      },
      pause() {
        playing = false;
      },
    };
  },
} as Alg<typeof options>;
