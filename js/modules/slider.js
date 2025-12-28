class Slider {
    selectors = {
        root: '[data-js-slider-section]',
        arrowPrev: '[data-js-arrow-prev]',
        arrowNext: '[data-js-arrow-next]',
        slider: '[data-js-slider]',
        sliderItem: '[data-js-slider-item]',
    }
    
    constructor() {
        this.sliderSection = document.querySelector(this.selectors.root);
        if(!this.sliderSection) return;
        this.arrowPrev = this.sliderSection.querySelector(this.selectors.arrowPrev);
        this.arrowNext = this.sliderSection.querySelector(this.selectors.arrowNext);
        this.sliderElement = this.sliderSection.querySelector(this.selectors.slider);
        this.sliderItemElement = this.sliderSection.querySelectorAll(this.selectors.sliderItem);
        this.index = 0;
        this.onkeydown = this.onkeydown.bind(this);

        this.bindEvents()
    }

    bindEvents() {
        if(this.arrowNext || this.arrowPrev) {
            this.arrowNext.addEventListener('click', () => this.showSlide(this.index + 1))
            this.arrowPrev.addEventListener('click', () => this.showSlide(this.index - 1))
        };
        document.addEventListener('keydown', this.onkeydown)
    }

    onkeydown(event) {
        const { code } = event
        if(code === 'ArrowLeft' || code === 'ArrowRight') {
    
                if (code === 'ArrowLeft') {
                    this.showSlide(this.index - 1)
                } else if (code === 'ArrowRight') {
                    this.showSlide(this.index + 1)
                }
        }
    }

    showSlide(index) {
        const containerWidth = this.sliderSection.clientWidth > this.globalContainerWidth()
        ? this.globalContainerWidth()
        : this.sliderSection.clientWidth;
        
        const sliderItemWidth = this.sliderItemElement[0].clientWidth
        
        const slideGap = parseInt(getComputedStyle(this.sliderElement).getPropertyValue('column-gap')) || 0;

        const itemsPerView = this.getItemPerView(containerWidth, slideGap, sliderItemWidth)

        const maxIndex = this.sliderItemElement.length - itemsPerView
        
        this.calculateIndex(index, maxIndex)

        this.sliderElement.style.transform = `translateX(-${this.index * (sliderItemWidth + slideGap)}px)`;
    }

    globalContainerWidth() {
        const rootStyle = window.getComputedStyle(document.body);
        const globalStyles = rootStyle.getPropertyValue('--container-width');

        const remToPixel = 16;

        return parseInt(globalStyles) * remToPixel  
    }

    getItemPerView(containerWidth, slideGap, sliderItemWidth) {
        return Math.floor((containerWidth + slideGap) 
        / (sliderItemWidth + slideGap));
    }

    calculateIndex(index, maxIndex) {
        if (index > maxIndex) {
            this.index = 0;
        } else if (index < 0) {
            this.index = maxIndex;
        } else {
            this.index = index;
        }

        return this.index;
    }

    destroy() {
        this.sliderElement.style.transform = 'translateX(0)'
        document.removeEventListener('keydown', this.onkeydown)
    }
}

export default Slider;