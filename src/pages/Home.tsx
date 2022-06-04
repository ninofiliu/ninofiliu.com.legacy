import "./Home.css";

type SummaryItem = {
  name: string;
  description: string;
  cover: string;
  link: string;
};

// TODO: cryptic, drawings, digital experimentations, textures, black and white, youth, bodies, gradient
const summary: SummaryItem[] = [
  {
    name: "Supermosh",
    description: "Datamoshing in the browser",
    cover: "/covers/cover-supermosh.jpg",
    link: "https://supermosh.github.io",
  },
  {
    name: "Turbulenz",
    description: "A visual algorithm that puts wind in the pixels of your pictures",
    cover: "/covers/cover-turbulenz.jpg",
    link: "https://turbulenz.ninofiliu.com/",
  },
  {
    name: "As If My Phone Cares About Museums",
    description: "A sculpture that gets scared when you get close too close to it - w/ Paul Créange @ Gia's project space",
    cover: "/covers/as-if.jpg",
    link: "https://www.instagram.com/p/CPtJSRtCvJF/",
  },
  {
    name: "RoomXYFT",
    description: "Installation involving audioreactive visuals and modular synthesizers - w/ Aleksey Larionov @ Poush",
    cover: "/covers/room-xyft.jpg",
    link: "https://www.instagram.com/p/CZ4bzYGLQ9p/",
  },
  {
    name: "GettorBot",
    description:
      "A Signal chatbot to broadcast Tor bridges in countries where Tor relays are blocked/monitored - w/ Sonia Veselova",
    cover: "/covers/gettor-bot.jpg",
    link: "https://github.com/ninofiliu/gettor-bot",
  },
  {
    name: "The Color of the Wind",
    description: "Wind goes in, color goes out - w/ Paul Créange @ Poush",
    cover: "/covers/La-couleur-du-vent-detail-5-%C2%A9%EF%B8%8F-PCP16TH-et-GiaxGia-studio-1-scaled.jpg",
    link: "https://poush.fr/en/programmation/the-color-of-the-wind-by-paul-creange/",
  },
  {
    name: "Curvature",
    description: "Ambient/techno EP",
    cover: "/covers/curvature.jpg",
    link: "https://soundcloud.com/stanleyfatmax/sets/curvature",
  },
  {
    name: "clairefrances.fr",
    description: "Portfolio website for my friend Claire",
    cover: "/covers/claire-frances.jpg",
    link: "clairefrances.fr",
  },
  {
    name: "esgrep",
    description: "Syntactically-aware grep for JavaScript and TypeScript",
    cover: "/covers/coding.jpg",
    link: "https://github.com/ninofiliu/esgrep",
  },
];

export default () => (
  <div className="Home">
    <div>
      Hi, I'm Nino Filiu
      <br />
      <br />
      I create art with code, videos, music, programs, and other things too
      <br />
      <br />
      <a href="https://instagram.com/ssttaacckkyy">Instagram</a>: generative art, photography, random
      <br />
      <a href="https://twitter.com/ninofiliu">Twitter</a>: generative art, web dev research
      <br />
      <a href="https://github.com/ninofiliu">Github</a>: open source projects
      <br />
      <a href="https://soundcloud.com/stanleyfatmax">Soundcloud</a>: music
      <br />
      <a href="https://objkt.com/profile/tz1P4WFu3TojcvkiLdgRnsnf3jZ6F1DZzFtb">Objkt</a>: NFTs
      <br />
    </div>
    <div className="Home-summary">
      Everything I am proud of:
      {summary.map((item) => (
        <a href={item.link} className="Home-summary-item">
          <img src={item.cover}></img>
          <div>
            <strong>{item.name}</strong>: {item.description}
          </div>
        </a>
      ))}
    </div>
  </div>
);
