import React from 'react';
import Lottie from "lottie-react";
import quran from '../assets/quran.json'
import './Quran.css'

const Quran = () => {
    return (
    <div className=' md:flex md:justify-center md:px-24 px-3 md:mt-36 gap-14'>
    <div className='w-full mt-20'>
    <small className=' text-2xl'>The Quran</small>
    <p className='text-4xl'>A Holy Book of <span className='title-short'>Guidance</span> </p>
    <p className='mt-10'>
    The Quran is the central religious text of Islam, considered to be the word of God as revealed to the Prophet Muhammad. It consists of 114 chapters or surahs, containing 6,236 verses. The Quran covers a range of topics including theology, ethics, history, and morality, emphasizing the oneness of God, the importance of good deeds, and treating others with respect and kindness. Muslims believe that the Quran is the ultimate source of guidance and recite it daily in prayer. The Quran has been translated into many languages and continues to inspire millions of people worldwide.
    </p>
</div>  

<div className=' relative'>
<Lottie animationData={quran} loop={true} />;
</div>
</div>
    );
};

export default Quran;