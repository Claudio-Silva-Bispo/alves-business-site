import * as React from 'react';
// Instalar npm install @mui/material @emotion/react @emotion/styled
// Instalar npm install @mui/icons-material

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Icones
import PublicIcon from '@mui/icons-material/Public';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: '1px solid #e5e7eb', // Estilo da borda como no exemplo
  borderRadius: '8px', // Bordas arredondadas como no exemplo
  marginBottom: '8px', // Espaçamento entre os accordions
  '&:last-child': {
    marginBottom: '0',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  backgroundColor: '#ffffff', 
  padding: '16px', // Espaçamento interno
  '& .MuiAccordionSummary-content': {
    marginLeft: '8px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-root': {
    fontSize: '1rem',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '16px',
  backgroundColor: '#f9fafb',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className='min-h-[60vh] flex flex-col justify-center p-5 m:pt-20'>
      
      <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:bg-gray-700 pt-20 md:p-0 flex flex-col mb-6">
        <h2 className="text-5xl text-gray-700 md:mb-0 font-bold">Main Questions</h2>
      </div>

      <div className="space-y-4">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <PublicIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Service available in the following cities</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
              Bellevue, Bothell, Brier, Carnation, Edmonds, Everett, Kenmore, Kirkland, Lynnwood, Mill Creek, Monroe, Mukilteo, Redmond, Shoreline, Snohomish, Woodinville, and more.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <AddHomeIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>How to Prepare Your Home for a Professional Cleaning Service</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
            Hiring a professional cleaning service is an excellent way to ensure your home remains spotless, even during the busiest weeks. However, there are a few steps you can take before the cleaning team arrives to maximize efficiency and make the most of their visit. Here is a guide on how to prepare your home for a professional cleaning service.
            
            <span className='font-bold'>Declutter Common Areas</span>
            Cleaning around clutter can slow down the cleaning process. Take a few minutes to put away items like toys, clothes, dishes, and other personal belongings from countertops, floors, and tables. This allows the cleaning team to focus on deep cleaning rather than tidying up the clutter.

            <span className='font-bold'>2. Store Valuable and Personal Items</span>
            Although professional cleaning services are trustworthy, it is a good practice to store valuable or sensitive items such as jewelry, money, important documents, or small electronics. This gives you peace of mind and ensures that nothing is accidentally misplaced during the cleaning.
            
            <span className='font-bold'>3. Communicate Special Instructions</span>
            Every home is different, so if there are specific areas you want the cleaning team to focus on or avoid, inform them in advance. Whether it’s a fragile item that requires careful handling or a particular room that needs extra attention, clear communication ensures your needs are met.

            <a href='/Tips' className='text-quinta'>Learn more by clicking here</a>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <CleanHandsIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>How to Keep a Home Office Clean and Organized in Washington
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
            With the rise of remote work, more Washington residents are setting up home offices to stay productive and focused. However, working from home brings its own challenges, especially when it comes to keeping your workspace clean and organized. A tidy home office not only boosts productivity but also creates a more pleasant working environment. Here are some tips to help you keep a home office clean and organized.
            

            <span className='font-bold'>1. Declutter Regularly</span>
            Clutter can quickly accumulate in a home office, especially if you’re juggling multiple tasks. Take a few minutes at the end of each day to tidy up your desk, put away papers, and remove any items that don’t belong. Regular decluttering helps maintain a clear workspace and reduces distractions.

            <span className='font-bold'>2. Establish a Filing System</span>
            Papers and documents can easily pile up if not managed properly. Create a filing system for important documents, invoices, and notes. Use labeled folders or files to keep everything organized and easy to find. For digital files, consider using cloud storage and organizing them into folders for quick access.
            
            <span className='font-bold'>3. Keep Your Desk Clean</span>
            A clutter-free desk is essential for a productive workday. Limit the items on your desk to the essentials: your computer, a notebook, and a few frequently used supplies. Use drawer organizers or desk trays to store pens, paper clips, and other small items out of sight.

            <a href='/Tips' className='font-bold text-quinta'>Learn more by clicking here</a>

            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel1d-header">
            <PhoneForwardedIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Contacts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
            <span className='font-bold'>1. Call</span>
            We will receive calls at any time at the phone number +(980) 273-9078
            <span className='font-bold'>2. Email</span>
            Our contact email is Claudiofpa@gmail.com.
            <span className='font-bold'>3. SMS</span>
            I sent an SMS through the number +(980) 273-9078
            <span className='font-bold'>4. WhatsApp</span>
            We are also available on WhatsApp at the number +(980) 273-9078
            <span className='font-bold'>5. Social Media</span>
            Don’t forget that we are on social media, including Instagram and Facebook.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel1d-header">
            <CalendarMonthIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>Business Hours</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
            Our services can be customized to daily, weekly, biweekly, monthly, or one-time, according to your needs. <span>We are available from Monday to Saturday, from 08:00 am to 06:00 pm.</span>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel3d-header">
            <LibraryAddIcon className='mr-3'/>
            <Typography className='font-bold text-md sm:text-xl text-gray-700'>10 Cleaning Tips for Washington Residents
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
            <span>Keep Your Space Shining All Year Round
            </span>
            Living in Seattle presents a unique set of challenges, especially when it comes to keeping your home clean. The city’s rainy weather can make maintaining a tidy space seem like a daunting task. However, with some strategic tips and tricks, you can keep your home shining all year round, rain or shine. Here are our top 10 cleaning tips:

            <span className='font-bold'>1. Invest in Quality Doormats</span>
            The rainy season in Seattle can lead to muddy footprints and water stains. Place high-quality doormats both outside and inside each entrance to capture dirt and moisture before they spread throughout the house. Remember to clean the doormats regularly to ensure they remain effective.
            
            <span className='font-bold'>2. Keep Your Home Shoe-Free</span>
            Encourage a no-shoes policy inside the house. This simple rule helps reduce the amount of dirt, rainwater, and debris that gets tracked in. Consider providing slippers or comfortable socks for guests as an extra touch of hospitality.

            <span className='font-bold'>3. Combat Humidity with Dehumidifiers</span>
            Seattle’s humid climate can lead to excess moisture in your home, causing mold and mildew. Combat this by using dehumidifiers, especially in basements, bathrooms, and closets. Check and clean your dehumidifiers regularly to keep them running efficiently.

            <a href='/Tips' className='font-bold'>Learn more by clicking here</a>

            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
