import React, { useEffect, useState } from "react";
import "../searchAutocomplete/style.css";
import SuggestionList from "./SuggestionList";

const SearchAutoComplete = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUser, setFilteredUser] = useState([]);

  const fetchUserList = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((useritem) => useritem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParams(query)
    if(query.length > 1){
      const filterData = users && users.length ? users.filter((item)=>
      item.toLowerCase().indexOf(query) > -1)
      :[]
      setFilteredUser(filterData)
      setShowDropDown(true)
    }else{
      setShowDropDown(false)
    } console.log(filteredUser);
  };

  const handleClick = (e) =>{
    // console.log(e.target.innerText);
    setShowDropDown(false)
    setSearchParams(e.target.innerText)
    setFilteredUser(false)
  }

  useEffect(() => {
    fetchUserList();
  }, []);

 
  if (error) {
    return <h1>Error occured</h1>;
  }

  return (
    <div className="autocomplete-container flex justify-center text-center">
      {
        loading ? <h1>Loading data......</h1>
       : <input
        value={searchParams}
        className="inp-autocomplete"
        type="text"
        placeholder="Search users...."
        onChange={handleChange}
      />
      }

      {
        showDropDown &&<SuggestionList handleClick={handleClick} data={filteredUser}/> 
      }
    </div>
  );
};

export default SearchAutoComplete;
