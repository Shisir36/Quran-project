import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
       <nav className=' flex justify-between bg-green-500 shadow-md p-2 text-white'>
        <Link to= '/' className='flex justify-center items-center'>
        <BookOpenIcon className=' h-8 w-8'></BookOpenIcon>
         <span className=' text-3xl'>Quranic Resources</span>
        </Link>
       
        <ul className=' inline-flex md:gap-7 gap-2 text-1xl items-end'>
           <li> <NavLink className={({isActive})=> isActive ? "text-yellow-400 font-bold" :""} 
           to = '/'>Quran</NavLink>
           </li>
            <li> <NavLink className={({isActive})=> isActive ? "text-yellow-400 font-bold" :""}
            to = '/Surahs'> 
            Surahs</NavLink>
            </li>
            <li><NavLink className={({isActive})=> isActive ? "text-yellow-400 font-bold" :""}
             to = '/Hadiths'>
            Hadiths</NavLink>
            </li>
        </ul>
       </nav>
    );
};

export default Header;