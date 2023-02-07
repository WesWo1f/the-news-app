import React from 'react'
import { useEffect } from 'react'


function DataChecker({rawData, setNewsData}) {
    
    //TODO remove health from navbar
    //TODO remove "Dive into anything"
    //TODO remove investing.com
    //TODO remove allnurses.com

    useEffect(() => {
        if(typeof(rawData) !== 'undefined'){
            rawData = findDuplicateTitles(rawData)
            rawData = findDuplicateImages(rawData)
            rawData = checkUrlImage(rawData)
            setNewsData(rawData)
        }
    }, [rawData])


    function checkUrlImage(obj){
        obj.fetchResult.data.forEach(element => {
            checkIfImageExists(`${element.image_url}`, (exists) => {
                if (exists) {
                } else {
                    let indexToDelete = obj.fetchResult.data.indexOf(element)
                    console.log(indexToDelete)
                    obj.fetchResult.data.splice(indexToDelete, 1)
                }
              });
        });
        return obj
    }
    function checkIfImageExists(url, callback) {
        const img = new Image();
        img.src = url;
    
        if (img.complete) {
          callback(true);
        } else {
          img.onload = () => {
            callback(true);
          };
          img.onerror = () => {
            callback(false);
          };
        }
    }


    function findDuplicateImages(obj){
        //finds and counts the number of image occurrences
        const imageCounts = {};
        obj.fetchResult.data.forEach(function (x) { imageCounts[x.image_url] = (imageCounts[x.image_url] || 0) + 1;});
        //checks if images appear more than once if so pushes this to titleToBeDeleted array
        const keyAndValue = Object.entries(imageCounts)
        let imagesToBeDeleted = []
        keyAndValue.forEach(element => {
            //console.log(element)
            if(element[1] >= 2){
                //set number of this picture that is repeated
                let num = element[1]
                for (let index = 0; index < num; index++) {
                    console.log(element[0])
                    imagesToBeDeleted.push(element[0])
                }
            }
        });
        //checks imagesToBeDeleted against all titles where there is a match it gets the index of said title then delete it from the object then returns the object
        let keys = Object.keys(imageCounts);
        console.log("imagesToBeDeleted.length: "+imagesToBeDeleted.length)
        if(imagesToBeDeleted.length > 0){
            keys.forEach(element => {
                for (let index = 0; index < imagesToBeDeleted.length; index++) {
                    if(imagesToBeDeleted[index] === element){
                        let indexToDelete = keys.indexOf(element)
                        obj.fetchResult.data.splice(indexToDelete, 1)
                    }
                }
            });
        }
        return obj
    }

    function findDuplicateTitles(obj){
        //finds and counts the number of title occurrences
        const titleCounts = {};
        obj.fetchResult.data.forEach(function (x) { titleCounts[x.title] = (titleCounts[x.title] || 0) + 1;});
        //checks if titles appear more than once if so pushes this to titlesToBeDeleted array
        const keyAndValue = Object.entries(titleCounts)
        let titlesToBeDeleted = []
        keyAndValue.forEach(element => {
            if(element[1] >= 2){
                //console.log(element[1])
                titlesToBeDeleted.push(element[0])
            }
        });
        //checks titlesToBeDeleted against all titles where there is a match it gets the index of said title then delete it from the object then returns the object
        let keys = Object.keys(titleCounts);
        console.log("titlesToBeDeleted.length: "+titlesToBeDeleted.length)
        if(titlesToBeDeleted.length > 0){
            keys.forEach(element => {
                for (let index = 0; index < titlesToBeDeleted.length; index++) {
                    if(titlesToBeDeleted[index] === element){
                        let indexToDelete = keys.indexOf(element)
                        obj.fetchResult.data.splice(indexToDelete, 1)
                    }
                }
            });
        }
        return obj
    }
    




  return (
    <>
    
    
    </>

  )
}

export default DataChecker