import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { proyectos, getProyecto, getProyectoImagenes } from "@/data/proyectos";
import { ProyectoHero } from "@/components/proyecto/ProyectoHero";
import { ProyectoGaleria } from "@/components/proyecto/ProyectoGaleria";
import { ProyectoCreditos } from "@/components/proyecto/ProyectoCreditos";
import { ProyectoNav } from "@/components/proyecto/ProyectoNav";

export async function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proyecto = getProyecto(slug);
  if (!proyecto) return {};
  const description = proyecto.anio
    ? `${proyecto.titulo} — ${proyecto.categoria}, ${proyecto.anio}. Proyecto de Agustina Rey Francos.`
    : `${proyecto.titulo} — ${proyecto.categoria}. Proyecto de Agustina Rey Francos.`;
  const [cover] = getProyectoImagenes(proyecto);
  return {
    title: proyecto.titulo,
    description,
    alternates: { canonical: `/proyectos/${proyecto.slug}` },
    openGraph: {
      title: `${proyecto.titulo} — Agustina Rey Francos`,
      description,
      url: `/proyectos/${proyecto.slug}`,
      images: cover ? [{ url: cover }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${proyecto.titulo} — Agustina Rey Francos`,
      description,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function ProyectoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = proyectos.findIndex((p) => p.slug === slug);
  const proyecto = index === -1 ? undefined : proyectos[index];

  if (!proyecto) {
    notFound();
  }

  const imagenes = getProyectoImagenes(proyecto);
  const [cover, ...resto] = imagenes;
  const anterior = proyectos[index - 1];
  const siguiente = proyectos[index + 1];

  return (
    <>
      <ProyectoHero proyecto={proyecto} cover={cover} />
      {resto.length > 0 && (
        <ProyectoGaleria imagenes={resto} titulo={proyecto.titulo} />
      )}
      {proyecto.creditos && <ProyectoCreditos creditos={proyecto.creditos} />}
      <ProyectoNav anterior={anterior} siguiente={siguiente} />
    </>
  );
}
