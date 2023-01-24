import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

function SetNews({setSearchId}) {
    const { id } = useParams()
    console.log(id)
    useEffect(() => { 
      setSearchId(id)
    },[id])


    return (null);
}

export default SetNews