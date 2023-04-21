import React, { useState } from 'react';
import { index } from '../algolia';

export default function AlgoliaSearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async (event) => {
    event.preventDefault();

    const { hits } = await index.search(query);

    setResults(hits);
  };

  return (
    <form onSubmit={search}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>

      {results.map((result) => (
        <div key={result.objectID}>
          <h2>{result.title}</h2>
          <p>{result.content}</p>
        </div>
      ))}
    </form>
  );
}