// defined state (the table described in JSON format)
    // column that specifies the specialized site
    // ...that the solution belongs to IOT color it
// Jye and anyone else can edit this

// state hooks [useState()]

// logic to handle button clicks below
    // "preventDefault" and re-render

// logic to handle the background coloring
    // based on which specialized site the solution belongs to
// functional component
    // button(s) to select arrangement order
    // the table displayed according to the correct arrangement
// <style> tag in this component ".js" file to handle any custom logic

import React, { useState } from "react";

const tableData = [
    {
      "Name": "Jye",
      "Age": 20,
      "State": "TN",
      "Specialized Site": "energy"
    },
    {
      "Name": "Rick",
      "Age": 30,
      "State": "OR",
      "Specialized Site": "matter"
    },
    {
      "Name": "Lee",
      "Age": 40,
      "State": "MI"
    }
  ];
  
  function SolutionTable() {
    const [data, setData] = useState(tableData);
  
    const rowStyle = (specializedSite) => {
      if (specializedSite === "energy") {
        return { backgroundColor: "orange" };
      } else if (specializedSite === "matter") {
        return { backgroundColor: "green" };
      } else {
        return {};
      }
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={rowStyle(row["Specialized Site"])}>
              <td>{row.Name}</td>
              <td>{row.Age}</td>
              <td>{row.State}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default SolutionTable;