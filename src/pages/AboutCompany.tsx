import React from 'react';
import Image from 'next/image';

export default function AboutCompany() {
    return (
        <div className="bg-segunda py-12" id='sobre-empresa'>
            <div className="container mx-auto px-6 lg:px-20 mt-10">
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    
                    <div className='flex flex-col justify-center items-center gap-10'>
                        
                        <div>
                            <h1 className="text-5xl font-bold mb-3 text-gray-700 ">About company</h1>
                            <p className="text-2xl text-gray-600 leading-10">Founded with love and dedication, our mission is to transform every house into a welcoming home.</p>
                        </div>
                        
                        <div className="flex flex-col justify-center text-start lg:text-left">
                            <h2 className="text-4xl font-bold text-gray-700 mb-3">Mission</h2>
                            
                            <p className="text-2xl text-gray-600 leading-10">Transforming spaces with care and dedication, providing clean, organized, and vibrant homes where every detail reflects our diligence and attention.</p>

                        </div>

                        <div className="text-start">
                            <h2 className="text-4xl font-bold text-gray-700 mb-3">Vision</h2>
                            <p className="text-2xl text-gray-600 leading-10">To be recognized as the company that brings warmth and renewal to every home, standing out for excellence in creating spaces that inspire comfort and well-being.</p>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center rounded-md">
                        <Image width={800} height={400} src='/assets/AboutCompany/imagem2.jpg' alt="Foto da equipe aqui"/>
                    </div>

                </section>

            </div>
        </div>
    );
}
