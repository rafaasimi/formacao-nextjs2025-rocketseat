import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="min-h-[calc(100vh-6.5rem)] md:min-h-[calc(100vh-8rem)] flex items-center justify-center px-4">
            <div className="container flex flex-col items-center justify-center gap-6 md:gap-8 text-center">
                <div className="flex items-center justify-center p-4 rounded-full bg-cyan-300 text-cyan-100 w-fit">
                    <Loader2 className="w-8 h-8 md:w-10 md:h-10 animate-spin" />
                </div>
            </div>
        </div>
    );
}
