
export default function Network(){
    return (

        <section className="bg-white text-gray-800" id="network">
            <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 md:flex-row lg:justify-between">
                
                <div className="hidden md:flex items-center justify-center p-6 mt-8 lg:mt-0">
                    <img src="/assets/Network/imagem-logo.jpeg" alt="image with logo company" className="object-contain w-full h-96 md:h-128" />
                </div>
                
                <div className="flex flex-col justify-center p-0 md:p-6 text-start rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left pt-20 md:pt-0 mb-20 md:mb-0">
                    <h2 className="text-5xl font-bold leading-none md:text-6xl">Alves Cleaning
                        <span className="text-quarta"> service</span> connected with you
                    </h2>
                    <p className="mt-6 mb-8 text-xl sm:mb-12">See our services and what customers are saying
                        <br  className="hidden md:inline lg:hidden" /> about our company, our staff, and the services provided.
                    </p>

                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-center">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-quarta text-gray-50">Contact</a>
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-primeira text-gray-50">Social media</a>
                    </div>
                </div>
            </div>
        </section>

    );
}