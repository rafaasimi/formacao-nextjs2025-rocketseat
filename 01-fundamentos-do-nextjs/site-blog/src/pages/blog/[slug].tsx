import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { allPosts, Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogPost() {
    const router = useRouter();
    const slug = router.query.slug as string;
    const { title, image, body } = allPosts?.find((post) => post.slug.toLocaleLowerCase() === slug?.toLowerCase()) as Post;

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
                            <BreadcrumbPage className="text-blue-200 line-clamp-1">{title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_14rem] gap-6">
                {/* Conteúdo do post */}
                <article className="bg-gray-600 border border-gray-400 rounded-xl overflow-hidden flex-1">
                    <figure>
                        <Image src={image} alt={title} width={720} height={265} className="w-full h-auto " />
                    </figure>

                    <div className="px-6 py-8 md:px-16 md:py-12 flex flex-col gap-8 md:gap-12">
                        <header>
                            <h1 className="text-gray-100 text-heading-md md:text-heading-lg">{title}</h1>
                        </header>

                        <div className="text-gray-200" dangerouslySetInnerHTML={{ __html: body.html }} />
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