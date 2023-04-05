import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Surah = () => {
    const surahs = useLoaderData()
    console.log(surahs.data.matches)
    return (
        <div className=' md:px-40 md:mt-20 mt-10 bg-lime-100 w-10/12 mx-auto'>
            <div className='px-5 pt-5'>
           {
            surahs.data.matches.map(englishTrans => <p className='mt-5'>{englishTrans.text}</p>)
           }
           </div>
        </div>
    );
};
export default Surah;