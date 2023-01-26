import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

function SetNews({setSearchId}) {
    const { id } = useParams()
  



    useEffect(() => { 

        if (typeof(id) === "undefined"){
            setSearchId('trending')
        }
        else{
            setSearchId(id)
        }
    },[id])

  



    return (null);
}

export default SetNews


