import { Options, Values } from "../../components/form/types";

export type AlgRunner = {
  play: () => void;
  pause: () => void;
};

export type Alg<TOptions extends Options> = {
  options: TOptions;
  defaultValues: Values<TOptions>;
  ready: (values: Values<TOptions>) => boolean;
  create: (canvas: HTMLCanvasElement, values: Values<TOptions>) => AlgRunner;
};
