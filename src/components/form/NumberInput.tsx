import { useEffect, useState } from "react";

export default ({ value, onChange }: { value: number; onChange: (newValue: number) => any }) => {
  const [inputValue, setInputValue] = useState(`${value}`);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const newValue = evt.target.value;
    setInputValue(newValue);
    if (newValue) onChange(+newValue);
  };

  useEffect(() => {
    setInputValue(`${value}`);
  }, [value]);

  return <input type="number" value={inputValue} onChange={onInputChange} />;
};
