var todoStorage=[];



function todoapp()
{
var parent=document.getElementById('parent');// Creating a Parent Container

var leftPane=document.createElement('div');// Creating left Pane Area
parent.appendChild(leftPane);
leftPane.setAttribute('id', 'leftPane');
var taskDiv=document.createElement('div');
leftPane.appendChild(taskDiv);
taskDiv.setAttribute('id', 'taskDiv');
var taskHeading=document.createElement('h1');
taskDiv.appendChild(taskHeading);
taskHeading.setAttribute('id', 'taskHeading');
taskHeading.innerHTML='TASK LIST';
var taskSubHeading=document.createElement('h4');
taskSubHeading.setAttribute('id','taskSubHeading');
taskDiv.appendChild(taskSubHeading);
taskSubHeading.innerHTML='Add tasks to your list by typing to the right and pressing enter. <br> You may then view pending task below.'





var rightPane=document.createElement('div'); // Creating Right Pane Area
parent.appendChild(rightPane);
rightPane.setAttribute('id', 'rightPane');
var textBox=document.createElement('textarea');
rightPane.appendChild(textBox);
textBox.setAttribute('id', 'textBox');
textBox.placeholder='Type Here.....!';
textBox.addEventListener('keyup', keyStrokeHandler);// Adding Event Listener on releasing key in textbox



}





function keyStrokeHandler(event)// Defining the function KeyStrokeHandler
{
    var leftPane=document.getElementById('leftPane');
    var textBox=document.getElementById('textBox');
    var storageContent=textBox.value;


    if(event.code==='Enter' && storageContent!=='')
    {
        event.preventDefault();
        var contentDiv=document.createElement('div');
        leftPane.appendChild(contentDiv);
        contentDiv.classList.add('contentDiv');
        
        
        var taskContent=document.createElement('p');// Creating Paragraph Element to list the task input
        taskContent.setAttribute('class', 'taskContent');
        var textBox=document.getElementById('textBox');
        taskContent.innerHTML=textBox.value;
        todoStorage.push(storageContent);
        localStorage.setItem('todoStorage', JSON.stringify(todoStorage));
        contentDiv.appendChild(taskContent);
        textBox.value='';                            // for clearing  textbox value after entering the text
         
        var checkBoxDiv=document.createElement('div');
        contentDiv.appendChild(checkBoxDiv);
        checkBoxDiv.setAttribute('class', 'checkBoxDiv');
        var taskCompleteBtn=document.createElement('input');// Creating task completed Button
        taskCompleteBtn.setAttribute('type', 'checkbox');
        checkBoxDiv.appendChild(taskCompleteBtn);
        taskCompleteBtn.setAttribute('class', 'taskCompleteBtn');
        taskCompleteBtn.addEventListener('click', function(event){
        var taskComplete=event.target;
        if(taskComplete.classList[0]==='taskCompleteBtn')
        {
            //taskContent.style.textDecoration="line-through"
           // taskContent.classList.toggle("style:textDecoration: 'line-through' ")
            if(taskContent.style.textDecoration==="line-through")
                taskContent.style.textDecoration="none";
            else
                 taskContent.style.textDecoration="line-through";
                
          
        }
       

        });
        var editDiv=document.createElement('div');
        contentDiv.appendChild(editDiv);
        editDiv.setAttribute('class','editDiv');
        var editBtn=document.createElement('p');
        editDiv.appendChild(editBtn);
        editBtn.innerHTML='<i class="fa-solid fa-pencil"></i>';
        editBtn.classList.add('editBtn');
        editBtn.addEventListener('click', function(){
       taskContent.innerHTML=prompt("Enter the content to update the task");
        });



        var deleteDiv=document.createElement('div');
        contentDiv.appendChild(deleteDiv);
        deleteDiv.setAttribute('class', 'deleteDiv');
        var taskDeleteBtn=document.createElement('p'); //Creating Delete Button
       taskDeleteBtn.innerHTML="<i class='fa-solid fa-xmark'></i>";
        deleteDiv.appendChild(taskDeleteBtn);
        taskDeleteBtn.classList.add('taskDeleteBtn');
        taskDeleteBtn.addEventListener('click',function(event){
          
            var deletetask=event.target;
           if(deletetask.classList[0]==='fa-solid')
           {
               console.log(classList[0]);
            contentDiv.remove(taskDeleteBtn);
            //localStorage.removeItem("todoStorage");
            }
        

        } );//Adding EventListener to Delete task button
        




    }

}



todoapp();

var oldTodoStorage=localStorage.getItem('todoStorage');
if(oldTodoStorage!==null)
{
    todoStorage=JSON.parse(oldTodoStorage);
}

todoStorage.forEach(function(value){

    
        var contentDiv=document.createElement('div');
        contentDiv.setAttribute('class','contentDiv');
        var leftPane=document.getElementById('leftPane');
        leftPane.appendChild(contentDiv);
        
    
        var taskContent=document.createElement('p');// Creating Paragraph Element to list the task input
        taskContent.setAttribute('class', 'taskContent');
        taskContent.innerHTML=value;

        contentDiv.appendChild(taskContent);
        textBox.value='';                           // for clearing  textbox value after entering the text

    
        var checkBoxDiv=document.createElement('div');
        contentDiv.appendChild(checkBoxDiv);
        checkBoxDiv.setAttribute('class', 'checkBoxDiv');
        var taskCompleteBtn=document.createElement('input');// Creating task complete Button
        taskCompleteBtn.setAttribute('type', 'checkbox');
        checkBoxDiv.appendChild(taskCompleteBtn);
        taskCompleteBtn.setAttribute('class', 'taskCompleteBtn');
        taskCompleteBtn.addEventListener('click', function(event){
        var taskComplete=event.target;
        if(taskComplete.classList[0]==='taskCompleteBtn')
        {
           // taskContent.style.textDecoration="line-through"
            if(taskContent.style.textDecoration==="line-through")
                taskContent.style.textDecoration="none";
            else
                 taskContent.style.textDecoration="line-through";
        }

        });
        
        var editDiv=document.createElement('div');
        contentDiv.appendChild(editDiv);
        editDiv.setAttribute('class','editDiv');
        var editBtn=document.createElement('p');
        editDiv.appendChild(editBtn);
        editBtn.innerHTML='<i class="fa-solid fa-pencil"></i>';
        editBtn.classList.add('editBtn');
        editBtn.addEventListener('click', function(){
            taskContent.innerHTML=prompt("Enter the content to update the task");
             });
       

        var deleteDiv=document.createElement('div');
        contentDiv.appendChild(deleteDiv);
        deleteDiv.setAttribute('class', 'deleteDiv');
        var taskDeleteBtn=document.createElement('p'); //Creating Delete Button
    
        taskDeleteBtn.innerHTML="<i class='fa-solid fa-xmark'></i>";
        deleteDiv.appendChild(taskDeleteBtn);
        taskDeleteBtn.classList.add('taskDeleteBtn');
        taskDeleteBtn.addEventListener('click',function(event){
          
            var deletetask=event.target;
           console.log(deletetask.classList[0]);
          var item=deletetask.value
          console.log(item);
            if(deletetask.classList[0]==='fa-solid')
           {
            contentDiv.remove(taskDeleteBtn);
           // localStorage.removeItem("todoStorage");
            }
        

        } );                                              //Adding EventListener to Delete task button
        

    

});













