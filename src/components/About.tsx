import Image from "next/image";

export default function About() {
    return (
        <section className="bg-quinta text-gray-800 min-h-[75vh] p-3 flex justify-center items-center">
            <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                {/* Texto */}
                <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-white flex flex-col gap-3 lg:gap-5">
                    <span className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-700">About Us</span>
                    <p className="text-md xl:max-w-3xl text-gray-600">
                    Our mission is to provide clean, safe, and welcoming environments for our clients. With a highly trained and dedicated team, we offer customized cleaning services for homes, businesses, and special situations such as relocations, events, and even the more challenging areas of your home.
                    </p>

                    <p className="text-md xl:max-w-3xl text-gray-600">
                    We constantly strive for excellence in every service we provide, ensuring total customer satisfaction. Our commitment is to quality, trust, and attention to detail, so you can enjoy a spotless and comfortable space. We value transparency, ethics, and respect in all our interactions, building long-lasting and trustworthy relationships.
                    </p>
                </div>

                {/* Imagem */}
                <div className="xl:col-span-3 h-full">
                    <Image 
                        src="/assets/About/imagem2.jpg" 
                        alt="Limpeza Profissional" 
                        className="object-cover w-full h-full rounded-md bg-gray-500" 
                        width={800} 
                        height={400}
                    />
                </div>
            </div>
        </section>
    );
}
