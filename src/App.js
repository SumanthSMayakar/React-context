import React from "react";
import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
import Menu from "./component/Menu";
import Address from "./component/Address"
import Company from "./component/Company"
import Personal from "./component/Personal"
import Pnf from "./component/Pnf";
import Professional from "./component/Professional"
import Bank from "./component/Bank"


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path= {`/`} element={<Personal/>}/>
        <Route path= {`/personal`} element={<Personal/>}/>
        <Route path= {`/professional`} element={<Professional/>}/>
        <Route path= {`/company`} element={<Company/>}/>
        <Route path= {`/address`} element={<Address/>}/>
        <Route path= {`/bank`} element={<Bank/>}/>
        <Route path= {`/*`} element={<Pnf/>}/>
      </Routes>
    </Router>
  )
}


export default App;
