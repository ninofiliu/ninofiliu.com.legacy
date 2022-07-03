import "./FileInput.css";

export default ({
  value,
  onChange,
  accept,
}: {
  value: File | undefined;
  onChange: (newValue: File | undefined) => any;
  accept: string;
}) => {
  return (
    <label className="FileInput">
      {value ? (
        <>
          <img src={URL.createObjectURL(value)} />
          <div className="FileInput-hover-text">Chose another</div>
        </>
      ) : (
        <div className="FileInput-placeholder">No file selected</div>
      )}
      <input type="file" onChange={(evt) => onChange(evt.target.files![0])} accept={accept} />
    </label>
  );
};
