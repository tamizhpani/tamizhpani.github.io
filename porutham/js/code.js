function set(ele,value){
    if(ele == ele1){
        switch (value) {
        case appdata.languages.en:
            ele.innerHTML = appdata.session.app_input_head[appdata.languages.en];
            break;
        case appdata.languages.ta:
            ele.innerHTML = appdata.session.app_input_head[appdata.languages.ta];           
            break;
        default:
            appdata.session.error = "no valid case found";
        }
    }
            
            //label for male and female star select
    if(ele == ele2){
        switch (value) {
            case appdata.languages.en:                    
                ele2.innerHTML = appdata.session.lbl_malestar_head[appdata.languages.en];
                break;
            case appdata.languages.ta:
                ele2.innerHTML = appdata.session.lbl_malestar_head[appdata.languages.ta];                
                break;
            default:
                appdata.session.error = "no valid case found";
            }
    }
    if(ele == ele3){
        switch (value) {
            case appdata.languages.en:                    
                ele3.innerHTML = appdata.session.lbl_femalestar_head[appdata.languages.en];
                break;
            case appdata.languages.ta:
                ele3.innerHTML = appdata.session.lbl_femalestar_head[appdata.languages.ta];
                break;
            default:
                appdata.session.error = "no valid case found";
            }
    }
    if(ele == ele4){
        switch (value) {
            case appdata.languages.en:                    
                const lflag1 = (function () {
                    removeSelectList(ele4);
                    for(let s=1;s<=27;s++){
                        let x = document.createElement("OPTION");
                        let tmp = appdata.stars[JSON.stringify(s)];
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.stars[tmp]);
                        x.appendChild(t);
                        ele4.appendChild(x);
                    }
                })();
                break;
        case appdata.languages.ta:                  
                const lflag2 = (function () {  
                    removeSelectList(ele4);     
                    for(let s=1;s<=27;s++){
                        let x = document.createElement("OPTION");
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.stars[JSON.stringify(s)]);
                        x.appendChild(t);
                        ele4.appendChild(x);
                    }
                })();
                break;
            break;
        default:
             appdata.session.error = "no valid case found";
        }
    }

    if(ele == ele5){
        switch (value) {
            case appdata.languages.en:                    
                const lflag1 = (function () {
                    removeSelectList(ele5);
                    for(let s=1;s<=27;s++){
                        let x = document.createElement("OPTION");
                        let tmp = appdata.stars[JSON.stringify(s)];
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.stars[tmp]);
                        x.appendChild(t);
                        ele5.appendChild(x);
                    }
                })();
                break;
        case appdata.languages.ta:                  
                const lflag2 = (function () {  
                    removeSelectList(ele5);     
                    for(let s=1;s<=27;s++){
                        let x = document.createElement("OPTION");
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.stars[JSON.stringify(s)]);
                        x.appendChild(t);
                        ele5.appendChild(x);
                    }
                })();
                break;        
        default:
             appdata.session.error = "no valid case found";
        }
    }  
          //label for male female rasi select
    if(ele == ele6){
        switch (value) {
            case appdata.languages.en:                    
                ele6.innerHTML = appdata.session.lbl_malerasi_head[appdata.languages.en];
                break;
            case appdata.languages.ta:
                ele6.innerHTML = appdata.session.lbl_malerasi_head[appdata.languages.ta];                
                break;
            default:
                appdata.session.error = "no valid case found";
            }
    }
    if(ele == ele7){
        switch (value) {
            case appdata.languages.en:                    
                ele7.innerHTML = appdata.session.lbl_femalerasi_head[appdata.languages.en];
                break;
            case appdata.languages.ta:
                ele7.innerHTML = appdata.session.lbl_femalerasi_head[appdata.languages.ta];
                break;
            default:
                appdata.session.error = "no valid case found";
            }
    }
          //male and female rasi select
          
    if(ele == ele8){
        switch (value) {
            case appdata.languages.en:                    
                const lflag1 = (function () {
                    removeSelectList(ele8);
                    let rasis = appdata.rasisofstar[appdata.session.male_star];
                    if(typeof rasis == "object"  && rasis.length ==2){
                    for(let s=rasis[0];s<=rasis[1];s++){
                        let x = document.createElement("OPTION");
                        let tmp = appdata.rasis[JSON.stringify(s)];
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.rasis[tmp]);
                        x.appendChild(t);
                        ele8.appendChild(x);
                    }
                    }
                })();
                break;
        case appdata.languages.ta:                  
                const lflag2 = (function () {  
                    removeSelectList(ele8);     
                    let rasis = appdata.rasisofstar[appdata.session.male_star];
                    for(let s=rasis[0];s<=rasis[1];s++){
                        let x = document.createElement("OPTION");
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.rasis[JSON.stringify(s)]);
                        x.appendChild(t);
                        ele8.appendChild(x);
                    }
                })();
                
            break;
        default:
             appdata.session.error = "no valid case found";
        }
    }

    if(ele == ele9){
        switch (value) {
            case appdata.languages.en:                    
                const lflag1 = (function () {
                    removeSelectList(ele9);
                    let rasis = appdata.rasisofstar[appdata.session.female_star];
                    if(typeof rasis == "object"  && rasis.length ==2){
                    for(let s=rasis[0];s<=rasis[1];s++){
                        let x = document.createElement("OPTION");
                        let tmp = appdata.rasis[JSON.stringify(s)];
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.rasis[tmp]);
                        x.appendChild(t);
                        ele9.appendChild(x);
                    }
                    }
                })();
                break;
        case appdata.languages.ta:                  
                const lflag2 = (function () {  
                    removeSelectList(ele9);     
                    let rasis = appdata.rasisofstar[appdata.session.female_star];
                    for(let s=rasis[0];s<=rasis[1];s++){
                        let x = document.createElement("OPTION");
                        x.setAttribute("value", s);
                        let t = document.createTextNode(appdata.rasis[JSON.stringify(s)]);
                        x.appendChild(t);
                        ele9.appendChild(x);
                    }
                })();
                
            break;
        default:
             appdata.session.error = "no valid case found";
        }
    }
          
            
    }
    
    
    function checkCompatability(){
    //let appdata = JSON.stringify(newArr);
    //alert(appdata);
    //alert(newArr.planets.sun);
    document.getElementById("feedback").style.display = "block";
        if(appdata.session.error == "null"){
            if(appdata.session.male_star != "null" && appdata.session.female_star != "null" && appdata.session.male_rasi != "null" && appdata.session.female_rasi != "null"){
       
            if(appdata.session.language == "தமிழ்"){
                document.getElementById("userinput_title").innerHTML = appdata.session.userinput_title[appdata.session.language];
                document.getElementById("male_input_head").innerHTML = appdata.sex.male[appdata.session.language];                
                      document.getElementById("male_input_rasi").innerHTML = appdata.session.input_rasi[appdata.session.language] + ":" +  "<b>" +appdata.rasis[appdata.session.male_rasi] + "</b>";       
 document.getElementById("male_input_star").innerHTML = appdata.session.input_star[appdata.session.language] + ":" + "<b>" + appdata.stars[appdata.session.male_star]  + "</b>";              
            
 document.getElementById("female_input_head").innerHTML = appdata.sex.female[appdata.session.language];                
                      document.getElementById("female_input_rasi").innerHTML = appdata.session.input_rasi[appdata.session.language] + ":" + "<b>" + appdata.rasis[appdata.session.female_rasi] + "</b>";       
 document.getElementById("female_input_star").innerHTML = appdata.session.input_star[appdata.session.language] + ":" +"<b>" + appdata.stars[appdata.session.female_star] + "</b>";             
            //userdata.innerHTML = appdata.stars[appdata.session.male_star]  + "<br>" +appdata.stars[appdata.session.female_star]  + "<br>" + appdata.rasis[appdata.session.male_rasi]  + "<br>" + appdata.rasis[appdata.session.female_rasi]  + "<br>";
            } else if(appdata.session.language == "English"){
           let m1 = appdata.stars[appdata.session.male_star];
            let f1 = appdata.stars[appdata.session.female_star];
            let m2 = appdata.rasis[appdata.session.male_rasi];
            let f2 = appdata.rasis[appdata.session.female_rasi];
                        /*userdata.innerHTML = appdata.stars[m1]  + "<br>" +appdata.stars[f1]  + "<br>" + appdata.rasis[m2]  + "<br>" + appdata.rasis[f2]  + "<br>";*/
  document.getElementById("userinput_title").innerHTML = appdata.session.userinput_title[appdata.session.language];
                document.getElementById("male_input_head").innerHTML = appdata.sex.male[appdata.session.language];                
                      document.getElementById("male_input_rasi").innerHTML = appdata.session.input_rasi[appdata.session.language] + ":" + "<b>" + appdata.rasis[m2] + "</b>";       
 document.getElementById("male_input_star").innerHTML = appdata.session.input_star[appdata.session.language] + ":" + "<b>" + appdata.stars[m1] + "</b>";              
            
 document.getElementById("female_input_head").innerHTML = appdata.sex.female[appdata.session.language];                
                      document.getElementById("female_input_rasi").innerHTML = appdata.session.input_rasi[appdata.session.language] + ":" + "<b>" + appdata.rasis[f2] + "</b>";      
 document.getElementById("female_input_star").innerHTML = appdata.session.input_star[appdata.session.language] + ":" + "<b>" + appdata.stars[f1] + "</b>";  

            
            
            }
            
            }
        }
        
        executeDhasaporutham();
        alert(appdata.session.porutham.dina);
        
}
       //calculate 10 poruthams 
    function executeDhasaporutham(){
        //1. DhinaPorutham
        let tocheck = undefined;
        let ftom =   getCyclicCount(parseInt(appdata.session.female_star), parseInt(appdata.session.male_star),27);
        if(ftom == 27){
            if(appdata.session.female_rasi == appdata.session.male_rasi){
                tocheck = "27_Equal_Rasi";
            }else{
                tocheck = "27_Unequal_Rasi";
            }
        }
        
        if(ftom == 1){
            let c = parseInt(appdata.session.male_star);
            if(appdata.dina.Same_Star_Pass.indexOf(c) >= 0){
            tocheck = "Same_Star_Pass";
            }else if(appdata.dina.Same_Star_Ok.indexOf(c) >= 0){
             tocheck = "Same_Star_Ok";
            }else if(appdata.dina.Same_Star_Fail.indexOf(c) >= 0){
             tocheck = "Same_Star_Fail";
            }
            
        } 
        
        if(ftom > 1 && ftom < 27){
            tocheck = ftom;
        }
        
        if(appdata.dina.Well.indexOf(tocheck) >= 0){
            appdata.session.porutham.dina = appdata.session.porutham_result.Well[appdata.session.language];
        }else if(appdata.dina.Not.indexOf(tocheck) >= 0){
            appdata.session.porutham.dina = appdata.session.porutham_result.Not[appdata.session.language];
        }else if(appdata.dina.Ok.indexOf(tocheck) >= 0){
            appdata.session.porutham.dina =  appdata.session.porutham_result.Ok[appdata.session.language];
        }
        
        
        
        
    }
            
        
        
    
function testWorking(){
// to test newly written codes
   //alert(getCyclicCount(1,null,27));
}
