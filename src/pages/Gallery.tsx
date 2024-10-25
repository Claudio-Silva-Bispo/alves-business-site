import React, { useState } from 'react';
import Image from 'next/image';

const services = {
  rooms: [
    { id: 1, name: 'Kitchen', images: ['/assets/Carrosel/kitchen/20200123_150607.jpg', 'image-two.jpg'] },
    { id: 2, name: 'Bathroom', images: ['image-three.jpg', 'image-four.jpg'] },
    { id: 3, name: 'Living Room', images: ['image-five.jpg'] },
    { id: 4, name: 'Bedroom', images: ['image-six.jpg', 'image-seven.jpg', 'image-eight.jpg'] },
    { id: 5, name: 'Others', images: ['image-nine.jpg', 'image-ten.jpg'] }
  ]
};


export default function Gallery() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);

  const handlePrevClick = () => {
    setSelectedRoomIndex((prevIndex) =>
      prevIndex === 0 ? services.rooms.length - 1 : prevIndex - 1
    );
    scrollToTop();
  };

  const handleNextClick = () => {
    setSelectedRoomIndex((prevIndex) =>
      prevIndex === services.rooms.length - 1 ? 0 : prevIndex + 1
    );
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const selectedRoom = services.rooms[selectedRoomIndex];
  const { name } = selectedRoom;

  return (
    <div>
      {/* Seção do nome e setas de navegação */}
      <section className="py-6 bg-[#111827] pt-32">
      
        {/* Seção da galeria de imagens */}
        
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image width={800} height={400} src="/assets/Carrosel/cozinha/20210201_131604.jpg" alt="image about kitchen" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/cozinha/20210122_172648.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/cozinha/IMG-20200204-WA0029.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/sala/IMG-20200204-WA0022.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/sala/20201217_095105.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/quarto/20201125_151146.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/quarto/20201202_120913.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/banheiro/20201125_105927.jpg" />
          <Image width={800} height={400} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="/assets/Carrosel/banheiro/20201125_151802.jpg" />
          <Image width={800} height={400} src="/assets/Carrosel/personalizado/20201217_123521.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square" />
        </div>

      </section>
    </div>
  );
}
