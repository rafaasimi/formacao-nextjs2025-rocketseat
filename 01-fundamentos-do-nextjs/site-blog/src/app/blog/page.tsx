import { BlogList } from "@/templates/blog/blog-list";
import { allPosts, Post } from "contentlayer/generated";

function getPosts() {
    return new Promise<Post[]>((resolve) => {
        setTimeout(() => {
            resolve(allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        }, 5000);
    });
}

export default async function BlogPage() {
    // const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const sortedPosts = await getPosts();

    return (
        <BlogList posts={sortedPosts} />
    )
}