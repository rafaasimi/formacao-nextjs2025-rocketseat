import { useRouter } from "next/router";

export default function PostPage() {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <div>Post: {slug}</div>
    )
}