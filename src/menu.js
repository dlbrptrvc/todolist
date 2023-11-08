export function menuDynamic() {
    menu.addEventListener('click',(event)=>{
        console.log('adjusting visuals for',event.target)
        if (menu.dataset.selected!==event.target.id && event.target.parentElement===menu) {
            window[menu.dataset.selected].classList.remove('selectedmenuitem')
            event.target.classList.add('selectedmenuitem')
            menu.dataset.selected=event.target.id
        }
    })
}