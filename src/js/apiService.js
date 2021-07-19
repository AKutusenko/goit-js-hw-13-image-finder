const BASE_URL = 'https://pixabay.com/api/';
const KEY = '22566981-b2c0de401259c0633e20b55b4';

fetch(
  `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`,
).then(r => r.json);
