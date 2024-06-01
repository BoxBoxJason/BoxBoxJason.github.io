"use strict";
var menu_visible = false;
setMenuButtonAction();
function setMenuButtonAction() {
    let menu_button = document.getElementById('menu-button');
    let menu_image = document.getElementById('menu-image');
    let header = document.querySelector('header');
    let main = document.querySelector('main');
    let footer = document.querySelector('footer');
    if (menu_button && header && main && footer && menu_image) {
        menu_button.addEventListener('click', function () {
            if (menu_visible) {
                header.style.display = 'none';
                main.style.display = 'block';
                footer.style.display = 'flex';
                menu_image.src = '../assets/images/icons/triple-bar.webp';
                menu_button.style.position = 'fixed';
            }
            else {
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
