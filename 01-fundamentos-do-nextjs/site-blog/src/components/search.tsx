import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export function Search() {
    const router = useRouter();
    const query = router.query.q as string;

    console.log(query)

    const handleSearch = useCallback((event: React.SubmitEvent) => {
        event.preventDefault();

        if (query.trim()) {
            router.push(`/blog?q=${encodeURIComponent(query)}`);
        }
    }, [query, router])

    function handleQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newQuery = event.target.value;

        router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, { shallow: true, scroll: false });
    }


    return (
        <form className="relative group" onSubmit={handleSearch}>
            <SearchIcon className={cn('text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300', query && 'text-blue-300')} />
            <input
                type="text"
                placeholder="Buscar"
                onChange={handleQueryChange}
                className="h-10 w-72 bg-transparent border border-gray-400 pl-9 text-gray-100 placeholder:text-gray-300 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300" />
        </form>
    )
}