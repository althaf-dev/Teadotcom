$(document).ready(() => {

    const arr = ["Late night at office? ","Hungry!","Game Night?" ,"Cooking gone wrong?","Movie marathon?"];
    let i=0;  
    function textAnim(){

     $("#textanim").toggleClass("textanim")
     $("#textanim").html(arr[i]);
     setTimeout(textAnim,2000);
     if(i==arr.length){
        i=0;
     }
     else{
        i++;

     }
}

textAnim();

 })

