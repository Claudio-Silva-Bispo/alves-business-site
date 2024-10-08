export default function Testimonials() {
    return (
        <div className="testimonials-background bg-primeira relative min-h-[210vh] md:min-h-[180vh] lg:min-h-full" id="testimonials">
            <div className="flex flex-col justify-center max-w-2xl h-80 w-full">
                
                <h2 className="text-white text-4xl p-5 pt-96 md:pt-20 lg:pt-0">Participate in our survey.</h2>
                <p className="text-white text-xl p-5">Your opinion is essential! Please respond to our survey and help us improve our services.</p>
                
                <div className="flex flex-col space-y-4 items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mb-44 md:mb-0 p-5 text-center">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-quarta text-gray-50 w-full md:w-2/3">Respond now</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira w-full md:w-2/3">Get in touch.</a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-2xl h-80 absolute bottom-0 right-0 w-full">
                <h2 className="text-white text-4xl p-5 md:p-0">Customer Feedback Received</h2>
                <p className="text-white md:text-center text-xl p-5">See what our customers are saying about us. Your feedback is very important to us!</p>

                <div className="flex flex-col space-y-4 items-center sm:justify-start sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mb-44 md:mb-0 w-full p-5 text-center">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-quarta text-gray-50 w-full md:w-2/3">Get to Know Us</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-white text-primeira w-full md:w-2/3">Free Quote</a>
                </div>
            </div>
        </div>
    );
}
