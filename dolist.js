

// all variblas

let myinput = document.querySelector(".add-task input");
let plus = document.querySelector(".add-task .plus");
let taskcontent = document.querySelector(".task-content");
let notaskmessage = document.querySelector(".no-task-message");
let taskcount = document.querySelector(".task-count span");
let taskcompleted= document.querySelector(".task-completed span");

// focus on input 
window.onload = function() {
   myinput.focus();
}

// add the task
plus.onclick = function() {

   //check if input is empty
   if (myinput.value === "" ) {
      alert(" you cant add task if your input is empty ")
      myinput.focus()

   } else {

      let notaskmessage = document.querySelector(".no-task-message");

      if (document.body.contains(document.querySelector(".no-task-message"))) {

      notaskmessage.remove()

   }

      // create mainspan elemnt 
      let mainsapn = document.createElement("span")
      
      //crate delete button 
      let deletebutton = document.createElement("span")

      // create text to mainspan 
      let text = document.createTextNode(myinput.value)

      // create text to delete button
      let deletetext = document.createTextNode("delete")


     // create finish all and text and class and append child to main span 
      let finishall = document.createElement("span");
      let finishalltext = document.createTextNode("finsed all");
      finishall.className = "finish-all";
      finishall.appendChild(finishalltext);


 // create delete all and text and class and append child to main span 
   let deleteall = document.createElement("span");
   let deletalltext = document.createTextNode("delete all");
   deleteall.className = "delete-all";
   deleteall.appendChild(deletalltext);
   

      // append child delete all and finished all to main pan
      mainsapn.appendChild(finishall);
      mainsapn.appendChild(deleteall)

      // add text to  main span 
      mainsapn.appendChild(text)
      // add class to mainspan
      mainsapn.className = "task-box";

      //add deletetext to delete button
      deletebutton.appendChild(deletetext)
      // add class to delete button
      deletebutton.className = "delete";

      // add delete button to main span
      mainsapn.appendChild(deletebutton)

      // add the task to the container 
      taskcontent.appendChild(mainsapn);

      myinput.value = "";
      myinput.focus()

      calctask()

      localStorage.setItem("tasks" , mainsapn.innerHTML)
      
   }
};



// delete task 
 document.addEventListener("click" , function(e) {

   if (e.target.className == "delete") {

      e.target.parentNode.remove()

   }

   if (e.target.className == "delete-all") {

   let arraydeleteall = Array.from(document.querySelectorAll(".task-box"));

   for(i=0; i<arraydeleteall.length; i++) {
      arraydeleteall[i].remove();

   }
 }

 if (e.target.className == "finish-all") {

   let arrayfinishall = Array.from(document.querySelectorAll(".task-box"));

   for(i=0; i<arrayfinishall.length; i++) {

      arrayfinishall[i].classList.toggle("finish")
   }
 }

   if (e.target.classList.contains("task-box")) {

      e.target.classList.toggle("finish");

   }

   if(taskcontent.childElementCount == 0) {

      notask()
      myinput.focus();
}
calctask(); 

});

 // function to create No tasks message 

 function notask() {

   let msgspan = document.createElement("span");
   let msgtext = document.createTextNode("No Task To Show")
   msgspan.appendChild(msgtext)
   msgspan.className = "no-task-message";
   taskcontent.appendChild(msgspan)
 }

  
// function calculate Task 

function calctask() {

   taskcount.innerHTML = document.querySelectorAll(".task-content .task-box").length;

   taskcompleted.innerHTML = document.querySelectorAll(".task-content .finish").length;

}
