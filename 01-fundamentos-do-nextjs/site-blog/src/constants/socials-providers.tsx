import { Link } from 'lucide-react'
import Image from 'next/image';
import LinkedinIcon from '@/icons/LinkedinIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import SlackIcon from '@/icons/SlackIcon';

export type ShareConfig = {
    url: string;
    title?: string;
    text?: string;
}

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'clipboard';

export const SOCIAL_PROVIDERS = {
    linkedin: {
        name: "LinkedIn",
        icon: <LinkedinIcon />,
        shareUrl: (config: ShareConfig) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
    },
    facebook: {
        name: "Facebook",
        icon: <FacebookIcon />,
        shareUrl: (config: ShareConfig) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
    },
    slack: {
        name: "Slack",
        icon: <SlackIcon />,
        shareUrl: (config: ShareConfig) => `https://slack.com/share?text=${encodeURIComponent(config.title || '')}&url=${encodeURIComponent(config.url)}`,
    },
    // clipboard: {
    //     name: "Copiar link",
    //     icon: <Link />,
    //     shareUrl: (config: ShareConfig) => navigator.clipboard.writeText(config.url),
    // },
}