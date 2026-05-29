const fs = require("fs");
let c = fs.readFileSync("next.config.mjs", "utf8");
const start = c.indexOf("async redirects() {");
const end = c.indexOf("  async rewrites() {");
const before = c.substring(0, start);
const after = c.substring(end);
const nr = `async redirects() {
    const thinGuide = ["packing","safety","students","food","scooter","yoga","forts","seafood","snow","ruins","ghats","sarnath"];
    const thinBlogs = ["packing","safety"];
    const budgetMins = ["1100","1200","1400","1500","2800"];
    const guideR = thinGuide.map(q => ({ source: "/guide", has: [{ type: "query", key: "q", value: q }], destination: "/guide", permanent: true }));
    const blogR = thinBlogs.map(q => ({ source: "/blogs", has: [{ type: "query", key: "q", value: q }], destination: "/blogs", permanent: true }));
    const budgetR = budgetMins.map(min => ({ source: "/guide", has: [{ type: "query", key: "budgetMin", value: min }], destination: "/guide", permanent: true }));
    return [
      { source: "/:path*", has: [{ type: "host", value: "www.budgetyatra.online" }], destination: "https://budgetyatra.online/:path*", permanent: true },
      { source: "/:path+/", destination: "/:path+", permanent: true },
      ...guideR, ...blogR, ...budgetR,
    ];
  },`;
const newContent = before + nr + "\n  " + after;
fs.writeFileSync("next.config.mjs", newContent, "utf8");
console.log("Done:", newContent.includes("thinGuide"));