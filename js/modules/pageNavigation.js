import HeaderMenu from "./burger.js";

class pageNavigation extends HeaderMenu {
    navigationSelectors = {
        navigationItem: '[data-js-nav-item]',
        ...this.selectors,
    }
    constructor() {
        super()
        this.navigationLinks = this.root.querySelectorAll(this.navigationSelectors.navigationItem);
        this.bindNavigationEvent();
    }

    bindNavigationEvent() {
        this.navigationMenu.addEventListener('click', this.onListClick.bind(this))
    }

    onListClick(event) {
        const navItem = event.target.closest(this.navigationSelectors.navigationItem);
        
        if (!navItem) return;

        const menuIsActive = this.navigationMenu
        .classList
        .contains(this.stateClasses.isActive);

        if(!menuIsActive) {
            this.switchItem(navItem)
        } else {
            this.onMobile(navItem);
        }


    }
    
    onMobile(navItem) {
        this.closeMenu();
        this.switchItem(navItem)
    }

    closeMenu() {
        this.burgerButton.classList.remove(this.stateClasses.isActive);
        this.navigationMenu.classList.remove(this.stateClasses.isActive);
        document.documentElement.classList.remove(this.stateClasses.isLock)

    }

    switchItem(item) {
        this.navigationLinks.forEach((link) => link.classList.remove(this.stateClasses.isActive));

        item.classList.toggle(this.stateClasses.isActive);
    }
}

export default pageNavigation;