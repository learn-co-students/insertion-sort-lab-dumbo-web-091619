function findMinAndRemove(arr){
    let min = arr[0]
    let minIndex = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
            minIndex = i
        }
    }
    arr.splice(minIndex, 1)
    return min
}

function insertionSort(arr){
    let sortedArray = []
    while (!!arr.length){
        sortedArray.push(findMinAndRemove(arr))
    } 
        return sortedArray
}
