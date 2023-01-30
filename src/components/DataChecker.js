import React from 'react'
import { useEffect } from 'react'
function DataChecker(newsData) {

    //currently nothing is running in this component
        useEffect(() => {
        if(typeof(newsData.newsData) !== 'undefined'){
            //checkingForDuplicates(newsData)
        }
    }, )

    function checkingForDuplicates(dataArray){
        let arr = dataArray.newsData.fetchResult.data
        let checkArray = []
        let i;
        arr.forEach(element => {
            //console.log(element.title)
            checkArray.push(element.title) 
        });
        checkArray.sort()
        console.log("the unsorted array:" +checkArray)
        for (i = checkArray.length - 1; i >= 0; i -= 1) {
            if(i >= 0 && i < checkArray.length -1){
                if(checkArray[i] === checkArray[i -1]){
                    checkArray.splice(i, 1);
            }
        }}
        //console.log("this has been checked "+checkArray.length)
        ///****************************************** */
    }

    function checkingForMissingInfo(dataArray){
        let arr = dataArray.newsData.fetchResult.data
        let i;
        for (i = arr.length - 1; i >= 0; i -= 1) {
            if(arr[i].image_url === "" || arr[i].source === "" || arr[i].title === ""|| arr[i].source === ""){
                arr.splice(i, 1);
            }
        }
    }

  return (
    <>
    
    
    </>

  )
}

export default DataChecker