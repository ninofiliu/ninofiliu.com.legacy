import { Options, Values } from "./types";
import lowerCase from "lodash/lowerCase";

export default <TOptions extends Options>({
  options,
  values,
  onChange,
}: {
  options: TOptions;
  values: Values<TOptions>;
  onChange: (newValues: Values<TOptions>) => any;
}) => {
  return (
    <>
      {Object.entries(options).map(([name, option]) => (
        <div className="Option" key={name}>
          <h4>{lowerCase(name)}</h4>
          {option.kind === "file" && (
            <input
              type="file"
              accept={option.accept}
              onChange={(evt) => onChange({ ...values, [name]: evt.target.files![0] })}
            />
          )}
          {option.kind === "number" && (
            <input
              type="number"
              value={values[name] as number}
              onChange={(evt) => onChange({ ...values, [name]: +evt.target.value })}
            />
          )}
        </div>
      ))}
    </>
  );
};
