import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& div[data-rowIndex][role="row"]:nth-of-type(5n-4)': {
        color: "black",
        fontSize: 15,
        align:"center",
        //risky
        minHeight: "60px !important",
        height: 60,
        "& div": {
          minHeight: "60px !important",
          height: 60,
          lineHeight: "59px !important"
        }
      },
      "& .MuiDataGrid-renderingZone": {
        "& .MuiDataGrid-row": {
          "&:nth-child(2n)": { backgroundColor: "rgba(255, 255, 255, 1)" }
        }
      }
    }
  })
);

const handleCellClick = (param, event) => {
  console.log(param);
  console.log(event);
  if (param.colIndex === 2) {
    event.stopPropagation();
  }
};

const handleRowClick = (param, event) => {
  console.log("Row:");
  console.log(param);
  console.log(event);
};

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70
  },
  {
    field: "firstName",
    headerName: "First Name",
    width: 130,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            color: "black",
            fontSize: 15,
            width: "100%",
            textAlign: "center",
            
          }}
        >
          {cellValues.value}
        </div>
      );
    }
  },
  { field: "lastName", headerName: "Last Name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
    align:"center"
    
           
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => {
      return `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`;
    }
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Amy", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 12 },
  { id: 6, lastName: "Melisandre", firstName: "Jane", age: 15 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

export default function DataTable() {
  const classes = useStyles();

  return (
    <div style={{ height: 500, width: "100%" ,backgroundColor:"white"}}>
      <DataGrid
        rowHeight={120}
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    
    </div>
  );
}
