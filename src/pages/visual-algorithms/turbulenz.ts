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
  ready: (values) => {
    if (!values.warpedImage) return "Please upload an image you want to warp";
    if (!values.warpMap) return "Please upload an image for the warp map";
    return "";
  },
  create(canvas, values) {
    return {
      play() {},
      pause() {},
    };
  },
} as Alg<typeof options>;
