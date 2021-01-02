import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchList from './components/SearchList';

const App = () => {
  const [value, setValue] = useState();
  const [color, setColor] = useState(null);
  const [searchList, setSearchList] = useState(() => {
    return sessionStorage.getItem("previousSearches") == null ? [] : JSON.parse(sessionStorage.getItem("previousSearches")
    )
  })

  useEffect(() => {
    sessionStorage.setItem("previousSearches", JSON.stringify(searchList));
  }, [searchList])


  return (
    <>
      <Header
        value={value}
        setValue={setValue}
        setColor={setColor}
        setSearchList={setSearchList}
        color={color} />
      <hr />
      <div>
        <SearchList searchList={searchList} />
      </div>
    </>
  )
}

export default App;
