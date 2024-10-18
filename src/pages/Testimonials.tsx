import React, { useEffect, useState } from 'react';

interface Feedback {
    _id: string;
    nome: string;
    mensagem: string;
    nota: number;
    mostrar_tela: string;
}

export default function Testimonials() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [loadingError, setLoadingError] = useState(false);

    useEffect(() => {
        fetch('api/buscarFeedbacks')
            .then(response => response.json())
            .then((data: Feedback[]) => {
                const filteredFeedbacks = data.filter(feedback => feedback.mostrar_tela);
                const sortedFeedbacks = filteredFeedbacks.sort((a, b) => a.mostrar_tela.localeCompare(b.mostrar_tela));
                setFeedbacks(sortedFeedbacks);
                setLoadingError(false);
            })
            .catch(error => {
                console.error('Erro ao buscar feedbacks:', error);
                setLoadingError(true);
            });
    }, []);

    const renderStars = (nota: number) => (
        Array.from({ length: nota }, (_, index) => (
            <span key={index} className="text-yellow-500">&#9733;</span> // Icone de estrela
        ))
    );

    const placeholders = [
        {_id: 'placeholder-1', nome: 'John Doe', mensagem: 'Excellent service! The house always looks spotless, and the professional is very reliable.', nota: 5, mostrar_tela: '1'},
        {_id: 'placeholder-2', nome: 'Emily Smith', mensagem: 'Timely and very well done service. The team is always attentive and detail-oriented.', nota: 5, mostrar_tela: '2'},
        {_id: 'placeholder-3', nome: 'Michael Johnson', mensagem: 'I have used the service for many years and have never had any problems. I recommend it to everyone!', nota: 4, mostrar_tela: '3'},
        {_id: 'placeholder-4', nome: 'Sarah Brown', mensagem: 'edicated and careful professionals. The service is excellent, definitely worth it.', nota: 5, mostrar_tela: '4'},
        {_id: 'placeholder-5', nome: 'David Wilson', mensagem: 'The service is amazing; the house always looks perfect! I wouldn’t trade it for anything.', nota: 5, mostrar_tela: '5'},
        {_id: 'placeholder-6', nome: 'Laura Garcia', mensagem: 'Highly recommend! Professionalism and quality in the service provided.', nota: 5, mostrar_tela: '6'}
    ];
    

    return (
        <section className="bg-segunda flex flex-col justify-center min-h-screen" id="Testimonials">
            <div className="container flex flex-col justify-start md:justify-center mx-auto pt-16">
                <h1 className="text-5xl font-semibold leading-none text-start text-gray-700 p-6 sm:p-16">Avaliações recebidas</h1>
            </div>

            <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly">
                {(loadingError || feedbacks.length === 0 ? placeholders : feedbacks).map((feedback) => (
                    <div className="flex flex-col max-w-md mx-4 my-6 bg-white shadow-lg rounded-lg" key={feedback._id}>
                        <div className="px-4 py-12 sm:px-8 md:px-12 h-40">
                            <p className="relative px-6 py-1 m:text-xl italic text-center text-gray-800">
                                {feedback.mensagem}
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-b-lg">
                            <p className="m:text-2xl font-semibold leading-tight text-gray-800">{feedback.nome}</p>
                            <div className="flex mt-2 text-2xl">
                                {renderStars(feedback.nota)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
