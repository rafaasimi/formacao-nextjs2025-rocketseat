import { Search } from "@/components/search";
import { Badge } from "@/components/ui/badge";

export default function BlogPage() {
    return (
        <div className="pt-5 pb-20 md:pt-20 md:pb-34">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 items-end justify-between">
                    <div className="max-w-2xl">
                        <Badge variant="secondary">Blog</Badge>
                        <h1 className="text-gray-100 text-heading-lg md:text-heading-xl text-balance mt-3">Dicas e estratégias para impulsionar seu negócio</h1>
                    </div>
                        <Search />
                </div>
            </div>
        </div>
    );
}