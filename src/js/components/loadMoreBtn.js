export default class LoadMoreBtn {
    constructor({selector}) {
        this.refs = this.getRefs(selector)
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector('.label');
        refs.spinner = refs.button.querySelector('.spinner')

        return refs;
    }

    show() {
        this.refs.button.classList.remove("is-hidden")
    }
    hide() {
        this.refs.button.classList.add("is-hidden")
    }

    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Грузим...';
        this.refs.spinner.classList.remove('is-hidden');
    }
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Показать ещё';
        this.refs.spinner.classList.add('is-hidden');
    }
}