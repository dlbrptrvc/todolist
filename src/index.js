import './style.css'
import { slideDynamic } from './slide'
import { menuDynamic } from './menu'
import { Task } from './class'

slideDynamic()
menuDynamic()

var taskList = []
var projectList = []

addbtn.addEventListener('click',()=>{
    flexwrapper.style.zIndex = '10'
    edittask.style.display = 'block'
    edittask.dataset.index = taskList.length
    // clear all input fields
    projectname.value = ''
    taskinfo.value = ''
    let dateTime = new Date().toISOString();
    dateTime = dateTime.split(".")[0];
    dateTime = dateTime.slice(0, -3);
    taskdate.value = dateTime;
})

savetask.addEventListener('click',()=>{
    taskList[edittask.dataset.index] = new Task(projectname.value,taskinfo.value,taskdate.value)
    if (!projectList.includes(projectname.value)&&projectname.value!=='') {
        projectList.push(projectname.value)
        addToMenu(projectname.value)
    }
    refreshToDoList()
    // updateLocalStorage()
    flexwrapper.style.zIndex = '-10'
    edittask.style.display = 'none'  
    })
deletetask.addEventListener('click',()=>{

    })
canceledit.addEventListener('click',()=>{
        flexwrapper.style.zIndex = '-10'
        edittask.style.display = 'none'       
    })


function addToMenu(project) {
    let newopt = document.createElement('div')
    newopt.className = 'menuitem'
    newopt.id = project
    newopt.textContent = project
    newopt.onclick = function() {
        let showing = taskList.filter((task)=>{
            if (task.project==project) {return task}
        })
        list.replaceChildren()
        showing.forEach((task)=>{
            list.append(makeTaskObject(task))
        })
    }
    menu.append(newopt)
}

function makeTaskObject(task) {
    let newlistitem = document.createElement('div')
    newlistitem.className = 'listitem'
    let newleft = document.createElement('div')
    newleft.className = 'left'
    newlistitem.append(newleft)
    let newcheckbox = document.createElement('div')
    newcheckbox.className= 'checkbox taskbtn'
    let newdescription = document.createElement('div')
    newdescription.className = 'description'
    if (task.checked) {
        newlistitem.classList.add('checked')
    }
    newcheckbox.addEventListener('click',()=>{
        if (Array.from(newlistitem.classList).includes('checked')) {
            newlistitem.classList.remove('checked')
            task.checked = false
        } else {
            newlistitem.classList.add('checked')
            task.checked = true
        }
    })
    newdescription.textContent = task.info
    newleft.append(newcheckbox,newdescription)
    let newright = document.createElement('div')
    newright.className = 'right'
    let newduedate = document.createElement('div')
    newduedate.className = 'datedue'
    newduedate.textContent = task.duedate.split('T')[0]
    let newedittask = document.createElement('div')
    newedittask.className = "edittaskbtn taskbtn"
    newedittask.addEventListener('click',()=>{
        addbtn.click()
        edittask.dataset.index = taskList.indexOf(task)
        projectname.value = task.project
        taskinfo.value = task.info
        taskdate.value = task.duedate
    })
    let newremovetask = document.createElement('div')
    newremovetask.className = "removetaskbtn taskbtn"
    newremovetask.addEventListener('click',()=>{
        let index = taskList.indexOf(task)
        taskList.splice(index,1)
        checkIfEmpty(task.project)
        refreshToDoList()
    })
    newright.append(newduedate,newedittask,newremovetask)

    newlistitem.append(newright)

    return newlistitem

}

function refreshToDoList() {
    document.getElementById(menu.dataset.selected).click()
}

function checkIfEmpty(project) {
    let tasks = taskList.filter((item)=>{return item.project==project})
    if (tasks.length==0) {
        document.getElementById(project).remove()
        menu.dataset.selected = 'alltasks'
    }

}

alltasks.addEventListener('click',()=>{
    list.replaceChildren()
    taskList.forEach((item)=>{
        list.append(makeTaskObject(item))
    })
})