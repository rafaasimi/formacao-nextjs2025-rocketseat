import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from "@/constants/socials-providers"

type UseShareProps = ShareConfig & {
    clipboardTimeout?: number
}

export function useShare({ url, title, text, clipboardTimeout = 2000 }: UseShareProps) {
    const shareConfig = {
        url,
        ...(title && { title }),
        ...(text && { text }),
    }

    function share(provider: SocialProvider) {
        try {
            const providerConfig = SOCIAL_PROVIDERS[provider];

            if (!providerConfig) {
                throw new Error(`Provedor de compartilhamento inválido: ${provider}`);
            }

            const shareUrl = providerConfig.shareUrl(shareConfig);
            const shareWindow = window.open(shareUrl, "_blank", "noopener,noreferrer");

            return !!shareWindow;
        } catch (error) {
            console.error("Erro ao compartilhar:", error)
            return false;
        }
    }

    const shareButtons = Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
    }))

    return {
        shareButtons
    }
}