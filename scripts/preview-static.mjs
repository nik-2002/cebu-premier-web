import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import { cwd } from "node:process";

const root = join(cwd(), "out");
const port = Number(process.env.PORT || 3001);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function resolveFile(requestUrl = "/") {
  const urlPath = decodeURIComponent(requestUrl.split("?")[0] || "/");
  const safePath = urlPath.replace(/^\/+/, "");
  const candidates = [];

  if (urlPath === "/") {
    candidates.push("index.html");
  }

  candidates.push(safePath);
  candidates.push(`${safePath}.html`);
  candidates.push(join(safePath, "index.html"));

  for (const candidate of candidates) {
    const filePath = join(root, candidate);
    if (filePath.startsWith(root) && existsSync(filePath) && statSync(filePath).isFile()) {
      return filePath;
    }
  }

  return join(root, "404.html");
}

createServer((request, response) => {
  const filePath = resolveFile(request.url);
  response.setHeader("Content-Type", contentTypes[extname(filePath)] || "application/octet-stream");
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Static preview running at http://localhost:${port}`);
});
