//import React from "react";
import React,{ useState } from 'react';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

function SearchComponent (){
    
    const[boat, setboat] =useState();
    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/headset/get",);
        try{
            navigate("/ecommerce")
        }catch(err) {
            console.log(err)
        }
    }
    return(
        <>
     
<div >

<nav onSubmit={handleSubmit} className="navbar sticky-top navbar-expand-lg navbar-dark">

<Link to="/" className="navbar-brand"><i className="far fa-newspaper"></i><h1>Web Scrapping</h1> </Link>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
</nav>
<div >


<div class="form-floating mb-3">
  <input type="search" class="form-control" id="floatingInput" placeholder="Search here"/>
  <label for="floatingInput" onClick={navigate(-1)}>Search here</label>
</div>
  <button type="button" class="btn btn-primary" onChange={(e) => setboat(e.target.value)} >Search</button>
      

    
  

</div>

           
        
        </div>
        </>
    );
}
 export  default SearchComponent;