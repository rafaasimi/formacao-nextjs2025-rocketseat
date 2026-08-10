"use client";

import { buttonVariants } from "@/components/ui/button";
import { RotateCcw, TriangleAlert } from "lucide-react";

export default function Error({ reset, error }: { error: Error & { digest?: string }; reset: () => void }) {
    const ERROR_MESSAGE = error?.message || "Ocorreu um erro inesperado";

    return (
        <div className="min-h-[calc(100vh-6.5rem)] md:min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
            <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
                <div className="flex items-center justify-center p-4 rounded-full bg-cyan-300 text-cyan-100 w-fit">
                    <TriangleAlert className="w-8 h-8 md:w-10 md:h-10" />
                </div>

                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-gray-100 text-heading-lg md:text-heading-xl text-balance">Algo deu errado</h2>
                    <p className="text-gray-300 text-body-sm md:text-body-md max-w-md text-balance">
                        {ERROR_MESSAGE}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={reset} className={buttonVariants({ variant: "primary", size: "md" })}>
                        Tentar novamente
                        <RotateCcw />
                    </button>
                </div>
            </div>
        </div>
    );
}
