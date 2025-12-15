class HeaderMenu {
    selectors = {
        header: '[data-js-header]',
        burger: '[data-js-burger]',
        overlay: '[data-js-overlay]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.headerMenu = document.querySelector(this.selectors.header);
        this.burgerButton = this.headerMenu.querySelector(this.selectors.burger);
        this.overlayMenu = this.headerMenu.querySelector(this.selectors.overlay);
        this.bindEvents();
    }
    
    onBurger = () => {
        this.burgerButton.classList.toggle(this.stateClasses.isActive);
        this.overlayMenu.classList.toggle(this.stateClasses.isActive);
        document.querySelector('html').classList.toggle(this.stateClasses.isLock)
    };

    bindEvents() {
        this.burgerButton.addEventListener('click', this.onBurger)
    }

}

export default HeaderMenu;