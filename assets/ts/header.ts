var menu_visible = false;

setMenuButtonAction()
// Show the header if the size of the screen is greater than 600px
window.addEventListener('resize',function() {
    let header = document.querySelector<HTMLElement>('header');
    let main = document.querySelector<HTMLElement>('main');
    let footer = document.querySelector<HTMLElement>('footer');
    let menu_button = document.getElementById('menu-button') as HTMLButtonElement;
    let menu_image = document.getElementById('menu-image') as HTMLImageElement;
    if(header && main && footer && menu_button && menu_image) {
        if(window.innerWidth > 600) {
            header.style.display = 'block';
            main.style.display = 'block';
            footer.style.display = 'flex';
            menu_image.src = '../assets/images/icons/triple-bar.webp';
            menu_button.style.position = 'fixed';
        } else {
            header.style.display = 'none';
            main.style.display = 'block';
            footer.style.display = 'flex';
            menu_image.src = '../assets/images/icons/triple-bar.webp';
            menu_button.style.position = 'fixed';
        }
    } else {
        console.error('Error, at least one of the components for the menu action was not found !');
    }
});


function setMenuButtonAction() {
    let menu_button = document.getElementById('menu-button') as HTMLButtonElement;
    let menu_image = document.getElementById('menu-image') as HTMLImageElement;
    let header = document.querySelector<HTMLElement>('header');
    let main = document.querySelector<HTMLElement>('main');
    let footer = document.querySelector<HTMLElement>('footer');
    if(menu_button && header && main && footer && menu_image) {
        menu_button.addEventListener('click',function() {
            if(menu_visible) {
                header.style.display = 'none';
                main.style.display = 'block';
                footer.style.display = 'flex';
                menu_image.src = '../assets/images/icons/triple-bar.webp';
                menu_button.style.position = 'fixed';
            } else {
                header.style.display = 'block';
                main.style.display = 'none';
                footer.style.display = 'none';
                menu_image.src = '../assets/images/icons/x-close.webp';
                menu_button.style.position = 'absolute';
            }
            menu_visible = !menu_visible;
        });
    } else {
        console.error('Error, at least one of the components for the menu action was not found !');
    }
}
