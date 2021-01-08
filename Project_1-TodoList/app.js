const searchBox = document.getElementById('searchBox');
const search = document.querySelector('#search');

searchBox.addEventListener('focus', ()=>{
	
	searchBox.setAttribute("placeholder", "Search");
	searchBox.classList.add('open');
	

});

searchBox.addEventListener('blur', ()=>{
	searchBox.classList.remove('open');
	searchBox.removeAttribute("placeholder");
});


const titleInput = document.querySelector('.title-input');
const descInput = document.querySelector('.desc-input');

titleInput.addEventListener('focus', ()=>{
	titleInput.classList.add('clicked');
});
titleInput.addEventListener('blur', ()=>{
	titleInput.classList.remove('clicked');
});
descInput.addEventListener('focus', ()=>{
	descInput.classList.add('clicked');
});
descInput.addEventListener('blur', ()=>{
	descInput.classList.remove('clicked');
});


const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');


const addTask = document.getElementById('addTask');
const addTaskPopup = document.querySelector('.addTaskPopup');

const popupContent = document.querySelector('.popupContent');

// ADD TASK TRIGGER BTN
addTask.addEventListener('click',()=> {

	popupContainer.style.display = "inline";
	addTaskPopup.classList.add('animate');

	addTaskPopup.addEventListener('animationend', ()=>{
		popupContent.classList.add('anim');
	});
	
});

// CLOSING THE POPUP
closeBtn.addEventListener('click',()=> {
	popupContainer.style.display = "none";

	// REMOVING CLASS ANIMATIONs
	popupContent.classList.remove('anim');
	addTaskPopup.classList.remove('animate');
});

// CLOSE THE POP UP IF USER CLICKED ANYWHERE OUT OF THE BOX
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', ()=>{
	overlay.parentElement.style.display = "none";
});


// FOR ADDING A TASK TO THE DOM
const taskList = document.querySelector('.taskList');
const addTaskBtn = document.querySelector('.addTask-btn');


addTaskBtn.addEventListener('click', addNewTask);
function addNewTask(e){
	addMyTask();
	editTask(e);


	// REMOVING CLASS ANIMATIONs
	popupContent.classList.remove('anim');
	addTaskPopup.classList.remove('animate');
	
}
titleInput.addEventListener('keyup', (e)=>{
	if (e.keyCode === 13 && titleInput.value !== '') {
		if (descInput.value === '') {
			descInput.focus();
		} else { addMyTask(); editTask(e);}
	} else {
		document.querySelector('.addTaskPopup').classList.add('alert');
	}
});

descInput.addEventListener('keyup', (e)=>{
	if (e.keyCode === 13 && titleInput.value !== '' && descInput.value !== '') {
		addMyTask();
		editTask(e);
	}else {
		document.querySelector('.addTaskPopup').classList.add('alert');
	}
});


function addMyTask() {

	event.preventDefault();

	// CREATE A LI PARENT FOR ALL
	const newTask = document.createElement('li');
	newTask.classList.add("tasks");
	taskList.appendChild(newTask);

	// CREATE A CONTAINER FOR ACTIONS
	const actionWrapper = document.createElement('div');
	actionWrapper.className = "action-wrapper";
	newTask.appendChild(actionWrapper);

	// CREATE A CHECKBOX INSIDE THE LI
	const checkBox = document.createElement('input');
	checkBox.setAttribute("type", "checkbox");
	checkBox.className = "checkbox";
	actionWrapper.appendChild(checkBox);

	// CREATE A MENU ACTION
	const editTaskBtn = document.createElement('button');
	editTaskBtn.className = "edit-task";

	// BUTTON ICON INSIDE
	const menuIcon = document.createElement('i');
	menuIcon.className = "fas fa-edit";
	editTaskBtn.appendChild(menuIcon);

	actionWrapper.appendChild(editTaskBtn);


	// CREATE DIC INSIDE THE LI
	const tskContainer = document.createElement('div');
	tskContainer.classList.add("taskContainer");	
	newTask.appendChild(tskContainer);

	// CREATE AN H3 ELEMENT INSIDE THE DIV
	const tskTitle = document.createElement('h3');
	tskTitle.classList.add("tsk-title");
	
	

	// CREATE AN P ELEMENT INSIDE THE DIV
	const tskDesc = document.createElement('p');
	tskDesc.classList.add("tsk-desc");


	// SETTING THE VALUES BASED ON THE INPUTS
	tskTitle.textContent = titleInput.value;
	tskDesc.textContent = descInput.value;

	// RESETTING THE VALUE OF THE INPUTS
	titleInput.value = "";
	descInput.value = "";

	tskContainer.appendChild(tskTitle);
	tskContainer.appendChild(tskDesc);

	newTask.classList.add("task-anim");
	popupContainer.style.display = "none";

	// EVERYTIME YOU ADD A TASK THE COOUNTER WILL CHECK HOW MANY TASK ARE THERE
	const tasksCounter = ()=> {
		const taskCounter = document.getElementsByClassName('tasks').length;
		const allCounter = document.querySelector('.allCount');
		allCounter.textContent = `${taskCounter} task`;
	}
	tasksCounter();
}

const selection = document.getElementById('selection');
selection.addEventListener('click', ()=>{
	const checkbox = document.querySelectorAll('.checkbox');

	checkbox.forEach( function(checkbox) {
		checkbox.classList.toggle('on');
	});
});




taskList.addEventListener('click', editTask);

function editTask(e){
	const editTaskBtn = document.querySelector('.edit-task');
	const actionWrapper = document.querySelector('.action-wrapper');
	const itemClicked = e.target;
		if (itemClicked.classList[0] === 'edit-task') {
			const next = itemClicked.parentElement.parentElement;
			// const nextT = next.parentNode;
			next.setAttribute("contenteditable", "true");
			document.querySelector('.tsk-desc').setAttribute("contenteditable", "true");
			next.focus();
		}
	
}




