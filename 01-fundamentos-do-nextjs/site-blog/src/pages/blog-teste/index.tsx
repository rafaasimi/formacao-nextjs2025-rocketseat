import { BlogList } from "@/templates/blog/blog-list";
import { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";

type BlogPageProps = {
    posts: Post[]
}

export default function BlogPage({ posts }: BlogPageProps) {
    return (
        <BlogList posts={posts} />
    )
}

export async function getStaticProps() {
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return {
        props: {
            posts: sortedPosts
        }
    }
}