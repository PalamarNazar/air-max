import ControlsExtensions from "./controlsExtensions.js";
import Slider from "./slider.js";

class SwitchView extends ControlsExtensions {
    constructor() {
        super()
        this.listKey = null;
        this.slider = new Slider();
        this.bindEvents()
    }
    
    bindEvents() {
        document.addEventListener('click', this.onViewControls.bind(this))
    }
    
    onViewControls(event) {
        const viewControls = event.target.closest(this.selectors.viewControls)
        
        if(!viewControls) return;
        const clickButton = event.target.closest('button');
        
        if(!clickButton) return;
        
        this.changeActive(viewControls, clickButton)
        
        if (clickButton.matches(this.selectors.viewList)) {
            this.destroy()
            this.onChangeList(viewControls);
        }
        else if (clickButton.matches(this.selectors.viewSlider)) {
            this.destroy()
            this.slider = new Slider();
            this.sessionCache(viewControls)
            this.onBackView(viewControls);
            
        }
    }

    
    onBackView(viewControls) {
        const thisSection = viewControls.closest(this.selectors.root);
        const thisField = thisSection.querySelector(this.selectors.sectionBody);

        const mode = sessionStorage.getItem(this.listKey)

        if(mode === 'slider') {
            thisField.className = this.stateClasses.sliderList
            this.hideSliderArrows(thisSection, 'block')
        }
        else {
            thisField.className = this.stateClasses.galleryList
        }
    }
    
    sessionCache(viewControls) {
        const list = viewControls.querySelector(this.selectors.viewList);
        const thisSection = viewControls.closest(this.selectors.root);
        this.listKey = list.dataset.jsViewList
        const thisList = thisSection.querySelector(this.selectors.sectionBody);

        const mode = thisList.matches(this.selectors.slider)
        ? 'slider'
        : 'gallery'

        sessionStorage.setItem(this.listKey, mode)
        
    }
    
    onChangeList(viewControls) {
        const thisSection = viewControls.closest(this.selectors.root);
        const thisList = thisSection.querySelector(this.selectors.sectionBody);
        
        
        thisList.className = this.stateClasses.sectionList
        
        if(thisSection.classList.contains('section-slider')) {
            this.hideSliderArrows(thisSection, 'none')
        }
    }
    
    destroy() {
        if (this.slider) {
            this.slider.destroy();
            this.slider = null;
        }
    }
    changeActive(viewControls, activeButton) {
        const viewButtons = viewControls.querySelectorAll('button')
        
        viewButtons.forEach(element => {
            element.classList.remove(this.stateClasses.isActive)
        });
        
        activeButton.classList.add(this.stateClasses.isActive);
    }

    hideSliderArrows(thisSection, state) {
        const sliderArrows = thisSection.querySelectorAll(this.selectors.sliderArrows)
        sliderArrows.forEach(arrow => arrow.style.display = state)
    }
};

export default SwitchView;