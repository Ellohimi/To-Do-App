// const form = document.querySelector('form');
// const task = document.querySelector('#task');
// const addBtn = document.querySelector('#addBtn');
// const ul = document.querySelector('.list-group');
// const clear = document.querySelector('#clear');
// const msg = document.querySelector('.msg');

// form.addEventListener('submit',addTask);
// function addTask(e) {
//     if(taskInput.value ===''){
//         msg.classList.add('error')
//         msg.innerHTML= 'Fill the task field'
        
//         setTimeout(function()
//         { msg.classList.remove('error')
//         },2000);
//     } else{
//         msg.classList.add('success')
//         msg.innerHTML= 'Task added successfully'
        

//         setTimeout(function()
//         { msg.classList.remove('success')
//         },2000);

//         const lis = document.createElement('lis');

//         lis.className = 'list-group-item'

//         lis.appendChild(document.createTextNode(taskInput.value))

//         ul.appendChild(lis)

//         console.log(lis)
//     }
  
//     e.preventDefault()
// }   


//  background color
document.getElementById("dark").addEventListener("click", myFunction);

function myFunction() {
  // alert ("Hello World!");
  // console.log('hello')
  const body = document.querySelector ('body');
  body.style.background='black';
}

document.getElementById("lit").addEventListener("click", meFunction);

function meFunction() {
  // alert ("Hello World!");
  // console.log('hello')
  const body = document.querySelector ('body');
  body.style.background='pink';
}

//  message
document.getElementById("addBtn").addEventListener("click", addFunction);

function addFunction(e) {
  // console.log('hello')
  // const body = document.querySelector ('body');
  // body.style.background='pink';
  const task = document.querySelector('#task')
    
     if(task.value ===''){

      const msg = document.querySelector('#msg')

        msg.classList.add('error')
      msg.innerHTML= 'Fill the task field'
        
       setTimeout(function()
       { msg.classList.remove('error')
       msg.innerHTML= ''
        },2000);


    }else{
              msg.classList.add('success')
             msg.innerHTML= 'Task added successfully'
              
      
               setTimeout(function()
              { msg.classList.remove('success')
              msg.innerHTML= ''
              },2000);

           
        // adding to the dom
               // creating element
          const lis = document.createElement('li');
          //  add a class name
           lis.className = 'list-group-item d-flex justify-content-between'
              // append text
           lis.appendChild( document.createTextNode(task.value))

          //  links
          const links = document.createElement('a')
          links.className = 'list-group-links'
          links.innerHTML= '<i class="bi bi-trash"></i>'

          lis.appendChild(links)
          console.log(links)

              // append to parent element
           const ul = document.querySelector('ul');
           ul.appendChild(lis)

              task.value=''
          // console.log(lis)
}



 e.preventDefault();          
   
}


document.querySelector('#clear').addEventListener('click', clearTask);
 function clearTask(){
  ul=''
 }

