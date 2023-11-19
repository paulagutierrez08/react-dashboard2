import React from "react";

import Branding from "../organism/branding";
import Header from "../organism/header"
import Menu from "../organism/menu"
import Layout from "../templates/layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu/>
        <Header/>
        <Branding/>
      </Layout>
    </div>
  );
}

export default App;

