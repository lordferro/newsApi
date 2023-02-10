const APIKEY = '525ac24a30b345fc93a5e4d238eecf81';
const URL = 'https://newsapi.org/v2/everything';

export default class NewsFetchApi { 
    constructor() {
        this.searchQuery = '';

    }

    fetchData() {
        fetch(`${URL}?q=${this.searchQuery}&apiKey=${APIKEY}&pageSize=5&page=1`).then(resolve => resolve.json()).then(({articles}) => console.log(articles))
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}
