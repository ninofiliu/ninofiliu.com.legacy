import { Alg } from "./types";

const turbulenzOptions = {
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
  options: turbulenzOptions,
  defaultValues: {
    warpedImage: undefined,
    warpMap: undefined,
    force: 1,
  },
  ready: () => false,
} as Alg<typeof turbulenzOptions>;
