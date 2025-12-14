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
        this.arrowPrev = this.sliderSection.querySelector(this.selectors.arrowPrev);
        this.arrowNext = this.sliderSection.querySelector(this.selectors.arrowNext);
        this.sliderElement = this.sliderSection.querySelector(this.selectors.slider);
        this.sliderItemElement = this.sliderSection.querySelectorAll(this.selectors.sliderItem);
        this.index = 0;

        this.bindEvents();
    }

    bindEvents() {
        this.arrowNext.addEventListener('click', () => this.showSlide(this.index + 1))
        this.arrowPrev.addEventListener('click', () => this.showSlide(this.index - 1))
    }

    showSlide(index) {
        const containerWidth = this.sliderSection.clientWidth > 1600 
        ? 1600 
        : this.sliderSection.clientWidth;

        const sliderItemWidth = this.sliderItemElement[0].clientWidth > 350
        ?  350 
        : this.sliderItemElement[0].clientWidth;
        
        const slideGap = parseFloat(getComputedStyle(this.sliderElement).getPropertyValue('column-gap')) || 0;

        const itemsPerView = Math.floor((containerWidth + slideGap) 
        / (sliderItemWidth + slideGap));

        const maxIndex = this.sliderItemElement.length - itemsPerView

        this.calculateIndex(index, maxIndex)

        this.sliderElement.style.transform = `translateX(-${this.index * (sliderItemWidth + slideGap)}px)`;
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
}

export default Slider;