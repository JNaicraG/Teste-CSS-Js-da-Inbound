/*Script for handling the Pop-up*/

 var form = document.getElementsByTagName("form")[0] /*Get the form*/
 var pop = document.getElementsByClassName("popup")[0]; //get the popup

 form.addEventListener('submit',(e) => { //add an event to the button clicking on the form (submit)
     e.preventDefault(); //Blocks it from refreshing the page
     pop.style.visibility = "visible"; //become functional
     pop.style.opacity = 1; //appears
 });

 pop.getElementsByClassName("fa-times")[0].addEventListener('click',(e) =>  { //Closing it
    pop.style.opacity = 0; //disappears
    setTimeout(()=>{ 
        pop.style.visibility = 'hidden'; }, 1000); //delay for it´s hidden so it can have a smoother transition
 })