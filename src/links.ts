type BaseLink = {
  name: string;
  description: string;
};
type ExternalLink = BaseLink & {
  kind: "external";
  link: `https://${string}`;
};
type InternalLink = BaseLink & {
  kind: "internal";
  link: `/${string}`;
};
type Link = InternalLink | ExternalLink;

export const isInternalLink = (link: Link): link is InternalLink => link.kind === "internal";
export const isExternalLink = (link: Link): link is ExternalLink => link.kind === "external";

export const links: Link[] = [
  { kind: "internal", link: "/", name: "Home", description: "" },
  { kind: "internal", link: "/hire-me", name: "Hire me", description: "" },
  { kind: "internal", link: "/visual-algorithms", name: "Visual algorithms", description: "" },
  {
    kind: "external",
    link: "https://instagram.com/ssttaacckkyy",
    name: "Instagram",
    description: "generative art, photography, random",
  },
  {
    kind: "external",
    link: "https://twitter.com/ninofiliu",
    name: "Twitter",
    description: "generative art, web dev research",
  },
  {
    kind: "external",
    link: "https://github.com/ninofiliu",
    name: "Github",
    description: "open source projects",
  },
  {
    kind: "external",
    link: "https://soundcloud.com/stanleyfatmax",
    name: "Soundcloud",
    description: "music",
  },
  {
    kind: "external",
    link: "https://objkt.com/profile/tz1P4WFu3TojcvkiLdgRnsnf3jZ6F1DZzFtb",
    name: "Objkt",
    description: "NFTs",
  },
];
