import React from 'react';
import { NiatSholat } from './MainContent/Sholat/NiatSholat';
import { TakbiratulIhram } from './MainContent/Sholat/TakbiratulIhram';

const contentComponents = {
  'niatSholat': NiatSholat,
  'takbiratulIhram': TakbiratulIhram,
};
const MainContent = ({ selected }) => {
  const ContentComponent = contentComponents[selected];

  return (
    <div className='flex w-full px-5 pt-3 pb-10 lg:pt-7'>
      <div className='w-full lg:w-full lg:sticky lg:top-28'>
        {!ContentComponent ? (
          <h1 className='text-2xl font-bold font-poppins'>Wellcome to My Documentasion</h1>
        ) : (
          <ContentComponent />
        )}
      </div>
    </div>
  );
};

export default MainContent;