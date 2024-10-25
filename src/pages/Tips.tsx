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
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
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

export default function Tips(){
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return(

        <section className="bg-quinta min-h-[70vh] flex flex-col
         justify-start items-start p-6">
            <div>
                <h1 className="text-5xl font-bold mb-10 text-start pt-20 md:pt-24  text-gray-50">Useful tips for you</h1>
            </div>

            <div className="space-y-4">
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <AddHomeIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>How to Prepare Your Home for a Professional Cleaning Service?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                        Hiring a professional cleaning service is an excellent way to ensure your home remains spotless, even during the busiest weeks. However, there are a few steps you can take before the cleaning team arrives to maximize efficiency and make the most of their visit. Here is a guide on how to prepare your home for a professional cleaning service.
                        
                        <span className='font-bold'>1. Declutter Common Areas</span>
                        Cleaning around clutter can slow down the cleaning process. Take a few minutes to put away items like toys, clothes, dishes, and other personal belongings from countertops, floors, and tables. This allows the cleaning team to focus on deep cleaning rather than tidying up the clutter.

                        <span className='font-bold'>2. Store Valuable and Personal Items</span>
                        Although professional cleaning services are trustworthy, it is a good practice to store valuable or sensitive items such as jewelry, money, important documents, or small electronics. This gives you peace of mind and ensures that nothing is accidentally misplaced during the cleaning.
                        
                        <span className='font-bold'>3. Communicate Special Instructions</span>
                        Every home is different, so if there are specific areas you want the cleaning team to focus on or avoid, inform them in advance. Whether it's a fragile item that requires careful handling or a particular room that needs extra attention, clear communication ensures your needs are met.

                        <span className='font-bold'>4. Provide Access to Cleaning Supplies and Equipment</span>
                        Most professional cleaning services bring their own supplies, but if you have specific products you prefer they use, make sure they are easily accessible. Additionally, ensure that all necessary areas of your home, such as utility closets or basements, are unlocked and accessible.

                        <span className='font-bold'>5. Secure Pets in a Safe Space</span>
                        Pets can become curious and anxious around new people, especially when cleaning equipment is involved. To ensure your pets are comfortable and the cleaning team can work without distractions, place them in a safe and secure space, such as a separate room or their crates, during the cleaning.

                        <span className='font-bold'>6. Note Problem Areas</span>
                        If there are stains, spills, or specific areas that need extra attention, make a list or point them out to the cleaning team when they arrive. This helps the team address your main concerns and ensures you are satisfied with the results.

                        <span className='font-bold'>7.  Prepare Your Home for the Service</span>
                        For certain types of cleaning, such as carpet cleaning or deep kitchen cleaning, there may be additional steps you need to take, like moving furniture or emptying cabinets. Check with your cleaning service in advance to see if any special preparations are needed.

                        <span className='font-bold'>8. Ensure Easy Access to Your Home</span>
                        If you won't be home during the cleaning, make arrangements for the cleaning team to enter. You can leave a key in a secure location, provide a door code, or ask a neighbor to let them in. Clear instructions ensure the team can start on time without delays.

                        <span className='font-bold'>9. Discuss Your Preferences</span>
                        If you have preferences about how beds are made, specific products you want used, or certain cleaning techniques, discuss these preferences with your cleaning service in advance to ensure your home is cleaned exactly how you like it.

                        <span className='font-bold'>10. Review the Service Plan</span>
                        Before the cleaning day, review the service plan or checklist provided by the cleaning company. This will give you a clear idea of the tasks to be completed and ensure all your expectations are met.

                        <span className='font-bold'>Benefits</span>
                        Preparing your home for a professional cleaning service doesn’t have to be a daunting task. By following these simple steps, you can help the cleaning team work more efficiently, ensuring your home is cleaned to your expectations. At Alves Cleaning, we strive to make the process as smooth as possible. Contact us today to schedule your next cleaning and experience the benefits of a well-prepared home!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <CleanHandsIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>How to Keep a Home Office Clean and Organized in Seattle and Surrounding Areas?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                        With the rise of remote work, more Seattle residents are setting up home offices to stay productive and focused. However, working from home brings its own challenges, especially when it comes to keeping your workspace clean and organized. A tidy home office not only boosts productivity but also creates a more pleasant working environment. Here are some tips to help you keep a home office clean and organized in Seattle.
                        
                        <span className='font-bold'>1. Declutter Regularly</span>
                        Clutter can quickly accumulate in a home office, especially if you’re juggling multiple tasks. Take a few minutes at the end of each day to tidy up your desk, put away papers, and remove any items that don’t belong. Regular decluttering helps maintain a clear workspace and reduces distractions.

                        <span className='font-bold'>2. Establish a Filing System</span>
                        Papers and documents can easily pile up if not managed properly. Create a filing system for important documents, invoices, and notes. Use labeled folders or files to keep everything organized and easy to find. For digital files, consider using cloud storage and organizing them into folders for quick access.
                        
                        <span className='font-bold'>3. Keep Your Desk Clean</span>
                        A clutter-free desk is essential for a productive workday. Limit the items on your desk to the essentials: your computer, a notebook, and a few frequently used supplies. Use drawer organizers or desk trays to store pens, paper clips, and other small items out of sight.

                        <span className='font-bold'>4.Clean Your Electronics</span>
                        Your computer, keyboard, and mouse are some of the most frequently used items in your home office and can accumulate dust and germs over time. Clean your electronics regularly with a microfiber cloth and use compressed air to clean your keyboard. This keeps your equipment clean and prolongs its lifespan.

                        <span className='font-bold'>5. Create a Cleaning Routine</span>
                        Incorporate office cleaning into your regular cleaning routine. Set aside time each week to dust surfaces, vacuum the floor, and clean your desk. This prevents the buildup of dirt and dust and ensures your workspace remains fresh and inviting.

                        <span className='font-bold'>6. Manage Cables and Wires</span>
                        Cables and wires can quickly become tangled and messy, making your office look disorganized. Use cable management tools like clips, ties, or covers to keep cables organized and out of sight. Labeling your cables can also make it easier to identify and disconnect devices when necessary.

                        <span className='font-bold'>7.Optimize Your Storage</span>
                        Efficient storage is key to an organized home office. Use shelves, cabinets, and storage boxes to keep supplies and documents well-organized. Consider vertical storage solutions to maximize space, especially in smaller offices. A well-organized storage system reduces clutter and makes it easier to find what you need.

                        <span className='font-bold'>8. Include plants</span>
                        Adding plants to your home office not only enhances aesthetics but also helps purify the air. Choose low-maintenance plants such as succulents, snake plants, or pothos, which thrive indoors. Plants can also improve your mood and creativity, making your workspace more enjoyable.

                        <span className='font-bold'>9. Personalize your space</span>
                        While keeping things tidy is important, don't forget to personalize your workspace. Add personal touches like photos, artwork, or a favorite mug to make your office more inviting. Just be careful not to clutter your desk with too many items.

                        <span className='font-bold'>10. Take regular breaks</span>
                        Taking breaks throughout the workday is not only beneficial for your productivity, but also offers a chance to tidy up your workspace. Use these breaks to stretch, clear any clutter, and organize your space. This habit keeps your office tidy and helps you focus when you return to work.
                        <span className='font-bold'>Summary</span>
                        Keeping a clean and organized home office is crucial for productivity, especially as remote work becomes more common in Seattle. By following these tips, you can create a functional and inspiring workspace. If you need a little extra help maintaining your home or office cleanliness, Alves Cleaning is here to assist you. Contact us today to schedule a professional cleaning service tailored to your needs!
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <LibraryAddIcon className='mr-3'/>
                        <Typography className='font-bold text-md sm:text-xl text-gray-700'>10 Cleaning Tips for Residents of Seattle and Surrounding Areas</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>

                        <span className='font-bold'>Keep your space shining all year round</span>

                        Living in Seattle presents a unique set of challenges, especially when it comes to keeping your home clean. The city's rainy climate can make maintaining a tidy space seem like a daunting task. However, with some strategic tips and tricks, you can keep your home shining all year round, rain or shine. Here are our top 10 cleaning tips:
                        
                        <span className='font-bold'>1. Invest in Quality Doormats</span>
                        Seattle's rainy season can lead to muddy footprints and water stains. Place high-quality doormats both outside and inside each entrance to capture dirt and moisture before they spread throughout the house. Remember to clean the mats regularly to ensure they remain effective.

                        <span className='font-bold'>2. Keep Shoes Out of the House</span>
                        Encourage a no-shoe policy indoors. This simple rule helps reduce the amount of dirt, rainwater, and debris that enters. Consider providing slippers or comfortable socks for guests as an extra touch of hospitality.

                        <span className='font-bold'>3. Combat Humidity with Dehumidifiers</span>
                        Seattle's humid weather can lead to excess moisture in your home, causing mold and mildew. Combat this by using dehumidifiers, especially in basements, bathrooms, and closets. Check and clean your dehumidifiers regularly to keep them operating efficiently.

                        <span className='font-bold'>4. Create a Weekly Cleaning Schedule</span>
                        Consistency is key to maintaining a clean home. Develop a weekly cleaning routine that covers all essential areas, including dusting, vacuuming, and mopping. Spreading tasks throughout the week makes cleaning more manageable and ensures nothing gets overlooked.

                        <span className='font-bold'>5. Use Microfiber Cloths</span>
                        Microfiber cloths are a game changer when it comes to cleaning. They are highly effective at capturing dust, dirt, and even bacteria without the need for harsh chemicals. Keep some handy for different surfaces, such as countertops, windows, and electronics.

                        <span className='font-bold'>6. Keep Windows Crystal Clear</span>
                        Seattle's cloudy weather can make your home feel dark, so clean windows are essential. Use a vinegar and water solution to clean your windows regularly, allowing more natural light in. Don't forget to clean the sills and tracks, which can accumulate dirt over time.

                        <span className='font-bold'>7. Manage Pet Hair</span>
                        If you have pets, you know how quickly hair can spread throughout the house. Brush your pets regularly to minimize shedding and vacuum floors, furniture, and upholstery at least twice a week. Consider investing in a vacuum specifically designed for pet hair for the best results.

                        <span className='font-bold'>8. Clean and Rotate Rugs</span>
                        Rugs can trap dirt and moisture, especially in high-traffic areas. Vacuum rugs regularly and consider rotating them every few months to balance wear. If possible, take them outside to shake out loose dirt or have them professionally cleaned.

                        <span className='font-bold'>9. Keep Up with Laundry</span>
                        Rainy days often mean wet clothes and linens. Don’t let laundry pile up—make it a habit to wash and dry clothes regularly. Use dryer sheets to reduce static electricity and consider air-drying certain items, like towels, to prevent mold.

                        <span className='font-bold'>10. Schedule Regular Deep Cleanings</span>
                        In addition to your weekly cleaning routine, schedule regular deep cleaning sessions. Focus on often-neglected areas, such as behind appliances, inside cabinets, and under furniture. This will prevent dirt buildup and keep your home fresh and clean.

                        <span className='font-bold'>Summary</span>
                        Seattle's weather may be unpredictable, but your cleaning routine doesn’t have to be. By incorporating these tips into your regular home maintenance, you can enjoy a clean and inviting space regardless of the weather forecast. For those times when life gets too busy, remember that Alves Cleaning is here to help keep your Seattle home in excellent condition year-round. Contact us today for professional cleaning services tailored to your needs!"
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </section>
    );
}