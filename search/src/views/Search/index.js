import React, { useEffect, useState } from 'react'
import SearchBox from './components/SearchBox'
import SearchResults from './components/SearchResults'

import './style.css'

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false)
  const [results, setResults] = useState([])
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUserData(data);
    }

    getUsers().catch(null)
  }, [])

  const handleCloseSearch = () => {
    setIsAtTop(false)
    setResults([])
  }

  const handleSearchClick = (searchText) => {
    setIsAtTop(true)
    if (userData?.length) {
      const searchTextMinus = searchText.toLocaleLowerCase()
      const filterData = userData.filter((value) => {
        return (
          value.name.toLocaleLowerCase().includes(searchTextMinus) ||
          value.phone.toLocaleLowerCase().includes(searchTextMinus) ||
          value.email.toLocaleLowerCase().includes(searchTextMinus) ||
          value.username.toLocaleLowerCase().includes(searchTextMinus)
        )
      })

      console.log("filterData", filterData);

      setResults(filterData)
    }
  }

  return (
    <div className={`search ${isAtTop ? 'serach--top' : 'search--center'}`}>
      <SearchBox
        onSearch={handleSearchClick}
        onClose={handleCloseSearch}
        isSearching={isAtTop}
      />
      <SearchResults results={results} isSearching={isAtTop} />
    </div>
  )
}
