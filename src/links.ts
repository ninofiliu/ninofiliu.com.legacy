type BaseLink = {
  name: string;
  description: string;
};
type ExternalLink = BaseLink & {
  kind: "external";
  href: `https://${string}`;
};
type InternalLink = BaseLink & {
  kind: "internal";
  to: `/${string}`;
};
type Link = InternalLink | ExternalLink;

export const isInternalLink = (link: Link): link is InternalLink => link.kind === "internal";
export const isExternalLink = (link: Link): link is ExternalLink => link.kind === "external";

export const links: Link[] = [
  { kind: "internal", to: "/", name: "Home", description: "" },
  { kind: "internal", to: "/hire-me", name: "Hire me", description: "" },
  { kind: "internal", to: "/visual-algorithms", name: "Visual algorithms", description: "" },
  {
    kind: "external",
    href: "https://instagram.com/ssttaacckkyy",
    name: "Instagram",
    description: "generative art, photography, random",
  },
  {
    kind: "external",
    href: "https://twitter.com/ninofiliu",
    name: "Twitter",
    description: "generative art, web dev research",
  },
  {
    kind: "external",
    href: "https://github.com/ninofiliu",
    name: "Github",
    description: "open source projects",
  },
  {
    kind: "external",
    href: "https://soundcloud.com/stanleyfatmax",
    name: "Soundcloud",
    description: "music",
  },
  {
    kind: "external",
    href: "https://objkt.com/profile/tz1P4WFu3TojcvkiLdgRnsnf3jZ6F1DZzFtb",
    name: "Objkt",
    description: "NFTs",
  },
];
