import React from "react";
import ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";

const Data = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json =>{ 
          console.log("data",json)
          setData(json)}
      );
  }, []);
  return (
    <Grid style={{ height: "400px" }} data={data}>
      <Column field="id" title="ID" width="40px" />
      <Column field="title" title="Name" width="250px" />
      <Column field="completed" title="Completed" />
    </Grid>
  );
};
export default Data