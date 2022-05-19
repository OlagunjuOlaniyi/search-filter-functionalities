import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import countries from "./data";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const toLowerCase = e.target.value.toLowerCase();
    setSearch(toLowerCase);
  };

  const filteredData = countries.filter((count) => {
    if (search === "") {
      return count;
    } else {
      return count.name.toLowerCase().match(search);
    }
  });

  return (
    <div className="searchBar">
      <div className="searchBar__container">
        <div className="searchBar__form">
          <form>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Search here"
            />
          </form>

          <table>
            <th>
              <td>Countries</td>
            </th>
            <th>
              <td>Continent</td>
            </th>
            {filteredData.map((country, index) => {
              return (
                <tr key={index}>
                  <td>{country.name}</td>
                  <td>{country.continent}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
