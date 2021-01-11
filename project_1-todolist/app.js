
warningNote();
// SEARCH BAR SECTION
const searchBox = document.getElementById("searchBox");
const search = document.querySelector("#search");

searchBox.addEventListener("focus", () => {
  searchBox.setAttribute("placeholder", "Search Notes");
  searchBox.classList.add("open");
});
searchBox.addEventListener("blur", () => {
  searchBox.classList.remove("open");
  searchBox.removeAttribute("placeholder");
  searchBox.value = "";
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
      editTask(e);
      popupContainer.style.display = "none";
    }
  }
});

descInput.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && titleInput.value !== "" && descInput.value !== "") {
    addMyTask();
    editTask(e);
    popupContainer.style.display = "none";
  }
});

const popupContainer = document.querySelector(".popup-container");

const addTaskPopup = document.querySelector(".addTaskPopup");
const closeBtn = document.querySelector(".close-btn");
const popupContent = document.querySelector(".popupContent");

const addTask = document.getElementById("addTask");
// ADD TASK TRIGGER BTN TO OPEN UP THE ADD TASK WINDOW
addTask.addEventListener("click", () => {
  popupContainer.style.display = "inline";
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

// CLOSE THE POP UP IF USER CLICKED ANYWHERE OUT OF THE BOX
const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  overlay.parentElement.style.display = "none";
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
    editTask(e);
    

    
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
    const next = itemClicked.parentElement.parentElement;
    // const nextT = next.parentNode;
    next.setAttribute("contenteditable", "true");
    document.querySelector(".tsk-desc").setAttribute("contenteditable", "true");
    next.focus();
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
    let animDuration = 0.5;
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
    if (totalTime>=3 && totalTime < 6) {
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
	const note = document.querySelector('.note');
	isTaskEmpty();
		if (isTaskEmpty()) {
		 	note.style.display = "inline";
		}else {
			note.style.display = "none";
		}
}
