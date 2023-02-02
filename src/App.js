import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Components/Home'
import { HistoryPage } from './pages/history/HistoryPage.jsx';
import { StartPage } from './pages/start/StartPage.jsx';
import { DataProvider } from './Services/dataContext';

function App() {
  
    return (
       
        <HashRouter>
                        
          <DataProvider>
                    
                 <Routes>

                    <Route path='/' element={ <StartPage/> }/>
                    <Route path='/home' element={ <Home/> }/>
                    <Route path='/history:slug' element={ <HistoryPage/> }/>
                    <Route path='*' element={<p>Not Found</p>}/>
                        

                 </Routes>       

          </DataProvider>

        </HashRouter>
  )}

  export { App } 