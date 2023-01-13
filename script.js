const add = document.querySelector(".add")
const container = document.querySelector(".container")
const form = document.querySelector(".cont")
const save = document.querySelector(".save")
const cancel = document.querySelector("#cancel")
const todoItem = document.querySelector(".todo-item")
const deleteItem = document.querySelector(".delete-item")

let title, description, priority
let toDoItem = {
    title: "",
    description: "",
    priority: "",
    toDoStatus: "",
    dateCreated: ""
}
let toDoItems = []

add.addEventListener("click", () => {
    container.style.display = "none"
    form.style.display = "flex"
})
cancel.addEventListener("click", () => {
    form.style.display = "none"
    container.style.removeProperty('display')
})
document.addEventListener('click', (e) => {
    const parentDiv = e.target.closest("article")
    if (e.target.className == "delete-item") {
        parentDiv.remove();
    }
})
const myFunction = (value) => {
    title = value
}
const myFunction2 = (value) => {
    description = value

}
const onRadioClicked = (value) => {
    priority = value
}
save.addEventListener("click", () => {
    toDoItems.push({
        title: title,
        description: description,
        priority: priority,
        toDoStatus: "pending",
        dateCreated: new Date()
    })
    updateToDoItemsList()
})

const updateToDoItemsList = () => {
    deleteToDoItemsList()
    toDoItems.filter(item => item.toDoStatus !== "deleted").forEach((toDoItem, index) => {
        const newArticle = document.createElement("article")
        if (toDoItem.priority === "high") {
            newArticle.className = "todo-item-high"
        } else if (toDoItem.priority === "medium") {
            newArticle.className = "todo-item-medium"
        } else {
            newArticle.className = "todo-item-low"
        }

        let texStatusClass = ""
        const isChecked = toDoItem.toDoStatus === "checked"
        const isDeleted = toDoItem.toDoStatus === "deleted"
        let checkboxStatus = ""
        if (isChecked) {
            checkboxStatus = `checked="${isChecked}"`
            texStatusClass = "strikeThrough"
        } else if (isDeleted) {
            document.createElement("article").id = "delete"
        }


        newArticle.innerHTML = `
                        <button data-id="delete" class="delete-item"><i class="fa fa-trash-o"></i></button>
                        <input type="checkbox" ${checkboxStatus} name="todo" id="${index}" onchange="checkboxChange(this)" class="check" />
                        <div class="overline">${toDoItem.dateCreated}</div>
                        <div class="title">
                        <h3 class="${texStatusClass}">${toDoItem.title}</h3>
                        <h6 class="${texStatusClass}">${toDoItem.description}</h6>
                        </div>
                    `
        document.querySelector(".todo-list").prepend(newArticle)
    })
}

const deleteToDoItemsList = () => {
    let e = document.querySelector(".todo-list")
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

const checkboxChange = (e) => {
    if (toDoItems[e.id].toDoStatus === "checked") {
        toDoItems[e.id].toDoStatus = "pending"
    } else {
        toDoItems[e.id].toDoStatus = "checked"
    }

    updateToDoItemsList()
}






