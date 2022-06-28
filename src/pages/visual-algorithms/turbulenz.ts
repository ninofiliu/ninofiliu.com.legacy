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
  create(canvas, values) {
    return {
      play() {},
      pause() {},
    };
  },
} as Alg<typeof options>;
