// 'use strict'

// const insertShiftArray = (arr, val) =>{
    
//     if (arr.length % 2 === 0){
//         let len = arr.length;
//         for(i=arr.length; i--; i>0){
            
//             if(i>=(len)/2){
//                 console.log((arr.length)/2);
//                 console.log(arr[i]);
//                 console.log(arr[i+1]);
//                 arr[i+1] = arr[i];
//                 console.log(arr[i]);
//                 console.log(arr[i+1]);
//             }
//         }
//         arr[(arr.length-1)/2] = val;
//     } else if (arr.length % 2 !== 0) {
//         for(i=arr.length; i--; i>0){
//             if(i>=arr.length/2){
//                 arr[i+1] = arr[i];
//             }
//         }
//         arr[arr.length/2] = val;
//     }

//     return arr;
// }