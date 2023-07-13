import React, { useEffect, useState } from 'react'
import './AllStrains.css';
import { getAllStrains } from '../../services/strainService';
export default function AllStrains() {

const [strains,setStrains] = useState(null);

useEffect(()=> {
  const fetchAllStrains = async ()=> {
 const response = await getAllStrains();
console.log(response);
};
fetchAllStrains();
},[])

return (
    <div className = 'AllStrains'>
        
    {
        strains
        ? 'here are all the strains...'
        : 'Loading strains, please wait...'
    }
    </div>
  )
}
