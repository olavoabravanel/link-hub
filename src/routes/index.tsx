import { createFileRoute } from "@tanstack/react-router";

// === Foto de perfil ===
// Para trocar: substitua o arquivo apontado por src/assets/olavo-profile.jpg.asset.json
import olavoProfile from "@/assets/olavo-profile.jpg.asset.json";

// === Banners dos botões ===
// Para trocar uma imagem: substitua o arquivo correspondente em src/assets/
// (banner-1.png, banner-2.png, banner-3.png) por outra horizontal da sua escolha.
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";

// === Links dos botões ===
// Edite as URLs abaixo para apontar para onde quiser.
const LINKS = [
  { image: banner1, href: "https://exemplo.com/link-1", alt: "Link 1" },
  { image: banner2, href: "https://exemplo.com/link-2", alt: "Link 2" },
  { image: banner3, href: "https://exemplo.com/link-3", alt: "Link 3" },
];

// === Redes sociais ===
// Edite as URLs abaixo com os seus perfis.
const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10.5 9.2 15 12l-4.5 2.8V9.2Z" fill="currentColor" />
      </svg>
    ),
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olavo Abravanel" },
      {
        name: "description",
        content: "Meus links — Olavo Abravanel",
      },
      { property: "og:title", content: "Olavo Abravanel" },
      { property: "og:description", content: "Meus links — Olavo Abravanel" },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LinksPage,
});

function LinksPage() {
  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center overflow-hidden bg-forest px-5 pb-10 pt-14 text-foreground">
      {/* brilho de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-lime/20 blur-[90px]"
      />

      {/* avatar */}
      <div className="avatar-squircle relative z-10 h-28 w-28 overflow-hidden bg-sun shadow-lg shadow-black/30 ring-2 ring-lime/30">
        <img
          src={olavoProfile.url}
          alt="Olavo Abravanel"
          className="avatar-squircle h-full w-full object-cover object-[center_25%]"
        />
      </div>

      {/* nome */}
      <h1 className="relative z-10 mt-5 font-display text-2xl font-bold lowercase tracking-tight text-lime">
        olavo abravanel
      </h1>

      {/* botões / banners */}
      <nav className="relative z-10 mt-8 flex w-full max-w-md flex-col gap-4">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-full border border-lime/20 bg-lime-soft shadow-md shadow-black/20 transition-transform duration-200 active:scale-[0.98]"
          >
            <img
              src={link.image}
              alt={link.alt}
              width={1200}
              height={512}
              loading="lazy"
              className="h-20 w-full object-cover sm:h-24"
            />
          </a>
        ))}
      </nav>

      {/* redes sociais */}
      <div className="relative z-10 mt-9 flex items-center gap-6">
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-lime transition-transform duration-200 hover:scale-115 active:scale-95"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* efeito de cartões empilhados no rodapé */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center">
        <div className="h-10 w-[88%] rounded-t-3xl bg-lime-soft/70" />
        <div className="h-12 w-[94%] rounded-t-3xl bg-forest-deep" />
      </div>
    </main>
  );
}
