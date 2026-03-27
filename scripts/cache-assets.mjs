import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const BASE_URL = (process.env.ASSET_SOURCE ?? "https://daggerheart.su").replace(/\/+$/, "");
const SHOULD_REFRESH = process.env.ASSET_REFRESH === "1";
const PUBLIC_DIR = resolve("public");
const DATA_PATH = resolve(PUBLIC_DIR, "data", "adversaries.json");
const ENDPOINT = `${BASE_URL}/api/adversary?lang=ru`;

async function ensureDir(path) {
  await mkdir(path, { recursive: true });
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function normalizeAssetPath(pathname) {
  if (!pathname) return null;
  if (/^https?:\/\//i.test(pathname)) {
    const url = new URL(pathname);
    return url.pathname;
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url} (${response.status})`);
  }
  return await response.json();
}

async function downloadAsset(pathname) {
  const normalized = normalizeAssetPath(pathname);
  if (!normalized) return;

  const targetPath = resolve(PUBLIC_DIR, `.${normalized}`);
  if (!SHOULD_REFRESH && (await fileExists(targetPath))) {
    return;
  }

  await ensureDir(dirname(targetPath));

  const url =
    pathname.startsWith("http://") || pathname.startsWith("https://")
      ? pathname
      : `${BASE_URL}${normalized}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url} (${response.status})`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(targetPath, buffer);
}

async function readCachedPayload() {
  if (!(await fileExists(DATA_PATH))) return null;
  const raw = await readFile(DATA_PATH, "utf8");
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function loadPayload() {
  if (!SHOULD_REFRESH) {
    const cached = await readCachedPayload();
    if (cached) return cached;
  }

  const payload = await fetchJson(ENDPOINT);
  await ensureDir(dirname(DATA_PATH));
  await writeFile(DATA_PATH, JSON.stringify(payload, null, 2));
  return payload;
}

async function main() {
  const payload = await loadPayload();
  const items = Array.isArray(payload?.data) ? payload.data : [];
  const imageUrls = new Set(
    items
      .map((item) => item?.image_url)
      .filter((value) => typeof value === "string" && value.trim().length > 0)
  );

  for (const imageUrl of imageUrls) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await downloadAsset(imageUrl);
    } catch (error) {
      console.warn(String(error));
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
