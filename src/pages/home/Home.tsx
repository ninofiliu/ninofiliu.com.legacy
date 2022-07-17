import AppLink from "../../components/AppLink";
import { links, isExternalLink } from "../../links";
import Dither from "./Dither";
import "./Home.css";
import summary from "./summary";

export default () => (
  <div className="Home">
    <div>
      <Dither src="/nino.jpg" />
      <br />
      Hi, I'm Nino Filiu
      <br />
      <br />
      I create art with code, videos, music, programs, and other things too
      <br />
      <br />
      {links.filter(isExternalLink).map((link) => (
        <div key={link.name}>
          <AppLink link={link.link}>{link.name}</AppLink>: {link.description}
        </div>
      ))}
      <br />
      <AppLink link="/hire-me">Hire me</AppLink>
    </div>
    <div className="Home-summary">
      {summary.map((item) => (
        <AppLink link={item.link} className="Home-summary-item" key={item.name}>
          <img src={item.cover}></img>
          <div>
            <strong>{item.name}</strong>: {item.description}
          </div>
        </AppLink>
      ))}
    </div>
  </div>
);
