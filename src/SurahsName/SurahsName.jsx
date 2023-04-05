import React from 'react';
import { Link } from 'react-router-dom';

const SurahsName = ({surahName}) => {
    const {surah}= surahName;
    return (
        <div className='border p-5 rounded-md shadow-md'>
        <Link to={`/SurahsName/${surah.number}`}>
            <h2 className=' md:text-3xl'>{surah.name}</h2>
            <p>{surah.englishName}</p>
            <div>
                <p>{surah.englishNameTranslation}</p>
            </div>
        
        </Link>
        </div>
    );
};

export default SurahsName;




// 