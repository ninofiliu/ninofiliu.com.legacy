type Option =
  | {
      kind: "fileInput";
      accept: string;
    }
  | {
      kind: "number";
      min: number;
      max: number;
    };

type ValueMap = {
  fileInput: File;
  number: Number;
};

type Value<TOption extends Option> = ValueMap[TOption["kind"]];

type Options = { [name: string]: Option };

type Values<TOptions extends Options> = { [key in keyof TOptions]: Value<TOptions[key]> };

export default <TOptions extends Options>({
  options,
  values,
  onChange,
}: {
  options: TOptions;
  values: Values<TOptions>;
  onChange: (newValues: Values<TOptions>) => any;
}) => <></>;
