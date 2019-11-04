function findDuplicate(arr){
  for(i=0; i<arr.length; i++){
    for(j=i+1; j<arr.length; j++){
      if(arr[i] == arr[j]){
        return arr[i]
      }
    }
  }
  return -1;
}
console.log(findDuplicate([3,4,6,7, 7]));
