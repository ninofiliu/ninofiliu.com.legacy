import { useEffect, useRef } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

export default ({ src }: { src: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    (async () => {
      if (!divRef.current) return;
      if (divRef.current.childElementCount > 0) return;
      const canvas = document.createElement("canvas");
      divRef.current.append(canvas);

      const img = document.createElement("img");
      img.src = src;
      await img.decode();

      const width = Math.min(256, divRef.current.clientWidth);
      const height = ~~((width * img.height) / img.width);
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      ctx.fillStyle = "white";
      ctx.clearRect(0, 0, width, height);

      const paint = async () => {
        const palette = [
          "black",
          getComputedStyle(document.documentElement).getPropertyValue("--color"),
          getComputedStyle(document.documentElement).getPropertyValue("--light-color"),
          "white",
          "white",
          "white",
          "white",
        ];

        const length = imageData.data.length / 4;
        let iDiff = 2;
        while (gcd(iDiff, length) !== 1) iDiff++;

        for (let step = 0; step < length * 0.9; step++) {
          let i = (step * iDiff) % length;
          const light = (imageData.data[4 * i] + imageData.data[4 * i + 1] + imageData.data[4 * i + 2]) / (256 * 3);
          ctx.fillStyle = palette[~~(light * palette.length)];
          ctx.fillRect(i % width, ~~(i / width), 1, 1);
          if (step % 1000 === 0) await new Promise((r) => requestAnimationFrame(r));
        }
      };

      const mess = async () => {
        const step = Math.random() * 0.5;
        for (let i = 0; i < 90; i++) {
          const oldImageData = ctx.getImageData(0, 0, width, height);
          const newImageData = new ImageData(width, height);
          for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let i = 4 * (width * y + x);
              let sx = Math.floor((x - step + ((2 * step + 1) * oldImageData.data[i]) / 256 + width) % width);
              let sy = Math.floor((y - step + ((2 * step + 1) * oldImageData.data[i + 1]) / 256 + height) % height);
              const si = 4 * (width * sy + sx);
              for (let di = 0; di < 4; di++) newImageData.data[i + di] = oldImageData.data[si + di];
            }
          }
          ctx.putImageData(newImageData, 0, 0);
          await new Promise((r) => requestAnimationFrame(r));
        }
      };

      while (true) {
        await paint();
        await mess();
      }
    })();
  }, [divRef.current]);
  return <div ref={divRef} />;
};
