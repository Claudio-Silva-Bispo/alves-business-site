import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaSms } from 'react-icons/fa';

export default function ContactSection(){
  return (

      <section className="py-6 bg-segunda text-gray-900 min-h-[70vh] flex justify-center items-center" id="contact">
          <div className="grid max-w-6xl grid-cols-1 px-3 mx-auto lg:px-8 md:grid-cols-2 md:divide-x md:pt-20">

              <div className="flex flex-col md:gap-10 pt-10 md:pt-0">
                  <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center">
                      <h1 className="text-5xl font-bold text-white">Get in touch</h1>
                      <p className="pt-5 pb-4 text-xl text-gray-700">By filling out this simple form, our team will get in touch with you within two hours.</p>
                  </div>

                  <div className="py-6 md:py-0 md:px-6 flex flex-col justify-center">

                      <h1 className="text-5xl font-bold text-white mb-5">Contact information</h1>
                          <p className="flex items-center mb-3 text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-quinta">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                              </svg>
                              <span>+(980) 273-9078</span>
                          </p>
                          <p className="flex items-center mb-3 text-gray-700">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mr-2 sm:mr-6 text-quinta">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                              </svg>
                              <span>claudiofpa@gmail.com</span>
                          </p>

                          <div className="flex flex-col justify-start lg:pt-5">
                          <div className="flex space-x-4">
                                    <a href="https://www.instagram.com/alvescleaningservicee" target="_blank" title="Instagram" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500 focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                                        <FaInstagram className="h-4 w-4 md:h-6 md:w-6" />
                                    </a>
                                    
                                    <a href="mailto:claudiofpa@gmail.com" title="Email" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500 focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                                        <FaEnvelope className="h-4 w-4 md:h-6 md:w-6" />
                                    </a>
                                    
                                    <a href="tel:+9802739078" title="Telefone" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500 focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                                        <FaPhone className="h-4 w-4 md:h-6 md:w-6" />
                                    </a>
                                    
                                    <a href="tel:+9802739078" title="WhatsApp" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500 focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                                        <FaWhatsapp className="h-4 w-4 md:h-6 md:w-6" />
                                    </a>
                                    
                                    <a href="tel:+9802739078" title="SMS" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-quinta hover:bg-gray-50 text-gray-50 hover:text-blue-500 focus:ring hover:ring focus:ring-opacity-75 focus:ring-quinta hover:ring-quinta">
                                        <FaSms className="h-4 w-4 md:h-6 md:w-6" />
                                    </a>
                                        
                                </div>
                          </div>
                  </div>
              </div>

              <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                  <label className="block">
                      <span className="mb-3 text-gray-700">Name</span>
                      <input type="text" placeholder="Please enter your name." className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3" />
                  </label>
                  <label className="block">
                      <span className="mb-1 text-gray-700">Email</span>
                      <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 p-3 mt-3" />
                  </label>
                  <label className="block">
                      <span className="mb-1 text-gray-700">Message</span>
                      <textarea rows={5} className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 bg-gray-100 mt-3"></textarea>
                  </label>
                  <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-primeira text-gray-50 focus:ring-quinta hover:ring-quinta w-full">Submit</button>
              </form>

              
          </div>
      </section>

  );
}