 function removeSelectList(element){
    element.innerHTML = "";
    let x = document.createElement("OPTION");
    x.setAttribute("value", "0");
    let t = document.createTextNode("");
    x.appendChild(t);
    element.appendChild(x);  
  }
  
          /*function parsekeycodes(kc){
var result = "";
for(let key in kpair){
 if(kpair[key] == kc){
   result = key;
   break;
 }
}
return result;*/

function isEmpty(value){
  return (value == null || value === '');
}

function getCyclicCount(from,to,period){
     if(from == null || from == undefined || from <= 0 || to == null || to == undefined || to <= 0 || period == null || period == undefined || period <= 0){
        return -1;
     } 
    
   if(from <= period && to <= period){
        if(to < from){
            to = to + period;
        }
    return to - from + 1;
    } else {
        return -1;
    }
}




