import React from 'react'
import { useEffect } from 'react'


function DataChecker({rawData, setNewsData}) {
    //The following sites dont have unique images/titles or both
    //TODO remove health from navbar
    //TODO remove "Dive into anything"
    //TODO remove investing.com
    //TODO remove allnurses.com

    useEffect(() => {
        if(typeof(rawData) !== 'undefined'){
            console.log(rawData)
            rawData = findDuplicateTitles(rawData)
            rawData = findDuplicateImages(rawData)
            rawData = checkUrlImage(rawData)
            setNewsData(rawData)
        }
    }, [rawData])

 

    function checkUrlImage(obj) {
        // Filter the data array using Array.filter and a Promise
        const filteredData = obj.fetchResult.data.filter((element) => {
        return new Promise((resolve) => {
            checkIfImageExists(`${element.image_url}`).then((exists) => {
              resolve(exists);
            });
          });
        });
    
      obj.fetchResult.data = filteredData;
      return obj;
    }
    
      
    function checkIfImageExists(url) {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
      
        img.onload = () => {
          resolve(true);
        };
        img.onerror = () => {
          resolve(false);
        };
      });
    }



    function findDuplicateImages(obj) {
        // create a dictionary to count the number of occurrences of each image URL
        const imageCounts = {};
        obj.fetchResult.data.forEach(function(x) {
          imageCounts[x.image_url] = (imageCounts[x.image_url] || 0) + 1;
        });
      
        // use .filter() and .flatMap() to get a list of duplicate image URLs
        const imagesToBeDeleted = Object.entries(imageCounts)
          .filter(element => element[1] >= 2)
          .flatMap(element => Array(element[1]).fill(element[0]));
      
        // use .filter() to remove the duplicates from the `obj.fetchResult.data` array
        if (imagesToBeDeleted.length > 0) {
          obj.fetchResult.data = obj.fetchResult.data.filter(x => !imagesToBeDeleted.includes(x.image_url));
        }
      
        // return the updated object
        return obj;
    }


    function findDuplicateTitles(obj){
        // Count the number of title occurrences
        const titleCounts = {};
        obj.fetchResult.data.forEach(x => { titleCounts[x.title] = (titleCounts[x.title] || 0) + 1;});
    
        // Get an array of duplicated titles
        const duplicatedTitles = Object.entries(titleCounts)
            .filter(entry => entry[1] >= 2)
            .map(entry => entry[0]);
    
        // Remove duplicated titles from the object
        obj.fetchResult.data = obj.fetchResult.data.filter(x => !duplicatedTitles.includes(x.title));
        // return the updated object
        return obj;
    }

  return (null)
}

export default DataChecker