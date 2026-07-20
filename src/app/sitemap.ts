import type { MetadataRoute } from "next";
import { proyectos } from "@/data/proyectos";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const proyectoUrls = proyectos.map((p) => ({
    url: `${SITE_URL}/proyectos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: SITE_URL, lastModified: new Date() },
    { url: `${SITE_URL}/proyectos`, lastModified: new Date() },
    { url: `${SITE_URL}/sobre-mi`, lastModified: new Date() },
    ...proyectoUrls,
  ];
}
