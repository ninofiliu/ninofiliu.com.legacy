import { Alg } from "./types";

const options = {} as const;

export default {
  options: {},
  defaultValues: {},
  ready: () => false,
  create: async () => {
    return {
      play: () => {},
      pause: () => {},
    };
  },
} as Alg<typeof options>;
