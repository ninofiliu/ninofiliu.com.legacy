import { Alg } from "./types";

const options = {
  nb: {
    kind: "number",
  },
} as const;

export default {
  options,
  defaultValues: {
    nb: 0,
  },
  ready: () => "",

  create(canvas, values) {
    const { width, height } = canvas.parentElement!.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "lime";

    let paused = false;
    const loop = () => {
      if (paused) return;
      ctx.fillRect(width * Math.random(), height * Math.random(), values.nb, values.nb);
      requestAnimationFrame(loop);
    };
    loop();
    return {
      play() {
        paused = false;
        loop();
      },
      pause() {
        paused = true;
      },
    };
  },
} as Alg<typeof options>;
