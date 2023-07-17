import React, { useEffect, useState } from 'react'
import './AllStrains.css';
import { getAllStrains } from '../../services/strainService';
import { Link } from "react-router-dom";

export default function AllStrains() {



const [strains,setStrains] = useState(null);

useEffect(()=> {
  const fetchAllStrains = async ()=> {
  const response = await getAllStrains();
  const strainsArray = response.data.data;
  setStrains(strainsArray);
};
fetchAllStrains();
},[])

return (
    <div className = 'AllStrains'>
      <h1> All Strains</h1>
    {
        
        !strains
        ? 'Loading strains, please wait...'
        : <React.Fragment>
          <ul>
            {
              strains.map((strain) => (
            <Link key={strain._id} to= {`/strains/${strain._id}`}>
                <li>
                  <img className='poster' src={strain.img_url} alt= 'strain poster'/>
                  <div className='strain-name'>{strain.name}</div>
                </li>
            </Link>
                
              ))
            }
          </ul>

          </React.Fragment>
    }
    </div>
  )
}
