import type { FilledLinkToWebField } from "@prismicio/client";

export interface PrismicDTO {
    profile_picture_file?: {
        alt?: string;
        id: string;
        url: string;
    },
    profile_picture_url?: FilledLinkToWebField,
    username: string | null;
    bio_description: string;
    cards_links: {
        label: string;
        url: FilledLinkToWebField;
    }[];
    social_links: {
        label: string;
        network: string;
        url: FilledLinkToWebField;
    }[];
}