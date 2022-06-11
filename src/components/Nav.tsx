import { Link } from "react-router-dom";
import { isExternalLink, isInternalLink, links } from "../links";

export default () => (
  <nav>
    {links.map((link, i) => (
      <span key={link.name}>
        {i > 0 && " / "}
        {isInternalLink(link) && <Link to={link.to}>{link.name}</Link>}
        {isExternalLink(link) && <a href={link.href}>{link.name}</a>}
      </span>
    ))}
  </nav>
);
