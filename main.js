let ul = document.querySelector("ul");
let form = document.querySelector("form");
let input = document.querySelector("input");




const saveTodo =(e) => {

 e.preventDefault();

 let li = document.createElement("li");
 li.innerText = input.value;

 li.className = "list-group-item rounded-0 text-light"


 let delBtn = document.createElement("detBtn");

 delBtn.innerText = "delete";
 delBtn.className = "btn btn-danger rounded-0 float-end btn-sm"


 li.appendChild(delBtn);
 ul.appendChild(li);

 form.reset();


};




form.addEventListener("submit" , saveTodo)

const deleteTodo = (e) => {
    if(e.target.className.includes("btn-danger")){
    ul.removeChild(e.target.parentElement);}      
}


ul.addEventListener("click", deleteTodo);




