import { FacebookIcon } from "./icons/facebook-icon";
import { GithubIcon } from "./icons/github-icon";
import { InstagramIcon } from "./icons/instagram-icon";
import { LinkedinIcon } from "./icons/linkedin-icon";
import { TikTokIcon } from "./icons/tiktok-icon";
import { TwitchIcon } from "./icons/twitch-icon";
import { WhatsappIcon } from "./icons/whatsapp-icon";
import { YoutubeIcon } from "./icons/youtube-icon";

type SocialIconProps = { network: string } & Omit<
  React.SVGProps<SVGSVGElement>,
  "width" | "height"
> & { size: number };

const networkIcons = {
  facebook: FacebookIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  tiktok: TikTokIcon,
  twitch: TwitchIcon,
  whatsapp: WhatsappIcon,
  youtube: YoutubeIcon,
} as const;

type Network = keyof typeof networkIcons;

export function SocialIcon({ network, ...props }: SocialIconProps) {
  const Icon = networkIcons[network as Network] ?? GithubIcon;

  return <Icon {...props} />;
}
