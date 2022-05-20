import React from 'react'
// import image from '../../Images/profile.JPG'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Tes = () => {


    //connecting to backend: USE AXIOS

    const [punam, setDipika] = useState([])

    //data get

useEffect(()=>{

    axios.get("http://localhost:5000/allpro")


    .then(result=>{
        // console.log(result.data)

        setDipika(result.data)
    }
    ).catch(err=>console.log(err))

}, [])


  return (
    <>
    <div className="container">
        <div className="row">
            
            {punam.map(d=>{
                return(
<div className='col-md-4'>
                    <div className='card'>
                           <div class="card-body">
                                <img src={"http://localhost:5000/" +d.pic} alt='' className='img-fluid' height="300" width="100"/>
                               <h5 class="card-title">{d.pname}</h5>
                               <p class="card-text">{d.pdesc}</p>
                           </div>
                    </div>
                   </div>
                )
            })}
        
  
            
             

        </div>
    </div>
    
    
    </>
  )
}

export default Tes