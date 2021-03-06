import { createContext, useState,useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {auth,firebase} from './services/firebase'
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import { AuthContextProvider } from './contexts/AuthContext'



function App() {


  return(
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/rooms/new' element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>  
  );    

}

export default App;
