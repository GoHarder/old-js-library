import { isObject as c } from "@vantage-js/validate";
const f = (n, r) => {
  try {
    return structuredClone(n, r);
  } catch {
    return JSON.parse(JSON.stringify(n));
  }
}, o = (n, ...r) => {
  if (!r.length)
    return n;
  const i = r.shift(), t = f(n);
  if (c(t), c(i))
    for (const e in i) {
      const s = i[e];
      c(s) ? e in t ? t[e] = o(t[e], s) : Object.assign(t, { [e]: s }) : Object.assign(t, { [e]: s });
    }
  return o(t, ...r);
};
export {
  f as clone,
  o as deepMerge
};
