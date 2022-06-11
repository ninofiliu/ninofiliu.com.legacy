import { useEffect, useRef, useState } from "react";
import Form from "../../components/form/Form";
import "./VisualAlgorithms.css";
import turbulenz from "./turbulenz";
import texts from "./texts";
import startCase from "lodash/startCase";

const algs = { turbulenz };

export default () => {
  const [algName, setAlgName] = useState<keyof typeof algs | "">("");
  const [values, setValues] = useState<any>({});

  const getAlg = (name: keyof typeof algs | "") => (name === "" ? undefined : algs[name]);
  const alg = getAlg(algName);

  const selectAlg = (name: keyof typeof algs | "") => {
    setAlgName(name);
    const newAlg = getAlg(name);
    if (newAlg) {
      setValues(newAlg.defaultValues);
    } else {
      setValues({});
    }
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [started, setStarted] = useState(false);
  const start = async () => {
    setStarted(true);
    while (!canvasRef.current) {
      await new Promise((r) => requestAnimationFrame(r));
    }
    console.log(canvasRef.current);
  };

  return (
    <div className="VisualAlgorithms">
      <div className="-controls">
        <select value={algName} onChange={(evt) => selectAlg(evt.target.value as keyof typeof algs | "")}>
          <option>Chose an algorithm</option>
          {Object.keys(algs).map((name) => (
            <option key={name} value={name}>
              {startCase(name)}
            </option>
          ))}
        </select>
        {alg && (
          <>
            <p>{alg.ready(values) || <button onClick={start}>Start</button>}</p>
            <Form options={alg.options} values={values} onChange={setValues} />
          </>
        )}
      </div>
      {started ? (
        <div className="-out">
          <canvas ref={canvasRef} />
        </div>
      ) : (
        <div className="-text-container">
          <div className="-text">{algName === "" ? texts.home : texts[algName]}</div>
        </div>
      )}
    </div>
  );
};
