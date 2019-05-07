let myForm = document.getElementById('myForm');
let myInput = document.getElementById('myInput');
let myList = document.getElementById('myList');

myForm.addEventListener("submit", (e) => {
	
	e.preventDefault();
	
	createItem(myInput.value)

})

function createItem(x) {

	let ourHTML = `<li class="animated fadeInLeft">${x} <button class="delete-btn" onclick="deleteItem(this)"><i class="fa fa-trash"></i></button></li>`;
	
	myList.insertAdjacentHTML("beforeend", ourHTML);
	myInput.value = "";
	myInput.focus();

}

function deleteItem(elementToDelete) {

	elementToDelete.parentElement.remove();
}