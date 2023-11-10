export class Task {
    constructor(project,text,date,checked) {
        this.project = project
        this.info = text
        this.duedate = date
        this.checked = checked||false
    }
}