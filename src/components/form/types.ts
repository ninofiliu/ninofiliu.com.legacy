export type FileOption = {
  kind: "file";
  accept: string;
};

export type NumberOption = {
  kind: "number";
  min?: number;
  max?: number;
};

export type Option = FileOption | NumberOption;

export type Value<TOption extends Option> = {
  file: File | undefined;
  number: Number;
}[TOption["kind"]];

export type Options = { [name: string]: Option };

export type Values<TOptions extends Options> = {
  [key in keyof TOptions]: Value<TOptions[key]>;
};
