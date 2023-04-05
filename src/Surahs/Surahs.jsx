import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Surahs.css'
import SurahsName from '../SurahsName/SurahsName';

const Surahs = () => {
const chapters = useLoaderData()
console.log(chapters.data.matches)
    return (
      <div className='md:mt-10 md:px-20'>
        <h1 className=' text-center md:mt-9 md:text-6xl text-3xl font-bold'>List of Surah</h1> <hr />
        <div className=' md:grid md:grid-cols-4 gap-5 mt-10'>
            {chapters.data.matches.map(surahName => <SurahsName surahName={surahName}></SurahsName>
            )}
        </div>
      </div>  
    );
};

export default Surahs;