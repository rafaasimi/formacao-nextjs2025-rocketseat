import Link from 'next/link'
import Image from 'next/image'

export function PostCard() {
    return (
        <Link href="/blog/" className="group block">
            {/* Post Content */}
            <div className="relative p-2 rounded-lg bg-gray-600 border border-gray-400 group-hover:border-blue-500 transition-colors duration-200 overflow-hidden">

                {/* Data  */}
                <div className="absolute top-0 right-0 z-10 pt-2.5 pr-3.5 pb-1.5 pl-2.5 rounded-bl-[10px] bg-gray-600">
                    <span className="text-body-xs text-gray-300">29/07/2026</span>
                </div>

                {/* Image Container */}
                <div className="rounded-md overflow-hidden">
                    <Image
                        src="/assets/primeiro-post.png"
                        alt="Capa do post sobre e-commerce"
                        width={288}
                        height={144}
                        className="w-full h-auto object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                </div>

                {/* Informações do Post */}
                <div className="mt-2 p-2">
                    <h3 className="text-gray-100 text-heading-xs line-clamp-2">
                        Transformando seu negócio em uma loja virtual
                    </h3>

                    <p className="mt-2 text-gray-300 text-body-xs line-clamp-2">
                        Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você.
                    </p>

                    {/* Autor */}
                    <div className="pt-3 mt-3 border-t border-gray-400 flex gap-2 items-center">
                        <Image
                            src="/customer-01.png"
                            alt="Foto de perfil de Aspen Dokidis"
                            width={20}
                            height={20}
                            className="rounded-full"
                        />
                        <span className="text-body-xs text-gray-300">Aspen Dokidis</span>
                    </div>
                </div>

            </div>
        </Link>
    )
}