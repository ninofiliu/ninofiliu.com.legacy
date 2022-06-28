import { Link } from "react-router-dom";
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
        <>
          <a href={link.href}>{link.name}</a>: {link.description}
          <br />
        </>
      ))}
      <br />
      <Link to="/hire-me">Hire me</Link>
    </div>
    <div className="Home-summary">
      {summary.map((item) =>
        "link" in item ? (
          <a href={item.link} className="Home-summary-item" key={item.name}>
            <img src={item.cover}></img>
            <div>
              <strong>{item.name}</strong>: {item.description}
            </div>
          </a>
        ) : (
          <Link to={item.to} className="Home-summary-item" key={item.name}>
            <img src={item.cover}></img>
            <div>
              <strong>{item.name}</strong>: {item.description}
            </div>
          </Link>
        )
      )}
    </div>
  </div>
);
