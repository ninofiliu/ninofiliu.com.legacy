import { Alg } from "./types";

const options = {
  nb: {
    kind: "number",
  },
} as const;

export default {
  options,
  defaultValues: {
    nb: 10,
  },
  ready: (values) => values.nb < 10,

  create(canvas, values) {
    const { width, height } = canvas.parentElement!.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "red";

    let paused = false;
    const loop = () => {
      if (paused) return;
      ctx.fillRect(width * Math.random(), height * Math.random(), values.nb, values.nb);
      requestAnimationFrame(loop);
    };
    loop();
    return {
      play() {
        if (!paused) return;
        paused = false;
        loop();
      },
      pause() {
        paused = true;
      },
    };
  },
} as Alg<typeof options>;
