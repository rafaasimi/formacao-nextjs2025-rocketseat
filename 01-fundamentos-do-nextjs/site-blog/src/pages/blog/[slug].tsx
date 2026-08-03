import { Avatar } from "@/components/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { allPosts} from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogPost() {
    const router = useRouter();
    const slug = router.query.slug as string;
    const post = allPosts?.find((post) => post.slug.toLocaleLowerCase() === slug?.toLowerCase())!;
    const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR');

    return (
        <main className="container mt-12 mb-20 md:mb-34">
            <div>
                <Breadcrumb>
                    <BreadcrumbList className="flex-nowrap">
                        <BreadcrumbItem>
                            <BreadcrumbLink render={<Link href="/blog" className="text-gray-100 hover:text-blue-100">Blog</Link>} />
                        </BreadcrumbItem>

                        <BreadcrumbSeparator className="text-gray-300" />

                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-blue-200 line-clamp-1">{post.title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_14rem] gap-6">
                {/* Conteúdo do post */}
                <article className="bg-gray-600 border border-gray-400 rounded-xl overflow-hidden flex-1">
                    <figure>
                        <Image src={post.image} alt={post.title} width={720} height={265} className="w-full h-auto " />
                    </figure>

                    <div className="px-6 py-8 md:px-16 md:py-12 flex flex-col gap-8 md:gap-12">
                        <header className="flex flex-col gap-6 md:gap-8">
                            <h1 className="text-gray-100 text-heading-md md:text-heading-lg">{post.title}</h1>

                            <Avatar.Container>
                                <Avatar.Image
                                    src={post?.author.avatar.trimEnd()}
                                    alt={post?.author.name}
                                    width={36}
                                    height={36}
                                    className="rounded-full border border-blue-200"
                                />
                                <Avatar.Content>
                                    <Avatar.Title>{post?.author.name}</Avatar.Title>
                                    <Avatar.Description>Publicado em <time dateTime={post.date}>{publishedDate}</time></Avatar.Description>
                                </Avatar.Content>
                            </Avatar.Container>
                        </header>

                        <div className="text-gray-200" dangerouslySetInnerHTML={{ __html: post?.body.html }} />
                    </div>
                </article>

                {/* Social */}
                <div>
                    teste
                </div>
            </div>
        </main>
    )
}