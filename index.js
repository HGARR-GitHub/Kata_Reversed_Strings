function solution(str){
  let newAr = []
  
  newAr = str.split("")
  newAr.reverse()
  
  return newAr.join("")
  
  //You can also write the above in one line
  //return str.split("").reverse.join("")
}

solution("Heri")

