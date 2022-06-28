import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Search({handleSearchQuery}) {
    const [serachQ,setSearchQ]=useState("")
  return (
    <div className="App mb-4 mt-1">
      <div className="container h-100">
        <div class="row h-100 justify-content-center align-items-center"></div>
        <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={(e)=>{

                setSearchQ(e.target.value)

            }}
          />
          <Button  onClick={(e) => {
handleSearchQuery(serachQ.trim())
  }} variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Search;