import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Searchcomponent from './Searchcomponent';


function RouterComponent(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Searchcomponent/>} />
                        <Route path="/web" element={<ecommerce/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default RouterComponent;