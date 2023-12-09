


$(document).ready(() => {


   

    $(window).resize(()=>{
        console.log($(window).width());
        

    })
   
    


    const box = document.querySelectorAll(".box");
    const arr = ["Late night at office? ","Hungry!","Game Night?" ,"Cooking gone wrong?","Movie marathon?"];
  

    $("#login").click(()=>{

 
        if($(window).width()<676){
            console.log("mobile");
            $("#main").hide();
        }
        // $("#modal1").show();

    })

let i=0;   
function textAnim(){
    //  let i = Math.floor(Math.random() *3);
     $("#textanim").toggleClass("textanim")
     $("#textanim").html(arr[i]);
   
    //  $("#textanim").removeClass("textanim")
     setTimeout(textAnim,2000);
     if(i==arr.length){
        i=0;
     }
     else{
        i++;

     }
   


}

textAnim();

    window.addEventListener("scroll", () => {


        const trigger = window.innerHeight;
      

        // console.log(boxtop);
        box.forEach((Element) => {

            const boxtop = Element.getBoundingClientRect().top;
            if (boxtop < trigger) {
                Element.classList.add("show");
                //
            }

            else {
                Element.classList.remove("show");

            }



        })
    })



 })

