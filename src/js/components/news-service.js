const APIKEY = '525ac24a30b345fc93a5e4d238eecf81';
const URL = 'https://newsapi.org/v2/everything';

export default class NewsFetchApi { 
    constructor() {
        this.searchQuery = '';
        this.page = 1;

    }

    fetchData() {
        return fetch(`${URL}?q=${this.searchQuery}&apiKey=${APIKEY}&pageSize=5&page=${this.page}`).then(resolve => resolve.json()).then(({ articles }) => {
            this.incrementPage()
            return articles
        })
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }
}
