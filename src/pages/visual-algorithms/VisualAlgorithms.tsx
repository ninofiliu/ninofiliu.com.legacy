import { useState } from "react";
import Nav from "../../components/Nav";
import "./VisualAlgorithms.css";

type Alg = {
  name: string;
  text: JSX.Element;
};

const algs: Alg[] = [
  {
    name: "Turbulenz",
    text: (
      <>
        <h2>Turbulenz</h2>
        <p>Takes an image and repeatedly warp it according to a warp map image</p>
        <p>
          If a pixel at (x,y) is very red, it's gonna shift the pixel right, and if it's very green, it's gonna shift the pixel
          down
        </p>
      </>
    ),
  },
];

const texts = {
  home: (
    <>
      <h2>Visual algorithms</h2>
      <p>
        I make a lot of art with code but I don't wanna be like the other creative coders out there, keeping their programs
        secret and stuff :/
      </p>
      <p>That's why I expose most of my programs in this no code app that everybody can use for free without rate limit</p>
      <p>
        Have fun using feeding your own pics/vids to my little monsters, and please mention me if you post anything on social
        media
      </p>
      <p>(´｡•ᵕ•｡`)♡</p>
      <Nav />
    </>
  ),
};

export default () => {
  const [alg, setAlg] = useState<Alg | undefined>(undefined);

  const text = (() => {
    if (alg === undefined) return texts.home;
    return alg.text;
  })();

  const selectAlg = (name: string) => {
    setAlg(algs.find((a) => a.name === name));
  };

  return (
    <div className="VisualAlgorithms">
      <div className="-controls">
        <select onChange={(evt) => selectAlg(evt.target.value)}>
          <option>Chose an algorithm</option>
          {algs.map((alg) => (
            <option key={alg.name}>{alg.name}</option>
          ))}
        </select>
      </div>
      <div className="-text-container">
        <div className="-text">{text}</div>
      </div>
    </div>
  );
};
