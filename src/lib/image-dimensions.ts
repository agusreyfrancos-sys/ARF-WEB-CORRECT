import manifest from "@/data/image-dimensions.json";

const dimensions = manifest as Record<string, { width: number; height: number }>;

// Dimensiones reales de cada foto (generadas desde los archivos en public/),
// para que las páginas de proyecto nunca fuercen un recorte: el ancho lo
// define la grilla, el alto siempre respeta la proporción original.
export function getImageDimensions(src: string): { width: number; height: number } {
  const found = dimensions[src];
  if (!found) {
    throw new Error(`No hay dimensiones registradas para la imagen: ${src}`);
  }
  return found;
}
