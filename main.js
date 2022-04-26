const txt = document.getElementById('msg');
const en=document.getElementById('Encode');
const cpt=document.getElementById('crypt');

document.getElementById('button').onclick = function(e) {//Button onClick function
    e.preventDefault();
    if(en.value<1 || en.value>26 || isNaN(en.value) || txt.value.length<1){//check if input is valaid
        alert ("This Value is unvalid");
    }
    var temp='', dec, nw;
    for(var i=0; i<txt.value.length; i++){//Go through each char from input
        dec = txt.value.toUpperCase().charCodeAt(i);//Get the value of the captial letter
        if(cpt.value=="Encode"){//Check if user wants to Encode or Decode
            nw = dec + parseInt(en.value);
        }else{
            nw = dec - parseInt(en.value);
        }
        if(dec<65 || dec>90 ){//if not cap letter
            temp = temp.concat(txt.value.charAt(i));
        }else if(nw>90){
            nw = (nw%90)+64;
            temp = temp.concat(String.fromCharCode(nw));
        }else if(nw<65){
            nw = 91-(65-nw);
            temp = temp.concat(String.fromCharCode(nw));
        }else{
            temp = temp.concat(String.fromCharCode(nw));
        }
    }
    document.getElementById('output').innerHTML = temp;//Write to the p tag
}
