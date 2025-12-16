class HeaderMenu {


    selectors = {
        root: '[data-js-header]',
        burger: '[data-js-burger]',
        overlay: '[data-js-overlay]',
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }

    constructor() {
        this.root = document.querySelector(this.selectors.root);
        this.burgerButton = this.root.querySelector(this.selectors.burger);
        this.navigationMenu = this.root.querySelector(this.selectors.overlay);
        this.bindEvents();
    }

    bindEvents() {
        if(this._burgerActive) return;

        this._burgerActive = true;

        this.burgerButton.addEventListener('click', this.onBurger.bind(this))
    }
    
    onBurger() {
        this.burgerButton.classList.toggle(this.stateClasses.isActive);
        this.navigationMenu.classList.toggle(this.stateClasses.isActive);
        document.querySelector('html').classList.toggle(this.stateClasses.isLock)
    };


}

export default HeaderMenu;