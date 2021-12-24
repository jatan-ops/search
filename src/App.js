import { useState, useEffect } from 'react';
import './styles.css';
import { analytics, db } from './firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'
import { MeiliSearch } from 'meilisearch'

export default function App() {

  const [searchInput, setSearchInput] = useState('')

  const client = new MeiliSearch({
    //master:ZDVkOWI1M2VmY2RjMjFmMjkwZjYxMmZj
    host: 'https://search.topicwiser.com',
    apiKey:'c4ea19dd86b318fe38b2e3b00245b0ea488575bddb6f40fb706402717f20b1c8'
  })

  // An index is where the documents are stored.
  const index = client.index('movies')
 
  const createIndex = async () => {
  
    const documents = [
        { id: 1, title: 'Carol', genres: ['Romance', 'Drama'] },
        { id: 2, title: 'Wonder Woman', genres: ['Action', 'Adventure'] },
        { id: 3, title: 'Life of Pi', genres: ['Adventure', 'Drama'] },
        { id: 4, title: 'Mad Max: Fury Road', genres: ['Adventure', 'Science Fiction'] },
        { id: 5, title: 'Moana', genres: ['Fantasy', 'Action']},
        { id: 6, title: 'Philadelphia', genres: ['Drama'] },
    ]
  
    // If the index 'movies' does not exist, MeiliSearch creates it when you first add the documents.
    let response = await index.addDocuments(documents)
  
    console.log(response) // => { "updateId": 0 }
  }

  function handleChange(e) {
    setSearchInput(e.target.value)
  }

  async function handleSearch() {
    const search = await index.search(searchInput)
    console.log(search)
  }

  async function showCurrentIndexes() {
    const indexes = await client.getIndexes()
    console.log("indexes: ", indexes)
  }

  return (
    <div className="App">
      <input 
        type='text'
        onChange={handleChange}
      />
      <button
        onClick={handleSearch}
      >  
        search
      </button>
      <button
        onClick={() => {
          createIndex()
        }}
      >
        Create index
      </button>
      <button
        onClick={() => {
          showCurrentIndexes()
        }}
      >
        Show index list
      </button>
    </div>  
  );
}
