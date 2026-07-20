export type Credito = {
  rol: string;
  valor: string[];
};

export type Proyecto = {
  slug: string;
  titulo: string;
  categoria: string;
  // Solo se completa cuando hay una fecha real confirmada (EXIF del archivo).
  anio?: string;
  // Texto introductorio verbatim, cuando el proyecto lo tiene (ej. L'heure bleue).
  nota?: string;
  cantidadImagenes: number;
  extension: string;
  creditos?: Credito[];
};

// El orden de esta lista define el orden del índice de Proyectos.
export const proyectos: Proyecto[] = [
  {
    slug: "casa-helene",
    titulo: "Casa Héléne",
    categoria: "Editorial",
    anio: "2026",
    cantidadImagenes: 9,
    extension: "jpg",
    creditos: [
      { rol: "Dirección Creativa", valor: ["Terrestre Studio | Agustina Rey Francos"] },
      { rol: "Fotografía", valor: ["Palu Camilli"] },
      { rol: "Makeup y Pelo", valor: ["Petra Paraquett"] },
      { rol: "Modelo", valor: ["Cata Lo Cane × Lo Management"] },
      { rol: "Estilismo", valor: ["Agustina Rey Francos & Tamara Locatelli"] },
    ],
  },
  {
    slug: "eleven-palace",
    titulo: "Eleven Palace",
    categoria: "Sobre BA",
    anio: "2026",
    cantidadImagenes: 9,
    extension: "jpg",
    creditos: [
      { rol: "Fotografía", valor: ["@bibixbibi"] },
      { rol: "Producción", valor: ["@sofibremermann"] },
      { rol: "Model", valor: ["@pameminola x @adon_management"] },
      { rol: "Styling", valor: ["@agustinareyf @tamaralocatelli_"] },
      { rol: "Makeup & Hair", valor: ["@petraparaquett"] },
    ],
  },
  {
    slug: "ciudad-de-ensueno",
    titulo: "Ciudad de Ensueño",
    categoria: "Sobre BA",
    anio: "2026",
    cantidadImagenes: 10,
    extension: "jpg",
    creditos: [
      { rol: "Fotografía", valor: ["@bibixbibi"] },
      { rol: "Producción", valor: ["@sofibremermann"] },
      { rol: "Model", valor: ["@rutenbergvictoriaa x @adon_management"] },
      { rol: "Styling", valor: ["@agustinareyf @tamaralocatelli_"] },
      { rol: "Makeup & Hair", valor: ["@petraparaquett"] },
    ],
  },
  {
    slug: "ampi-vera-intuicion",
    titulo: "Ampi Vera — Intuición",
    categoria: "Styling",
    anio: "2026",
    cantidadImagenes: 8,
    extension: "jpg",
    creditos: [
      { rol: "Fotografía", valor: ["Palu Camilli"] },
      { rol: "Dirección Creativa", valor: ["Terrestre Studio & Agustina Rey Francos"] },
      { rol: "Estilismo", valor: ["Agustina Rey Francos"] },
      { rol: "Modelo", valor: ["Maria Paula Piergentilli"] },
      { rol: "Makeup y Pelo", valor: ["Agustina Ciaglia"] },
    ],
  },
  {
    slug: "this-is-the-way-i-want-to-remember-my-life",
    titulo: "This Is The Way (I Want) To Remember My Life",
    categoria: "Editorial",
    anio: "2026",
    cantidadImagenes: 12,
    extension: "jpg",
    creditos: [
      { rol: "Dirección Creativa", valor: ["Lucía Arabian & Agustina Rey Francos"] },
      { rol: "Fotografía", valor: ["Lucía Arabian"] },
      { rol: "Makeup & Pelo", valor: ["Aby Fumo y Joaquina Franci x Niche"] },
      {
        rol: "Models",
        valor: [
          "Isabella Pietra x Look1",
          "Ines Iturralde x CIVILES",
          "Anhelina x Line Models",
        ],
      },
      {
        rol: "Wardrobe Credits",
        valor: ["@valentina.karnoubi", "@zane_estudio", "@casahelene_"],
      },
    ],
  },
  {
    slug: "ensayo-sobre-el-aburrimiento",
    titulo: "Ensayo sobre el aburrimiento",
    categoria: "Editorial",
    anio: "2025",
    cantidadImagenes: 4,
    extension: "jpg",
    creditos: [
      { rol: "Ph", valor: ["@palucamilli"] },
      { rol: "St", valor: ["@agustinareyf"] },
      { rol: "Makeup y pelo", valor: ["@catherine_merizalde x @impersonal__school"] },
      { rol: "Model", valor: ["Mica x @holymgmt"] },
      { rol: "Retouch", valor: ["@unseen_retouch"] },
      { rol: "Wardrobe credits", valor: ["@valentinaschuchner"] },
    ],
  },
  {
    slug: "paris",
    titulo: "Une ballade à Paris × Fucking Young",
    categoria: "Paris",
    anio: "2025",
    cantidadImagenes: 9,
    extension: "jpg",
    creditos: [
      { rol: "Estilismo", valor: ["@agustinareyf"] },
      { rol: "Producción", valor: ["@terrestre_studio"] },
      {
        rol: "Modelos",
        valor: [
          "@santinocalvanii",
          "@bigoa_biel",
          "@christiandeputron_",
          "@micahjwalk",
        ],
      },
      { rol: "Special thanks", valor: ["@16parismanagement"] },
      { rol: "Make up", valor: ["@art.bysigrid"] },
      { rol: "Retoque", valor: ["@algiastudio"] },
      { rol: "Foto", valor: ["@juligodoyyyy"] },
      { rol: "Handprint", valor: ["@carmencitadarkroom"] },
    ],
  },
  {
    slug: "l-heure-bleue",
    titulo: "L'heure bleue",
    categoria: "Paris",
    anio: "2025",
    nota:
      "Chapter IV: L'heure bleue. A five-part photographic journey. Shot in Paris as a visual experiment in form and feeling. June 2025.",
    cantidadImagenes: 10,
    extension: "jpg",
    creditos: [
      { rol: "Model", valor: ["@graycorton for @selectmodelparis"] },
      { rol: "Makeup", valor: ["@annesofayet"] },
      { rol: "Styling", valor: ["@agustinareyf"] },
      { rol: "Retouch", valor: ["@algiastudio"] },
      { rol: "Production", valor: ["@terrestre_studio"] },
      { rol: "Photography", valor: ["@juligodoyyy"] },
      { rol: "Handprint", valor: ["@carmencitadarkroom"] },
      {
        rol: "Wardrobe",
        valor: [
          "@blendbcnshowroom",
          "@tsyrk_official",
          "@casa_helene",
          "@georgielastudio",
        ],
      },
    ],
  },
  {
    slug: "barcelona-junes-colors",
    titulo: "Junes Colors",
    categoria: "Barcelona",
    anio: "2025",
    cantidadImagenes: 8,
    extension: "jpg",
    creditos: [
      { rol: "Modelo", valor: ["@ayupgrace x @thevanguardmanagement"] },
      { rol: "Make up", valor: ["@yuremamakeupartist"] },
      { rol: "Producción", valor: ["@terrestre___studio"] },
      { rol: "Estilismo", valor: ["@agustinareyf"] },
      { rol: "Retoque", valor: ["@algiastudio"] },
      { rol: "Foto", valor: ["@juligodoyyyy"] },
      {
        rol: "Wardrobe credits",
        valor: [
          "@blendbcnshowroom",
          "@pabloerroz",
          "@irostudioofficial",
          "@casahelene_",
          "@my.exscloset",
        ],
      },
    ],
  },
  {
    slug: "sweet-and-salty",
    titulo: "Sweet & Salty",
    categoria: "Editorial",
    cantidadImagenes: 10,
    extension: "jpg",
    creditos: [
      { rol: "Fotografía", valor: ["@flordozo"] },
      { rol: "Styling", valor: ["@agustinareyf"] },
      { rol: "Model", valor: ["@mariapaulapiergentili"] },
      { rol: "Makeup & Hair", valor: ["@abyfumo x @n____iche"] },
      {
        rol: "Wardrobe credits",
        valor: [
          "@luna.alvarezcastillo",
          "@agustinallambi_",
          "@veridis__",
          "@urruthya_studio",
          "@dunas.ar",
          "@casahelene_",
        ],
      },
    ],
  },
];

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug);
}

export function getProyectoImagenes(proyecto: Proyecto): string[] {
  return Array.from(
    { length: proyecto.cantidadImagenes },
    (_, i) => `/proyectos/${proyecto.slug}/${String(i + 1).padStart(2, "0")}.${proyecto.extension}`
  );
}
