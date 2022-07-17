import { links } from "../links";
import AppLink from "./AppLink";

export default () => (
  <nav>
    {links.map((link, i) => (
      <span key={link.name}>
        {i > 0 && " / "}
        <AppLink link={link.link}>{link.name}</AppLink>
      </span>
    ))}
  </nav>
);
