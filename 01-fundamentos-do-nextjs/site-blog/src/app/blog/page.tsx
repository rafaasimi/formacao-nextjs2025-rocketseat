import { BlogList } from "@/templates/blog/blog-list";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Site.set | Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "Site.set | Blog",
        description: "Dicas e estratégias para impulsionar seu negócio",
        url: "https://formacao-nextjs2025-rocketseat.vercel.app/og-image.jpg",
        siteName: "Site.set",
        locale: "pt-BR",
        type: "website",
        images: [
            {
                url: "https://formacao-nextjs2025-rocketseat.vercel.app/og-image.jpg",
                width: 800,
                height: 600,
                alt: "Site.set | Blog",
            }
        ]
    }
}

export default function BlogPage() {
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <BlogList posts={sortedPosts} />
    )
}