import NewsFetchApi from "./js/components/news-service";
import articlesTpl from './templates/articles.hbs';
import './css/common.css';
import LoadMoreBtn from './js/components/loadMoreBtn';


const refs = {
  form: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiFetch = new NewsFetchApi();
const loadMoreBtn = new LoadMoreBtn({ selector: '[data-action="load-more"]' });

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);

function onFormSubmit(event) {
    event.preventDefault();

    newsApiFetch.searchQuery = event.currentTarget.elements.query.value;
  
  loadMoreBtn.show()
  clearArticleContainer();
  newsApiFetch.resetPage();  
  fetchArticles();
  
}

function onLoadMoreClick() {
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable()
  newsApiFetch.fetchData().then(articles => {
    if (articles.length === 0) {throw new Error("no data");}

    appendArticles(articles);
    loadMoreBtn.enable();
  }).catch(onError);
  
}

function appendArticles(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles))
}

function onError(error) {
  return console.log(error);
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = '';
}