import React from 'react';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'; // Example icon
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';

type CardProps = {
  icon: React.ReactElement;
  color: string;
  title: string;
  description: string;
};

const InfoCard: React.FC<CardProps> = ({ icon, color, title, description }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between max-h-80 h-full">
      <div className={`text-${color}-500 p-5`}>
        {icon}
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 text-gray-700">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="p-5 pt-0">
        <hr className="border-t border-gray-200 mb-4" />
        <a href="/QuoteSection" className="text-sm text-blue-500 hover:underline">
          Quote
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="bg-segunda min-h-screen p-3">
      <h1 className="text-5xl font-bold mb-10 text-start pt-20 text-gray-700">Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          icon={<LibraryAddIcon fontSize="large" />}
          color="blue"
          title="Regular Cleaning"
          description="Our Regular Cleaning service is designed to keep your home tidy and fresh on a consistent basis. We cover all essential areas, ensuring that your space remains welcoming and comfortable for you and your family."
        />
        <InfoCard
          icon={<StarIcon fontSize="large" />}
          color="blue"
          title="Deep Cleaning"
          description="Our Deep Cleaning service goes beyond surface cleaning to ensure every nook and cranny is addressed. Perfect for spring cleaning or seasonal refreshes, this service guarantees a thorough clean that will leave your home sparkling."
        />
        <InfoCard
          icon={<HomeIcon fontSize="large" />}
          color="blue"
          title="Move-in & Move-out"
          description="Moving can be stressful, but our Move-in & Move-out service simplifies the process. We prepare your new home for your arrival or ensure your old home is spotless for the next occupants, giving you peace of mind during transitions."
        />
        <InfoCard
          icon={<BuildIcon fontSize="large" />}
          color="blue"
          title="Commercial"
          description="Our Commercial Cleaning service is tailored for businesses looking to maintain a clean and professional environment. We cater to offices, retail spaces, and more, providing flexible scheduling to minimize disruption to your operations."
        />
        <InfoCard
          icon={<PeopleIcon fontSize="large" />}
          color="blue"
          title="Vacation Home"
          description="Ensure your vacation home is always ready for guests with our specialized cleaning service. We handle everything from regular upkeep to preparing your space for new visitors, so you can enjoy your time away without worry."
        />
        <InfoCard
          icon={<WorkIcon fontSize="large" />}
          color="blue"
          title="Event"
          description="Planning an event? Our Event Cleaning service ensures that your venue is clean before and after your gathering. We handle all the details so you can focus on hosting an unforgettable experience for your guests."
        />
      </div>
    </section>
  );
};

export default Services;
