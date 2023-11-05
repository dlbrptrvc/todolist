export function slideDynamic() {
    menubtn.addEventListener('click',()=>{
        if (menubtn.dataset.open=="false") {
            menu.className = 'slidout'
            menubtn.className = 'closemenu'
            menubtn.dataset.open="true"
        } else {
            menu.className = 'slidin'
            menubtn.className = 'openmenu'
            menubtn.dataset.open="false"
        }
    })
}