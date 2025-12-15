
class pageNavigation {
    selectors = {
       root: '[data-js-header]',
       navigationItem: '[data-js-nav-item]',
       burger: '[data-js-burger]',
       overlay: '[data-js-overlay]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.headerPage = document.querySelector(this.selectors.root);
        this.burgerButton = this.headerPage.querySelector(this.selectors.burger);
        this.navigationLinks = this.headerPage.querySelectorAll(this.selectors.navigationItem);
        this.navigationList = this.headerPage.querySelector(this.selectors.overlay);
        this.bindEvents();
    }

    bindEvents() {
        this.navigationList.addEventListener('click', this.onListClick.bind(this))
    }

    onListClick(event) {
        console.log()
        const navItem = event.target.closest(this.selectors.navigationItem);
        const windowWidth = window.matchMedia(`(max-width: ${767.98 / 16}rem)`)


        if(!windowWidth.matches) {
            this.switchItem(navItem)
        } else {
            this.onMobile(navItem);
        }
    }
    
    onMobile(navItem) {
        this.burgerButton.classList.toggle(this.stateClasses.isActive);
        this.navigationList.classList.toggle(this.stateClasses.isActive);
        document.querySelector('html').classList.toggle(this.stateClasses.isLock)
        this.switchItem(navItem)
    }

    switchItem(item) {
        if (!item) return;

    
        this.navigationLinks.forEach((link) => link.classList.remove(this.stateClasses.isActive));

        item.classList.toggle(this.stateClasses.isActive);
    }
}

export default pageNavigation;