'use client'

import { Button } from "@/components/ui/button";
import { useShare } from "@/hooks/use-share";

type PostShareProps = {
    postUrl: string;
    postTitle: string;
    postDescription: string;
}

export function PostShare({ postUrl, postTitle, postDescription }: PostShareProps) {
    const { shareButtons } = useShare({
        url: postUrl,
        title: postTitle,
        text: postDescription,
    });

    return (
        <>
            <div className="flex flex-row md:flex-col gap-2">
                {
                    shareButtons.map((provider) => (
                        <Button
                            key={provider.provider}
                            variant={"outline"}
                            size={"sm"}
                            onClick={provider.action}
                            className="w-fit md:w-full justify-start gap-2"
                        >
                            {provider.icon}
                            <span className="hidden md:block">{provider.name}</span>
                        </Button>
                    ))
                }
            </div >
        </>
    )
}