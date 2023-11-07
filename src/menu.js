export function menuDynamic() {
    menu.addEventListener('click',(event)=>{
        if (menu.dataset.selected!==event.target.id && event.target.parentElement===menu) {
            window[menu.dataset.selected].classList.remove('selectedmenuitem')
            event.target.classList.add('selectedmenuitem')
            menu.dataset.selected=event.target.id
        }
    })
}