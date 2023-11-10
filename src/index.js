import './style.css'
import { slideDynamic } from './slide'
import { menuDynamic } from './menu'
import { Task } from './class'
import moment from 'moment'


slideDynamic()
menuDynamic()

var taskList = []
var projectList = []

if (localStorage.getItem('task0%checked')) {
    loadLocalStorage()
}

addbtn.addEventListener('click',()=>{
    flexwrapper.style.zIndex = '10'
    edittask.style.display = 'block'
    edittask.dataset.index = taskList.length
    edittask.dataset.project = ''
    // clear all input fields
    projectname.value = ''
    taskinfo.value = ''
    let dateTime = new Date()
    dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset())
    taskdate.value = dateTime.toISOString().slice(0, -8)
    taskdate.min = dateTime.toISOString().slice(0, -8)
})

savetask.addEventListener('click',()=>{
    taskList[edittask.dataset.index] = new Task(projectname.value,taskinfo.value,taskdate.value)
    if (!projectList.includes(projectname.value)&&projectname.value!=='') {
        projectList.push(projectname.value)
        addToMenu(projectname.value)
    }
    if (projectname.value!==edittask.dataset.project&&edittask.dataset.project!=='') {
        checkIfEmpty(edittask.dataset.project)
    }
    refreshToDoList()
    updateLocalStorage()
    flexwrapper.style.zIndex = '-10'
    edittask.style.display = 'none'  
    })
canceledit.addEventListener('click',()=>{
        flexwrapper.style.zIndex = '-10'
        edittask.style.display = 'none'       
    })


function addToMenu(project) {
    let newopt = document.createElement('div')
    newopt.className = 'menuitem'
    newopt.id = 'project%'+project
    newopt.textContent = project
    newopt.onclick = function() {
        let showing = taskList.filter((task)=>{
            if (task.project==project) {return task}
        })
        list.replaceChildren()
        showing.forEach((task)=>{
            list.append(makeTaskObject(task))
        })
        if (menubtn.dataset.open=='true') {menubtn.click()}
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
        updateLocalStorage()
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
        edittask.dataset.project = task.project
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
        if (task.project!=='') {checkIfEmpty(task.project)}
        refreshToDoList()
        updateLocalStorage()
    })
    newright.append(newduedate,newedittask,newremovetask)

    newlistitem.append(newright)

    return newlistitem

}

function refreshToDoList() {
    sortByDate()
    document.getElementById(menu.dataset.selected).click()
}

function checkIfEmpty(project) {
    let tasks = taskList.filter((item)=>{return item.project==project})
    if (tasks.length==0) {
        document.getElementById("project%"+project).remove()
        projectList.splice(projectList.indexOf(project),1)
        menu.dataset.selected = 'alltasks'
        alltasks.classList.add('selectedmenuitem')
    }
}

// add click functionality to All Tasks Today and This Week
alltasks.addEventListener('click',()=>{
    list.replaceChildren()
    taskList.forEach((item)=>{
        list.append(makeTaskObject(item))
    })
    if (menubtn.dataset.open=='true') {menubtn.click()}
})

today.addEventListener('click',()=>{
    list.replaceChildren()
    let dateTime = new Date()
    dateTime.setMinutes(dateTime.getMinutes() - dateTime.getTimezoneOffset());
    dateTime = dateTime.toISOString().slice(0, -14)
    taskList.forEach((item)=>{
        if (dateTime==item.duedate.slice(0,-6)) {
            list.append(makeTaskObject(item))
        }
    })
    if (menubtn.dataset.open=='true') {menubtn.click()}
})

thisweek.addEventListener('click',()=>{
    list.replaceChildren()
    let now = moment()
    taskList.forEach((item)=>{
        let input = moment(item.duedate)
        if (input.isoWeek()===now.isoWeek()) {
            list.append(makeTaskObject(item))
        }
    })
    if (menubtn.dataset.open=='true') {menubtn.click()}
})

//storeinfo
function updateLocalStorage() {
    localStorage.clear()
    projectList.forEach((item,i)=>{
        localStorage.setItem('project'+i,item)
    })
    taskList.forEach((item,i)=>{
        localStorage.setItem('task'+i+'%project',item.project)
        localStorage.setItem('task'+i+'%info',item.info)
        localStorage.setItem('task'+i+'%duedate',item.duedate)
        localStorage.setItem('task'+i+'%checked',item.checked)
    })
}

//loadinfo
function loadLocalStorage() {
    let i=0
    while (localStorage.getItem('project'+i)) {
        projectList.push(localStorage.getItem('project'+i))
        addToMenu(localStorage.getItem('project'+i))
        i++
    }
    i=0
    list.replaceChildren()
    while (localStorage.getItem('task'+i+'%checked')) {
        let task = new Task(localStorage.getItem('task'+i+'%project'),localStorage.getItem('task'+i+'%info'),localStorage.getItem('task'+i+'%duedate'),localStorage.getItem('task'+i+'%checked') === 'true')
        taskList.push(task)
        list.append(makeTaskObject(task))
        i++
    }
    
}

// change refreshDoToList to sort by duedate
function sortByDate() {
    taskList.sort(function(a,b){
        if (a.duedate<b.duedate) {return -1}
        if (a.duedate>b.duedate) {return 1}
        if (a.duedate==b.duedate) {return 0}
    })
}

// automaticaly darken expired tasks
// change the way duedate is displayed
// add minimal input for date