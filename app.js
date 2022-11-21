let input= document.querySelector('.entered-list'); 
let addBtn= document.querySelector('.add-list'); 
let task= document.querySelector('.task'); 

//add button disabled

input.addEventListener('keyup', ()=>{
    if(input.value.trim() !=0 ){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active') 
    }
}
)

//add new list to list

addBtn.addEventListener('click', ()=>{
    if(input.value.trim() !=0){
        let newItem=document.createElement('div');
        newItem.classList.add('item')
        newItem.innerHTML =`
        <p>${input.value}</p>
          <div class="item-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"
                ></path>
              </svg>
              
              
            </div>
            <div class="item-btn">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                preserveAspectRatio="none"
                class="i8-icon-path"
              >
                <path
                  d="M6.41408 5.00002C6.0236 4.60953 5.3905 4.60953 5.00002 5.00002C4.60953 5.3905 4.60953 6.0236 5.00002 6.41408L10.586 12L5.00002 17.586C4.60953 17.9764 4.60953 18.6095 5.00002 19C5.3905 19.3905 6.0236 19.3905 6.41408 19L12 13.4141L17.586 19C17.9764 19.3905 18.6095 19.3905 19 19C19.3905 18.6095 19.3905 17.9764 19 17.586L13.4141 12L19 6.41408C19.3905 6.0236 19.3905 5.3905 19 5.00002C18.6095 4.60953 17.9764 4.60953 17.586 5.00002L12 10.586L6.41408 5.00002Z"
                  style="height: 100%"
                ></path>
              </svg> 
                
        </div>
        `
        task.appendChild(newItem);
        input.value ='';
    }
    else{
        alert('Please enter a task')
    }
})

//delete item from list

task.addEventListener('click',(e)=>{
    if(e.target.classList.contains('svg.i8-icon-path')){
        e.target.parentElement.parentElement.remove();
    }
})
