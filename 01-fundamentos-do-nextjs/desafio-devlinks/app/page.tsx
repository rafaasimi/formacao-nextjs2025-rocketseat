import { PrismicNextLink } from "@prismicio/next";
import { buttonVariants } from "@/components/ui/button";
import { createClient } from "@/lib/prismicio";
import { Avatar } from "./components/avatar";
import { SocialIcon } from "./components/social-icon";
import { PrismicDTO } from "./models/prismic-dto";

export const revalidate = 3600; // 1 hora em segundos

export default async function Home() {
  const client = createClient();
  const { data } = await client.getSingle("social_media");
  const dataPrismic = data as PrismicDTO;

  const profilePictureUrl = dataPrismic.profile_picture_url?.url;
  const avatarUrl = profilePictureUrl?.startsWith("http")
    ? profilePictureUrl
    : `https://${profilePictureUrl}`;

  const cards = dataPrismic.cards_links;
  const socials = dataPrismic.social_links;

  return (
    <div className="container mt-14">
      <header className="flex flex-col gap-2 items-center mt-6 mb-6 text-center text-balance">
        <Avatar src={avatarUrl} alt={dataPrismic.bio_description} fill />
        {dataPrismic.username && <span className="text-body-md">@{dataPrismic.username}</span>}
        <span className="text-body-sm line-clamp-2">{dataPrismic.bio_description}</span>
      </header>

      <main className="flex flex-col gap-4 py-6">
        {cards.map((card) => (
          <PrismicNextLink
            key={card.label}
            field={card.url}
            className={buttonVariants({ variant: "primary" })}
          >
            {card.label}
          </PrismicNextLink>
        ))}
      </main>

      <footer>
        <div className="flex flex-row gap-4 py-6 justify-center">
          {socials.map((social) => (
            <PrismicNextLink
              key={social.label}
              field={social.url}
              className={buttonVariants({ variant: "icon" })}
              aria-label={social.label}
              title={social.label}
            >
              <SocialIcon network={social.network} size={24} />
            </PrismicNextLink>
          ))}
        </div>

        <p className="text-body-sm text-center py-6">
          Feito com <span className="animate-pulse text-red-500">&#10084;</span> por <a href="https://www.rafaelsimionato.dev/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Rafael Simionato</a>
        </p>
      </footer>
    </div>
  );
}
