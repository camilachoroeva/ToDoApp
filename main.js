let inputText=document.getElementById("input");
let addButton=document.querySelector(".button");
let listBlock=document.getElementById("listBlock");

let createNewTaskElement = function(inputText){
	let listItem=document.createElement("li");
	let checkBox=document.createElement("input");
	let text=document.createElement("p");
	let editButton=document.createElement("button");
	let removeButton=document.createElement("button");

	text.innerText=inputText;
	listItem.className="item";
	checkBox.type="checkbox";
	text.className="item-li phar";

	editButton.innerHTML="<i class=\"fas fa-edit\"></i>";
	editButton.className="edit";
	removeButton.innerHTML="<i class=\"fas fa-trash-alt\"></i>";
	removeButton.className="remove";


	listItem.appendChild(checkBox);
	listItem.appendChild(text);
	listItem.appendChild(editButton);
	listItem.appendChild(removeButton);
	return listItem;
}

let addTask = function(){
	if(inputText.value != ""){
		let listItem=createNewTaskElement(inputText.value);
		listBlock.appendChild(listItem);
		bindTaskEvents(listItem);
		inputText.value="";
	}
}


let editTask = function(){
	var listItem = this.parentNode;
	let listText = listItem.querySelector(".phar");
	let finishButton = listItem.querySelector("input[type=checkbox]");
	if(listText.tagName === "P"){
		let innerText = listText.innerText;
		let newT = document.createElement('input');
		newT.setAttribute("type", "text" )
		newT.setAttribute("class", "writeChanges phar");
		newT.setAttribute("value", innerText);
		finishButton.style.display = "none";
		listText.parentNode.replaceChild(newT, listText);
	}else{
		let newT = document.createElement('p');
		newT.setAttribute("class", "item-li phar");
		newT.innerHTML = listText.value;
		listText.parentNode.replaceChild(newT, listText);
		finishButton.style.display = "block";
	}
}

let finishTask = function(){
	let listItem=this.parentNode;
	let listText = listItem.querySelector(".item-li");
	if(listText.classList.contains("finished")){
		listText.classList.remove("finished");
	}else{
		listText.classList.add("finished");
	}
}

let removeTask=function(){
	let listItem=this.parentNode;
	let ul=listItem.parentNode;
	ul.removeChild(listItem);
}

addButton.onclick=addTask;
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		addTask();
	}
})

let bindTaskEvents=function(listItem){
	let editButton=listItem.querySelector(".edit");
	let removeButton=listItem.querySelector(".remove");
	let finishButton = listItem.querySelector("input[type=checkbox]");
	editButton.onclick=editTask;
	removeButton.onclick=removeTask;
	finishButton.onclick = finishTask;
}

for (let i=0; i<listBlock.children.length;i++){
	bindTaskEvents(listBlock.children[i]);
}


