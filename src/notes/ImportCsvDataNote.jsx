import React from "react";
import { csv } from "d3";


export default function ImportCsvDataNote() {

  // Use the useState hook to define a state variable called csvData and its corresponding setter function
  const [csvData, setCsvData] = React.useState(null);

  // Define a constant called csvInputUrl and set its value to the URL of the CSV file
  const csvInputUrl =
    "https://raw.githubusercontent.com/HarryJamesGreenblatt/Data-Visualization-Using-D3-js/main/src/data/import/populations.csv";

  // Use the useEffect hook to fetch data from csvInputUrl when the component is mounted
  React.useEffect(() => {
    csv(csvInputUrl).then((d) => setCsvData(d));
  }, []);

  // Return a table that displays the entries of csvData
  return (
    <table style={{ marginLeft: "3rem", color: "white" }}>
      <thead>
        <tr style={{ fontWeight: "bold" }}>
          <td>Country</td>
          <td>,</td>
          <td style={{ paddingLeft: "1.5rem" }}>Population</td>
        </tr>
      </thead>
      <tbody>
        {csvData?.map((d) => (
          <tr key={+d.Population}>
            <td>{d.Country}</td>
            <td>,</td>
            <td style={{ paddingLeft: "1.5rem" }}>{+d.Population * 1000}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}