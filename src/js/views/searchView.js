class SearchView {
  _parentElement = document.querySelector('.search');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearBlurInput();
    return query;
  }

  _clearBlurInput() {
    this._parentElement.querySelector('.search__field').value = '';
    this._parentElement.querySelector('.search__field').blur();
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
