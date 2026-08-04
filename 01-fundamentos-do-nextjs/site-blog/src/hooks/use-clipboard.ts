import { useEffect, useState } from "react";

type UseClipboardProps = {
    timeout?: number
}

export function useClipboard({ timeout = 2000 }: UseClipboardProps) {
    const [isCopied, setIsCopied] = useState(false);

    async function handleCopy(text: string) {
        if (!navigator.clipboard) {
            console.error("Clipboard API não suportada neste navegador.");
            return;
        }

        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
        } catch (error) {
            console.error("Erro ao copiar para a área de transferência:", error);
            setIsCopied(false);
        }
    }

    useEffect(() => {
        if (isCopied) {
            const timer = setTimeout(() => {
                setIsCopied(false);
            }, timeout);

            return () => clearTimeout(timer);
        }
    }, [isCopied, timeout]);

    return {
        handleCopy,
        isCopied,
    }
}