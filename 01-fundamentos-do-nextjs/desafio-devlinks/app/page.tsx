import { Button } from "@/components/ui/button";
import { Avatar } from "./components/avatar";
import { TwitchIcon } from "./components/icons/twitch-icon";
import { LinkedinIcon } from "./components/icons/linkedin-icon";
import { YoutubeIcon } from "./components/icons/youtube-icon";
import { InstagramIcon } from "./components/icons/instagram-icon";

export default function Home() {

  return (
    <div className="container mt-14">
      <header className="flex flex-col gap-2 items-center mt-6 mb-6">
        <Avatar
          src="https://github.com/rafaasimi.png"
          alt="Rafael Simionato"
          fill
        />
        <span className="text-body-md">@rafaasimi</span>
      </header>

      <main className="flex flex-col gap-4 py-6">
        <Button>
          Inscreva-se no NLW
        </Button>
        <Button>
          Baixe meu e-book
        </Button>
        <Button>
          Veja meu portfólio
        </Button>
        <Button>
          Conheça meu curso
        </Button>
      </main>

      <footer>
        <div className="flex flex-row gap-4 py-6 justify-center">
          <Button variant={"icon"}>
            <TwitchIcon size={24} />
          </Button>
          <Button variant={"icon"}>
            <LinkedinIcon size={24} />
          </Button>
          <Button variant={"icon"}>
            <YoutubeIcon size={24} />
          </Button>
          <Button variant={"icon"}>
            <InstagramIcon size={24} />
          </Button>
        </div>

        <p className="text-body-sm text-center py-6">
          Feito com <span className="animate-pulse text-red-500">&#10084;</span> por <a href="https://www.rafaelsimionato.dev/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Rafael Simionato</a>
        </p>
      </footer>
    </div>
  );
}
