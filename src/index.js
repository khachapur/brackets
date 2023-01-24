const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

module.exports = function check(str, bracketsConfig) {
  let result = false;
  str = str.split('');
 if (str.length%2 !== 0){
      return result = false;
    }else if (str[0]== ')' || str[0]== '}' || str[0]== ']' || str[0]== '2' || str[0]== '4' || str[0]== '6' || str[0]== '8'){
      return result = false;
    }else if (str[str.length-1]== '(' || str[str.length-1]== '{' || str[str.length-1]== '[' || str[str.length-1]== '1' || str[str.length-1]== '3' || str[str.length-1]== '5' || str[str.length-1]== '7'){
      return result = false;
    }

    if (bracketsConfig.length == 1){

    (function func(){
      for (let i=0; i<str.length-1; i++){
        if (str[i] == bracketsConfig[0][0] && str[i+1] == bracketsConfig[0][1]){
          str.splice(i, 2)
          if (str.length > 0){
            func()
          }else{
            result = true
          }
        }
      }
      return result
    })()

   } else if (bracketsConfig.length == 2) {
      
    (function func(){
      for (let i=0; i < str.length-1; i++){
        if (str[i] == bracketsConfig[0][0] && str[i+1] == bracketsConfig[0][1] || str[i] == bracketsConfig[1][0] && str[i+1] == bracketsConfig[1][1]){
          str.splice(i, 2)
          if (str.length > 0){
            func()
          }else{
            result = true
          }
        }
      }
    })()

  }else if (bracketsConfig.length == 3) {

    (function func(){
      for (let i=0; i < str.length-1; i++){
        if (str[i] == bracketsConfig[0][0] && str[i+1] == bracketsConfig[0][1] || str[i] == bracketsConfig[1][0] && str[i+1] == bracketsConfig[1][1] || str[i] == bracketsConfig[2][0] && str[i+1] == bracketsConfig[2][1]){
          str.splice(i, 2)
          if (str.length > 0){
            func()
          }else{
            result = true
          }
        }
      }
    })()

  }else if (bracketsConfig.length == 4){
  
  (function func(){
        for (let i=0; i < str.length-1; i++){
          if (str[i] == bracketsConfig[0][0] && str[i+1] == bracketsConfig[0][1] || str[i] == bracketsConfig[1][0] && str[i+1] == bracketsConfig[1][1] || str[i] == bracketsConfig[2][0] && str[i+1] == bracketsConfig[2][1] || str[i] == bracketsConfig[3][0] && str[i+1] == bracketsConfig[3][1]){
            str.splice(i, 2)
            if (str.length > 0){
              func()
            }else{
              result = true
            }
          }
        }
      })()
  
  }else if (bracketsConfig.length == 5){

    (function func(){
      for (let i=0; i < str.length-1; i++){
        if (str[i] == bracketsConfig[0][0] && str[i+1] == bracketsConfig[0][1] || str[i] == bracketsConfig[1][0] && str[i+1] == bracketsConfig[1][1] || str[i] == bracketsConfig[2][0] && str[i+1] == bracketsConfig[2][1] || str[i] == bracketsConfig[3][0] && str[i+1] == bracketsConfig[3][1] || str[i] == bracketsConfig[4][0] && str[i+1] == config6[4][1]){
          str.splice(i, 2)
          if (str.length > 0){
            func()
          }else{
            result = true
          }
        }
      }
    })()

  }

  return result
}
