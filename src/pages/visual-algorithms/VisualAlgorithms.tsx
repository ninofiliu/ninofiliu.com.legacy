import startCase from "lodash/startCase";
import { useRef, useState } from "react";
import Form from "../../components/form/Form";
import "./VisualAlgorithms.css";
import debug from "./debug";
import texts from "./texts";
import turbulenz from "./turbulenz";
import { AlgRunner } from "./types";
import debugRed from "./debugRed";

const algs = { turbulenz, debug, debugRed };

export default () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [algName, setAlgName] = useState<keyof typeof algs | "">("");
  const [values, setValues] = useState<any>({});
  const [runner, setRunner] = useState<AlgRunner>({ play() {}, pause() {} });
  const [state, setState] = useState<"idle" | "running" | "paused">("idle");

  const getAlg = (name: keyof typeof algs | "") => (name === "" ? undefined : algs[name]);
  const alg = getAlg(algName);
  const ready = alg ? alg.ready(values) : "";

  const selectAlg = (name: keyof typeof algs | "") => {
    if (state === "running") runner.pause();
    setState("idle");
    setAlgName(name);
    const newAlg = getAlg(name);
    if (newAlg) {
      setValues(newAlg.defaultValues);
    } else {
      setValues({});
    }
  };

  const start = async () => {
    if (!alg) return; // won't happen, cf DOM
    if (state === "running") runner.pause();
    setState("running");
    while (!canvasRef.current) {
      await new Promise((r) => requestAnimationFrame(r));
    }
    setRunner(alg.create(canvasRef.current, values));
  };

  const play = () => {
    runner.play();
    setState("running");
  };

  const pause = () => {
    runner.pause();
    setState("paused");
  };

  return (
    <div className="VisualAlgorithms">
      <div className="-controls">
        <select value={algName} onChange={(evt) => selectAlg(evt.target.value as keyof typeof algs | "")}>
          <option value="">Chose an algorithm</option>
          {Object.keys(algs).map((name) => (
            <option key={name} value={name}>
              {startCase(name)}
            </option>
          ))}
        </select>
        {alg && (
          <>
            <p className="u-button-row">
              <button onClick={start} disabled={!ready}>
                Start
              </button>
              <button onClick={play} disabled={state !== "paused"}>
                Play
              </button>
              <button onClick={pause} disabled={state !== "running"}>
                Pause
              </button>
            </p>
            <Form options={alg.options} values={values} onChange={setValues} />
          </>
        )}
      </div>
      {state === "idle" ? (
        <div className="-text-container">
          <div className="-text">{algName === "" ? texts.home : texts[algName]}</div>
        </div>
      ) : (
        <div className="-out">
          <canvas ref={canvasRef} />
        </div>
      )}
    </div>
  );
};
