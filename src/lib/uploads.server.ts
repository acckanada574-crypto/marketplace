import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

const DEFAULT_ROOT = path.join(process.cwd(), "public", "storage");
const PUBLIC_PREFIX = "/storage";

export const IMAGE_LIMIT_BYTES = 10 * 1024 * 1024;
export const MAX_PRODUCT_IMAGES = 8;
export const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

function storageRoot() {
  return path.resolve(process.env.LOCAL_STORAGE_DIR?.trim() || DEFAULT_ROOT);
}

function extensionFor(file: File) {
  const extensions: Record<string, string> = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
  };
  return extensions[file.type] ?? ".bin";
}

export type SavedUpload = {
  id: string;
  storageKey: string;
  publicPath: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  sha256: string;
  absolutePath: string;
};

export async function saveProductImage(file: File): Promise<SavedUpload> {
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
    throw new Error("Разрешены только JPG, PNG и WebP");
  }
  if (!file.size || file.size > IMAGE_LIMIT_BYTES) {
    throw new Error("Размер одного изображения не должен превышать 10 МБ");
  }

  const id = crypto.randomUUID();
  const storageKey = `products/${id}${extensionFor(file)}`;
  const absolutePath = path.join(storageRoot(), storageKey);
  await fs.mkdir(path.dirname(absolutePath), { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  const sha256 = crypto.createHash("sha256").update(buffer).digest("hex");
  await fs.writeFile(absolutePath, buffer, { flag: "wx" });

  return {
    id,
    storageKey,
    publicPath: `${PUBLIC_PREFIX}/${storageKey}`,
    originalName: path.basename(file.name).slice(0, 255),
    mimeType: file.type,
    sizeBytes: buffer.length,
    sha256,
    absolutePath,
  };
}

export async function removeUpload(upload: Pick<SavedUpload, "absolutePath">) {
  await fs.rm(upload.absolutePath, { force: true });
}
