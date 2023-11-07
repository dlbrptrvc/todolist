export function slideDynamic() {
    menubtn.addEventListener('click',()=>{
        if (menubtn.dataset.open=="false") {
            menu.className = 'slidout'
            menubtn.className = 'closemenu'
            menubtn.dataset.open="true"
            menubtn.classList.remove('closed')
            menubtn.classList.add('open')
        } else {
            menu.className = 'slidin'
            menubtn.className = 'openmenu'
            menubtn.dataset.open="false"
            menubtn.classList.remove('open')
            menubtn.classList.add('closed')
        }
    })
}