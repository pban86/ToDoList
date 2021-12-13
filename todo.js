var taskInput = document.getElementById("taskInput");
var taskHolder=document.getElementById("task-holder");



function submitTask(){

    console.log("Button clicked");

    //get input value
    var val = taskInput.value;
    console.log(val);

    //check input value
    if (val!==""){
        //create a div .task element
        var taskDiv =  document.createElement("div");
    
        taskDiv.className="task";
        var delBtn = document.createElement("button");
        delBtn.className="deleteButton"
        delBtn.textContent="X";
       

        // taskDiv.addEventListener('click',delTask);
        delBtn.addEventListener('click',delTask);
        
        //create p tag
        var pEle = document.createElement("p");
   
        pEle.innerHTML = val;
       
        taskDiv.append(pEle);
        taskDiv.append(delBtn);
       
        taskHolder.append(taskDiv);
  
    } else{
        alert("Please fill in a task");
    }
}

//delTask function reference

function delTask(){

    var confirmYN = confirm("Are you sure?");

    if (confirmYN == true){
        //console.log(this.parentNode);
        // this.style.display="none";
        // this.parentNode.remove();
        this.parentNode.remove();
    }
    else{
       // exit;        

    }









}