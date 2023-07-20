import React from 'react'
import  StrainDetails from '../StrainDetails/StrainDetails'

import { useParams } from 'react-router-dom'


export default function StrainDetailsPage() {

  const { strainId } = useParams();
  
  return (
    <div className='StrainDetails Page'>
        <div className='title'>Strain Details Page</div>
        <StrainDetails strainId={strainId}/>
    </div>
  )
}
