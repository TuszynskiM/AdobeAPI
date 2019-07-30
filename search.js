const qs = decodeURIComponent(window.location.search);
queryString = qs.split('=');
const category = queryString[1];

const adobeApi = new Pagination(category)