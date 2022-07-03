import { Alg } from "./types";

const options = {
  warpedImage: {
    kind: "file",
    accept: "image/*",
  },
  warpMap: {
    kind: "file",
    accept: "image/*",
  },
  force: {
    kind: "number",
    min: 0,
  },
} as const;

export default {
  options,
  defaultValues: {
    warpedImage: undefined,
    warpMap: undefined,
    force: 1,
  },
  ready: (values) => !!(values.warpedImage && values.warpMap),
  async create(canvas, values) {
    if (!values.warpMap) throw new Error("Warp map is undefined");
    if (!values.warpedImage) throw new Error("Warped image is undefined");

    const { width, height } = canvas.parentElement!.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Can not get context");

    const warpMapImg = document.createElement("img");
    warpMapImg.src = URL.createObjectURL(values.warpMap);
    await warpMapImg.decode();
    ctx.drawImage(warpMapImg, 0, 0, warpMapImg.width, warpMapImg.height, 0, 0, width, height);
    const warpMapImageData = ctx.getImageData(0, 0, width, height);

    const warpedImageImg = document.createElement("img");
    warpedImageImg.src = URL.createObjectURL(values.warpedImage);
    await warpedImageImg.decode();
    ctx.drawImage(warpedImageImg, 0, 0, warpedImageImg.width, warpedImageImg.height, 0, 0, width, height);

    let shouldPause = false;
    const loop = () => {
      if (shouldPause) return;
      const currentId = ctx.getImageData(0, 0, width, height);
      const nextId = new ImageData(width, height);
      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const mapI = 4 * (width * y + x);
          const dx = values.force * (-0.5 + warpMapImageData.data[mapI] / 255);
          const dy = values.force * (-0.5 + warpMapImageData.data[mapI + 1] / 255);
          const mappedX = Math.round(x + dx + width) % width;
          const mappedY = Math.round(y + dy + height) % height;
          const mappedI = 4 * (width * mappedY + mappedX);
          for (let i = 0; i < 4; i++) {
            nextId.data[mapI + i] = currentId.data[mappedI + i];
          }
        }
      }
      ctx.putImageData(nextId, 0, 0);
      requestAnimationFrame(loop);
    };
    loop();

    return {
      play() {
        shouldPause = false;
        loop();
      },
      pause() {
        shouldPause = true;
      },
    };
  },
} as Alg<typeof options>;
