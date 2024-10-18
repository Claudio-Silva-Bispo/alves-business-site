export default function Documentation() {
    return (
        <section className="bg-segunda min-h-[80vh] flex flex-col justify-start p-6 md:p-10 gap-5">
            <h1 className="text-5xl font-bold mb-10 text-start pt-20 text-gray-700">Documentation</h1>

            <div className="flex flex-col gap-3">
                <h2 className='font-bold text-2xl sm:text-xl text-gray-700'>About the Developer</h2>

                <span className='font-bold'>1. LinkedIn</span>
                <p className="text-gray-600 text-lg">https://www.linkedin.com/in/claudiosbispo/</p>

                <span className='font-bold'>2. Contact Email</span>
                <p className="text-gray-600 text-lg">claudio_cssp@hotmail.com</p>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className='font-bold text-2xl sm:text-xl text-gray-700'>Supporting Material</h3>

                <span className='font-bold'>Database</span>
                <p className="text-gray-600 text-lg">All client information is stored in a secure database and is not shared with third parties. The owner contacts the client, and afterwards, the information is deleted.</p>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className='font-bold text-2xl sm:text-xl text-gray-700'>Important Information</h4>
            
                <p className="text-gray-600 text-lg">Content created with the support of freely available materials on the internet, which need to be acknowledged due to development privileges.</p>

                <span className='font-bold'>1. Website with Custom Images</span>
                <p className="text-gray-600 text-lg">https://www.freepik.com/</p>

                <span className='font-bold'>2. Some texts were created using artificial intelligence</span>
                <p className="text-gray-600 text-lg">https://chat.openai.com/</p>
            </div>
        </section>
    );
}
