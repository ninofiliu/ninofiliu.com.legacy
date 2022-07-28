import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";

type BuildInfos = {
  path: string;
  title: string;
  description: string;
  image: string;
};

const buildInfos: BuildInfos[] = [
  {
    path: "/",
    title: "Nino Filiu",
    description: "They create art with code, videos, music, programs, and other things too",
    image: "/covers/home.jpg",
  },
  {
    path: "/hire-me",
    title: "Hire Nino Filiu",
    description: "Nino's almost extensive list of jobs and projects",
    image: "/covers/coding.jpg",
  },
  {
    path: "/visual-algorithms",
    title: "Visual Algorithms",
    description: "Nino's generative art tools, open for everyone to use",
    image: "/covers/turbulenz.jpg",
  },
];

(async () => {
  const content = await Deno.readTextFile("./dist/index.html");
  const parser = new DOMParser();
  for (const buildInfo of buildInfos) {
    const document = parser.parseFromString(content, "text/html");
    if (!document) throw new Error("Can not parse doc");
    const ogp = {
      title: buildInfo.title,
      type: "website",
      image: `https://ninofiliu.com${buildInfo.image}`,
      url: `https://ninofiliu.com${buildInfo.path}`,
      description: buildInfo.description,
    };
    Object.entries(ogp).forEach(([key, value]) => {
      const meta = document.createElement("meta");
      meta.setAttribute("property", `og:${key}`);
      meta.setAttribute("content", value);
      document.head.appendChild(meta);
    });
    const { documentElement } = document;
    if (!documentElement) throw new Error("No document element");
    await Deno.mkdir(`./dist${buildInfo.path}`, { recursive: true });
    await Deno.writeTextFile(`./dist${buildInfo.path}/index.html`, documentElement.outerHTML);
  }
})();
