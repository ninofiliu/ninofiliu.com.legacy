/** For an image of dimensions (w,h) that has to fit in a container of dimensions (dw, dh), computes the cropped rectangle to be displayed and returns it as (sx, sy, sw, sh) */
export default (w: number, h: number, dw: number, dh: number) => {
  const [sw, sh] = w / h <= dw / dh ? [w, (w * dh) / dw] : [(h * dw) / dh, h];
  return [(w - sw) / 2, (h - sh) / 2, sw, sh] as const;
};
