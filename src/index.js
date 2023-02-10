import NewsFetchApi from "./js/components/news-service";

const newsApiFetch = new NewsFetchApi();

const refs = {
  form: document.querySelector('.js-search-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    newsApiFetch.searchQuery = event.currentTarget.elements.query.value;
    
    
   newsApiFetch.fetchData()
}