import React from "react";

import Branding from "../organism/branding";
import Header from "../organism/header"
import Menu from "../organism/menu"
import Layout from "../templates/layout";

function App() {
  const [search, setSearch] = React.useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
  } 

  return (
    <div className="App">
      <Layout>
        <Header search={search} onSearch={handleSearch}/>
        <Menu/>
        <Branding/>
      </Layout>
    </div>
  );
}

export default App;

