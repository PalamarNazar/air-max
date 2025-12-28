class ControlsExtensions {
    selectors = {
        root: '[data-js-section]',
        controls: '[data-js-section-controls]',
        filters: '[data-js-filters]',
        sort: '[data-js-sort]',
        viewControls: '[data-js-view-controls]',
        viewSlider: '[data-js-view-base]',
        viewList: '[data-js-view-list]',
        sectionBody: '[data-js-section-body]',
        slider: '[data-js-slider]',
        sliderArrows: '[data-js-arrows]',
    }

    stateClasses = {
        sectionList: 'section__list',
        sliderList: 'slider__list',
        galleryList: 'gallery__list',
        isActive: 'is-active',
    }

    constructor() {
    }
}

export default ControlsExtensions;