import React from "react";
import { json } from "d3";
import { irisDatasetJsonUrl } from "../utils";
import { nanoid } from "nanoid";


export default function ImportJsonDataNote() {
    
  // Use the useState hook to define a state variable called jsonData and its corresponding setter function
  const [jsonData, setJsonData] = React.useState(null);

  // Define a constant called jsonInputUrl and set its value to irisDatasetJsonUrl
  const jsonInputUrl = irisDatasetJsonUrl;

  // Use the useEffect hook to fetch data from jsonInputUrl when the component is mounted
  React.useEffect(() => {
    json(jsonInputUrl).then((d) => setJsonData(d));
  }, []);

  // Log the value of jsonData to the console
  console.log(jsonData);

  // Return a table that displays the first 10 entries of jsonData
  return (
    <table style={{ marginLeft: ".85em", color: "black" }}>
      <thead>
        <tr style={{ fontWeight: "bold" }}>
          <td>Species</td>
          <td style={{ paddingLeft: "1.1rem" }}>Sepal Length</td>
          <td style={{ paddingLeft: "1.1rem" }}>Sepal Width</td>
          <td style={{ paddingLeft: "1.1rem" }}>Petal Length</td>
          <td style={{ paddingLeft: "1.1rem" }}>Petal Width</td>
        </tr>
      </thead>
      <tbody>
        {jsonData?.slice(0, 10).map((d) => (
          <tr key={nanoid()}>
            <td>{d.species}</td>
            <td style={{ paddingLeft: "1.1rem" }}>{+d.sepal_length}</td>
            <td style={{ paddingLeft: "1.1rem" }}>{+d.sepal_width}</td>
            <td style={{ paddingLeft: "1.1rem" }}>{+d.petal_length}</td>
            <td style={{ paddingLeft: "1.1rem" }}>{+d.petal_width}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
