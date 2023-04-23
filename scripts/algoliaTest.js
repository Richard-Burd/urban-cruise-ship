// https://play.vidyard.com/QJALzhDTZAXBSVgcRfFBBp?autoplay=2&utm_medium=page_link&utm_source=dashboard
const algoliasearch = require('algoliasearch');

// repalce with actual values; .env doesn't work outisde of build or dev server
const client = algoliasearch('ALGOLIA_APP_ID', 'ALGOLIA_USAGE_API_KEY');

const index = client.initIndex('ucs_content');

const actors = [
  {
    objectID: '1',
    name: 'Tom Cruise',
    rating: 1200
  },
  {
    objectID: '2',
    name: 'Tom Hanks',
    rating: 1299
  }
]

index.saveObjects(actors)
  .then(({ objectIDs }) => {
    console.log('Actors imported to Algolia successfully:', objectIDs);
  })
  .catch(error => {
    console.error('Error importing actors to Algolia:', error);
  });
