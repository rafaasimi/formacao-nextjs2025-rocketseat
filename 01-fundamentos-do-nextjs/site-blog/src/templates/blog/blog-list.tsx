'use client'

import { Search } from "@/components/search";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

type BlogListProps = {
    posts: Post[]
}

export function BlogList({ posts }: BlogListProps) {
    const searchParams = useSearchParams();
    const query = searchParams?.get('q') || '';
    const pageTitle = query
        ? `Resultados de busca para "${query}"`
        : 'Dicas e estratégias para impulsionar seu negócio';

    const filteredPosts = query ? posts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase())) : posts;
    const hasPosts = filteredPosts.length > 0;

    return (
        <div className="pt-5 pb-20 md:pt-20 md:pb-34">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-end justify-between">
                    <div className="max-w-2xl">
                        <Badge variant="secondary">Blog</Badge>
                        <h1 className="text-gray-100 text-heading-lg md:text-heading-xl text-balance mt-3">{pageTitle}</h1>
                    </div>
                    <Search />
                </div>

                <div className="mt-6 md:mt-14">
                    {hasPosts && (
                        <PostGridCard>
                            {filteredPosts.map((post) => (
                                <PostCard
                                    key={post._id}
                                    title={post.title}
                                    description={post.description}
                                    date={new Date(post.date).toLocaleDateString('pt-BR')}
                                    slug={post.slug}
                                    image={post.image.trim()}
                                    author={{
                                        name: post.author.name,
                                        avatar: post.author.avatar
                                    }}
                                />
                            ))}
                        </PostGridCard>
                    )}

                    {!hasPosts && (
                        <div className="text-gray-100 flex items-center gap-2">
                            <Inbox size={20} className="text-cyan-100" />
                            <p >Nenhum post encontrado.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}