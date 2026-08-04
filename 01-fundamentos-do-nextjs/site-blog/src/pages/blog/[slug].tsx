import { Post } from "@/templates/blog/post-page";
import { allPosts, Post as PostType } from "contentlayer/generated";

import type {
    GetStaticProps,
    GetStaticPaths,
} from 'next'

type BlogPageProps = {
    post: PostType
}

export default function BlogPage({ post }: BlogPageProps) {
    return (
        <Post post={post} />
    )

}

export const getStaticPaths = (async () => {
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const recentPosts = sortedPosts.slice(0, 5);
    const paths = recentPosts.map((post) => ({
        params: { slug: post.slug }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}) satisfies GetStaticPaths

export const getStaticProps = (async (context) => {
    const { slug } = context.params as { slug: string };
    const post = allPosts.find((post) => post.slug === slug);

    if (!post) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: post
        }
    }
}) satisfies GetStaticProps