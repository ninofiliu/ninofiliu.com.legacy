import { Options, Values } from "../../components/form/types";

export type Alg<TOptions extends Options> = {
  options: TOptions;
  defaultValues: Values<TOptions>;
  ready: (values: Values<TOptions>) => boolean;
};
