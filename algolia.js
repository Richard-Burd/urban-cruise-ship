import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('ALGOLIA_APP_ID', 'ALGOLIA_SEARCH_KEY');
const index = client.initIndex('ALGOLIA_INDEX_NAME');

export { client, index };