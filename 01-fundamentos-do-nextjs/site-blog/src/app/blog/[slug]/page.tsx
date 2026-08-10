import { Post } from "@/templates/blog/post-page";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { notFound } from "next/navigation";

type BlogPageProps = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        return {}
    }

    return (
        {
            title: post.title,
            description: post.description,
            authors: [
                {
                    name: post.author.name,
                }
            ],
            robots: {
                index: true,
                follow: true,
            },
            openGraph: {
                title: post.title,
                description: post.description,
                images: [
                    {
                        url: post.image,
                        alt: post.title,
                    }
                ]
            }
        }
    )
}

export const revalidate = 3600; // 1 hora

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params;
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <Post post={post} />
    )
}