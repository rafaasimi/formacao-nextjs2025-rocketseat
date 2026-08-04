import { ShareConfig, SOCIAL_PROVIDERS, SocialProvider } from "@/constants/socials-providers"
import { useClipboard } from "./use-clipboard"
import { Link, Check } from "lucide-react"

type UseShareProps = ShareConfig & {
    clipboardTimeout?: number
}

export function useShare({ url, title, text, clipboardTimeout = 2000 }: UseShareProps) {
    const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

    const shareConfig = {
        url,
        ...(title && { title }),
        ...(text && { text }),
    }

    async function share(provider: SocialProvider) {
        try {
            if (provider === 'clipboard') {
                await handleCopy(url);
                return true;
            }

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

    const shareButtons = [...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
    })), {
        provider: 'clipboard',
        name: isCopied ? "Link copiado!" : "Copiar link",
        icon: isCopied ? <Check /> : <Link />,
        action: () => share('clipboard'),
    }]

    return {
        shareButtons
    }
}