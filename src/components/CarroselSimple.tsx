
import Image from "next/image";

export default function CarroselSimple(){
    return (
        <section id="carrosel">
            <div
                className="container flex flex-col mx-auto lg:flex-row min-h-screen p-3"
                style={{
                    backgroundImage: "url('/assets/Service/imagem2.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // Define a opacidade com base no breakpoint
                    opacity: "0.6", // Opacidade padrão para mobile
                }}
                id="carrosel">
                <div className="flex flex-col w-full lg:w-1/3 md:p-8 lg:p-12 bg-opacity-80 ">
                    <h1 className="text-5xl font-bold leading-none mb-6 pt-10">Services rendered</h1>
                    <p className="text-lg mb-6">
                    Discover the transformation that our cleaning services can provide! With special attention to detail, we showcase the positive impact that professional cleaning can have on your home or business. Check out our before and after projects and be amazed by the results!
                    </p>
                    <p className="text-lg mb-6">
                    Right below, learn more about the services we offer.
                    </p>
                    <button
                            type="button"
                            className="w-full s:w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900 focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta"
                        >
                            <a href="/Gallery"></a>Visit the gallery
                        </button>
                </div>
            </div>



            <div className="relative w-full flex gap-4 py-6 overflow-x-hidden">
                <div className="flex gap-4 animate-marquee">
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20200813_115950.jpg" alt="Room photo" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20201125_151608.jpg" alt="Image 2" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/sala/20201217_095105.jpg" alt="Image 3" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201125_105927.jpg" alt="Image 4" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201125_151240.jpg" alt="Image 5" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/banheiro/20201217_151100.jpg" alt="Image 6" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200211_175828.jpg" alt="Image 7" />
                    <Image width={800} height={400} className="h-48 aspect-video rounded-sm object-fill object-center bg-gray-500" src="/assets/Carrosel/cozinha/20200701_143833.jpg" alt="Image 8" />
                </div>
            </div>

        </section>
    );
}