export default function Hero() {
    return (
        <section id="habilitar-menu">
            <div
                className="relative bg-primeira"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/Hero/imagem1.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container flex flex-col items-start px-4 py-16 pb-24 mx-auto text-start lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50 pt-10">
                    Provide a clean and safe environment.
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
                    At Alves Cleaning Service, we take care of every detail to ensure that your home, business, or any special needs, such as relocations, are handled with the utmost attention and professionalism.
                    </p>
                    {/* Ajustes de layout responsivo */}
                    <div className="flex flex-col s:flex-col sm:flex-row justify-start w-full gap-4">
                        <button
                            type="button"
                            className="w-full s:w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900 hover:bg-primeira focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta"
                        >
                            <a href="/ContactSection">Contact</a>
                        </button>
                        <button
                            type="button"
                            className="w-full s:w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded bg-gray-100 text-gray-900 hover:bg-primeira focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta"
                        >
                            <a href="/Services">Services</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
