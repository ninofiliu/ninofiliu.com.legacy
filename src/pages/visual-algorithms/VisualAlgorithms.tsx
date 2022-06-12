import startCase from "lodash/startCase";
import { useRef, useState } from "react";
import Form from "../../components/form/Form";
import "./VisualAlgorithms.css";
import debug from "./debug";
import texts from "./texts";
import turbulenz from "./turbulenz";
import { AlgRunner } from "./types";

const algs = { turbulenz, debug };

export default () => {
  const [algName, setAlgName] = useState<keyof typeof algs | "">("");
  const [values, setValues] = useState<any>({});
  const [runner, setRunner] = useState<AlgRunner>({ play() {}, pause() {} });

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
    if (!alg) return; // won't happen, cf DOM
    setStarted(true);
    while (!canvasRef.current) {
      await new Promise((r) => requestAnimationFrame(r));
    }
    setRunner(alg.create(canvasRef.current, values));
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
            <p>
              {alg.ready(values) || (
                <>
                  <button onClick={start}>Start</button>
                  <button onClick={runner.pause}>Pause</button>
                </>
              )}
            </p>
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
