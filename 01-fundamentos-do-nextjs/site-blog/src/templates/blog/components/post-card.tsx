import Link from 'next/link'
import Image from 'next/image'

type Author = {
    name: string;
    avatar: string;
}

interface PostCardProps {
    slug: string;
    title: string;
    description: string;
    image: string;
    date: string;
    author: Author;
}

export function PostCard({ slug, title, description, image, date, author }: PostCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="group">
            {/* Post Content */}
            <div className="w-full h-full relative p-2 rounded-lg bg-gray-600 border border-gray-400 group-hover:border-blue-500 transition-colors duration-200 overflow-hidden">

                {/* Data  */}
                <div className="absolute top-0 right-0 z-10 pt-2.5 pr-3.5 pb-1.5 pl-2.5 rounded-bl-[10px] bg-gray-600">
                    <span className="text-body-xs text-gray-300">{date}</span>
                </div>

                {/* Image Container */}
                <div className="rounded-md overflow-hidden">
                    <Image
                        src={image.trim()}
                        alt={title}
                        width={288}
                        height={144}
                        className="w-full h-auto object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                </div>

                {/* Informações do Post */}
                <div className="mt-2 p-2">
                    <h3 className="text-gray-100 text-heading-xs line-clamp-2">
                        {title}
                    </h3>

                    <p className="mt-2 text-gray-300 text-body-xs line-clamp-2">
                        {description}
                    </p>

                    {/* Autor */}
                    <div className="pt-3 mt-3 border-t border-gray-400 flex gap-2 items-center">
                        <Image
                            src={author.avatar.trim()}
                            alt={`Foto de perfil de ${author.name}`}
                            width={20}
                            height={20}
                            className="rounded-full"
                        />
                        <span className="text-body-xs text-gray-300">{author.name}</span>
                    </div>
                </div>

            </div>
        </Link>
    )
}