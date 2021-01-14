// TO BE MODIFIED LATER
var header = document.querySelector('.header');
var button = document.querySelector('.trigger');


var count = 0;
var height = window.screen.availHeight;
button.addEventListener('click', event =>{
    button.classList.toggle('is-active');
    
});





// THIS NOTE WILL SHOW UP WHENEVER THE TASK LIST IS EMPTY
warningNote();

// GETTING THE CURRENT TIME
function getTime(){
	var myTime = setTimeout('displayTime()', 1000);
}

function displayTime(){
	var currentTime = new Date();
	var amORpm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
	var time = `${currentTime.getHours() % 12} : ${currentTime.getMinutes()} : ${currentTime.getSeconds()} ${amORpm}`;
	document.querySelector('.title-bar').innerHTML = time;
	getTime();
}


// REFRESHER
const refreshBtn = document.querySelector('#refresh-btn');
refreshBtn.addEventListener('click', refresh);

// SEARCH BAR SECTION
const searchBox = document.getElementById("searchBox");
const search = document.querySelector("#search");

searchBox.addEventListener("focus", () => {
  searchBox.setAttribute("placeholder", "Search Notes");
  searchBox.classList.add("open");
});
searchBox.addEventListener("blur", () => {
  if (searchBox.value === '') {
     searchBox.classList.remove("open");
     searchBox.removeAttribute("placeholder");
  }
 
});



// ADD TASK INPUT SECTION
const titleInput = document.querySelector(".title-input");
const descInput = document.querySelector(".desc-input");

titleInput.addEventListener("focus", () => {
  titleInput.classList.add("clicked");
});
titleInput.addEventListener("blur", () => {
  titleInput.classList.remove("clicked");
});
descInput.addEventListener("focus", () => {
  descInput.classList.add("clicked");
});
descInput.addEventListener("blur", () => {
  descInput.classList.remove("clicked");
});

titleInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && titleInput.value !== "") {
    if (descInput.value === "") {
      descInput.focus();
    } else {
      addMyTask();
      // editTask(e);
      popupContainer.style.display = "none";
    }
  }
});

descInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && titleInput.value !== "" && descInput.value !== "") {
    addMyTask();
    // editTask(e);
    popupContainer.style.display = "none";
  }
});

const popupContainer = document.querySelector(".popup-container");

const addTaskPopup = document.querySelector(".addTaskPopup");
const closeBtn = document.querySelector(".close-btn");
const popupContent = document.querySelector(".popupContent");

const addTask = document.getElementById("addTask");
const addTask2 = document.getElementById("addTask2");
// ADD TASK TRIGGER BTN TO OPEN UP THE ADD TASK WINDOW
addTask.addEventListener("click", () => {
  popupContainer.style.display = "inline";

  // work here later
  // if (window.screen.availWidth <= 480) {
  //   addTaskPopup.classList.remove("animate");
  //   addTaskPopup.classList.add("animateup");
  // }else{
  //   addTaskPopup.classList.remove("animateup");
  //    addTaskPopup.classList.add("animate");
  // }
  addTaskPopup.classList.add("animate");
 

  addTaskPopup.addEventListener("animationend", () => {
    popupContent.classList.add("anim");
  });
});

addTask2.addEventListener("click", () => {
  popupContainer.style.display = "inline";
  // if (window.screen.availWidth <= 480) {
  //    addTaskPopup.classList.remove("animate");
  //   addTaskPopup.classList.add("animateup");
  // }else{
  //    addTaskPopup.classList.remove("animateup");
  //    addTaskPopup.classList.add("animate");
  // }
   addTaskPopup.classList.add("animate");
  addTaskPopup.addEventListener("animationend", () => {
    popupContent.classList.add("anim");
  });
});

// CLOSING THE POPUP
closeBtn.addEventListener("click", () => {
  popupContainer.style.display = "none";

  // REMOVING CLASS ANIMATIONs
  popupContent.classList.remove("anim");
  addTaskPopup.classList.remove("animate");

  titleInput.value = "";
  descInput.value = "";
  titleInput.removeAttribute("placeholder");
  descInput.removeAttribute("placeholder");
});	

// CLOSE THE POPUP IF USER CLICKED ANYWHERE OUT OF THE BOX
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.parentElement.style.display = "none";

  titleInput.value = "";
  descInput.value = "";
  titleInput.removeAttribute("placeholder");
  descInput.removeAttribute("placeholder");
});

// FOR ADDING A TASK TO THE DOM
const taskList = document.querySelector(".taskList");
const addTaskBtn = document.querySelector(".addTask-btn");



addTaskBtn.addEventListener("click", addNewTask);
function addNewTask(e) {
  if (titleInput.value === "" && descInput.value === "") {
    if (true) {
      titleInput.focus();
      addTaskPopup.classList.add("alert");
      titleInput.setAttribute(
        "placeholder",
        "Please don't fucking leave me empty"
      );
      descInput.setAttribute(
        "placeholder",
        "Please don't fucking leave me empty"
      );

      titleInput.addEventListener("keyup", () => {
        addTaskPopup.classList.remove("alert");
        titleInput.removeAttribute("placeholder");
        descInput.removeAttribute("placeholder");
      });
    }
  } else {
    addMyTask();
    // editTask(e);
    
    // REMOVING CLASS ANIMATIONs
    popupContent.classList.remove("anim");
    addTaskPopup.classList.remove("animate");
    popupContainer.style.display = "none";
    addTaskPopup.classList.remove("alert");
  }
}
//

// EVERYTIME YOU ADD OR DELETE A TASK THE COOUNTER WILL CHECK HOW MANY TASK ARE THERE
const tasksCounter = () => {
  const taskCounter = document.getElementsByClassName("tasks").length;
  const allCounter = document.querySelector(".allCount");
  if (taskCounter <= 1) {
    allCounter.textContent = `${taskCounter} task`;
  } else {
    allCounter.textContent = `${taskCounter} tasks`;
  }


  warningNote();


};

function addMyTask() {
  event.preventDefault();

  // CREATE A LI PARENT FOR ALL
  const newTask = document.createElement("li");
  newTask.className = "tasks";
  // taskList.appendChild(newTask);
  taskList.insertBefore(newTask, taskList.childNodes[0]);

  // CREATE A CONTAINER FOR ACTIONS
  const actionWrapper = document.createElement("div");
  actionWrapper.className = "action-wrapper";
  newTask.appendChild(actionWrapper);

  // CREATE A CHECKBOX INSIDE THE LI
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "checkbox";
  actionWrapper.appendChild(checkBox);

  // CREATE A MENU ACTION
  const editTaskBtn = document.createElement("button");
  editTaskBtn.className = "edit-task";

  // BUTTON ICON INSIDE
  const menuIcon = document.createElement("i");
  menuIcon.className = "fas fa-edit";
  editTaskBtn.appendChild(menuIcon);

  actionWrapper.appendChild(editTaskBtn);

  // CREATE DIC INSIDE THE LI
  const tskContainer = document.createElement("div");
  tskContainer.classList.add("taskContainer");
  newTask.appendChild(tskContainer);

  // CREATE AN H3 ELEMENT INSIDE THE DIV
  const tskTitle = document.createElement("h3");
  tskTitle.classList.add("tsk-title");

  // CREATE AN P ELEMENT INSIDE THE DIV
  const tskDesc = document.createElement("p");
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

  tasksCounter();

}

taskList.addEventListener("click", editTask);

function editTask(e) {
  const editTaskBtn = document.querySelector(".edit-task");
  const actionWrapper = document.querySelector(".action-wrapper");
  const itemClicked = e.target;
  if (itemClicked.classList[0] === "edit-task") {


    // const next = itemClicked.parentElement.parentElement;
    // next.setAttribute("contenteditable", "true");
    // document.querySelector(".tsk-desc").setAttribute("contenteditable", "true");
    // next.focus();


  }
}

const selection = document.getElementById("selection");
selection.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".tasks");
  if (tasks.length !== 0) {
    const trashCan = document.querySelector(".trash");
    if (true) {
      // trashCan.style.visibility = "visible";
      // trashCan.style.animation = ".3s pop";
    }
    // trashCan.classList.add('dlt');

    // hideCheckList();
  }
});
function hideCheckList() {
  const checkbox = document.querySelectorAll(".checkbox");
  checkbox.forEach(function (checkbox) {
    checkbox.classList.toggle("on");
  });
}

const trashCan = document.querySelector(".trash");
trashCan.addEventListener("click", () => {
  deleteTask();

  tasksCounter();

});



function deleteTask() {
  const tasks = document.querySelectorAll(".tasks");
  let checkedTask = new Array();
  let totalTime = 0;

  // LOOP THROUGH ALL THE TASK AND PICK THE CHECKED TASK
  tasks.forEach((task) => {
    const checked = task.querySelector(".checkbox").checked;

    let animDelay = 0;
    let animDuration = 0.4;
    // PUT THE CHECKED TASK INSIDE AN ARRAY
    if (checked) {
      checkedTask.push(task);
      task.classList.remove("task-anim");
      // ANIMATE THE CHECKED TASK INSIDE THE ARRAY
      checkedTask.forEach((tasks) => {
        tasks.style.animation = `dltAnim ${animDuration}s linear ${animDelay}s`;
        tasks.addEventListener("animationend", () => {
          tasks.style.visibility = "hidden";
        });
        animDelay += 0.2;
      });
    }
    
    totalTime = (animDuration * checkedTask.length) - animDelay;

    // FIXING THE ANIMATION  DURATION IF IT TAKES TOO LONG
    if (totalTime > 2 && totalTime < 3) {
    	totalTime -= .5;
    }else if (totalTime>=3 && totalTime < 6) {
    	totalTime /= 2;
    }else if (totalTime>=6) {
    	totalTime /= 2;
    }

    // DO I HAVE TO PUT A DELETING ANIMATION HERE?
    if (totalTime>=2) {
    	// Create a loader for deletion if the time is over 2seconds
    };

  });
  setTimeout(() => {
    // REMOVED THE CHECK TASK STORED IN THE ARRAY
    checkedTask.forEach((tobeRemoved) => {
      tobeRemoved.remove();
      tasksCounter();
    });
  }, totalTime * 1000);

}

// CHECKING IF THE TASK IS EMPTY 
function isTaskEmpty(){
	const tasks = document.querySelectorAll('.tasks');
		if (tasks.length === 0) {
			return true;
		}else{
			return false;
		}
}
function warningNote(){
	const note = document.querySelector('.nonotesContainer');
	isTaskEmpty();
		if (isTaskEmpty()) {
		 	note.style.display = "inline";
		}else {
			note.style.display = "none";
		}
}

function refresh(){	
	const tasks = document.querySelectorAll(".tasks");
	
	let animeDelay = 0;

	if (tasks.length !== 0) {

		tasks.forEach((task)=>{
			animeDelay += .1;
			task.style.animation = `refreshAnim .3s ease-in-out ${animeDelay}s reverse`;
			task.classList.remove('task-anim');
		});

		let reuseTimer = .3 * tasks.length; 
		if (reuseTimer>=3 && reuseTimer<=4) {
			reuseTimer -= 1;
		}else if (reuseTimer>4 ) {
			reuseTimer /= 1.5;
		}else if (reuseTimer>5) {
			reuseTimer /= 2;
		}
		 setTimeout(() => {
		     tasks.forEach((task)=>{
					task.style.animation = "none";
				});
		  }, reuseTimer * 1000);

	}
}

// DARKMODE MODIFICATION HERE!
const darkmodeBtn = document.querySelector('#darkmode');
const darkmodeFX = document.querySelector('.darkmode');
const darkmodeBody = document.querySelector('.darkmodebody');

darkmodeBtn.addEventListener('change', ()=>{
  if (darkmodeBtn.checked) {
    darkmodeFX.style.clipPath = "circle(130% at 50% 16%)";
    darkmodeBody.style.clipPath = "circle(140% at 110% 15%)";
    document.querySelector('.profile-container').style.color="white";
    document.querySelector('#profile-pic-mobile').style.borderColor="#333";

    document.querySelector('.title-bar').style.color="white";
    document.querySelector('.app-title').style.color="white";
    document.querySelector('#addTask2').style.backgroundColor="#444";

  }else{
     darkmodeFX.style.clipPath = "circle(1% at 50% 16%)";
     darkmodeBody.style.clipPath = "circle(2% at 110% 15%)";
     document.querySelector('.profile-container').style.color="#222";
     document.querySelector('#profile-pic-mobile').style.borderColor="white";
      document.querySelector('.title-bar').style.color="#222";
      document.querySelector('.app-title').style.color="#222";
      document.querySelector('#addTask2').style.backgroundColor="#eee";
      
  }
});
