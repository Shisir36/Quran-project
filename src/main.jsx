import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Surahs from './Surahs/Surahs';
import Quran from './Quran/Quran';
import Hadiths from './Hadiths/Hadiths';
import Surah from './Surah/Surah';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Quran></Quran>
      },
      {
       path:'/Surahs',
       element:<Surahs/>,
       loader:()=> fetch("http://api.alquran.cloud/v1/search/Abraham/all/en")
      },
      {
       path:'SurahsName/:surahId',
       element: <Surah></Surah>,
       loader:({params})=> fetch(`http://api.alquran.cloud/v1/search/Abraham/${params.surahId}/en`)
      },
      {
        path:'/Hadiths',
        element:<Hadiths></Hadiths>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
