import React, { useEffect, useState } from  "react";
import MaterialTable from "material-table";
import axios from 'axios';
import api from "../Services/api";



function Axios(){
  return<text>teste</text>
}

//function Axios(){
//  axios.get('http://localhost:3000/data.json').then(response => {
//    console.log(response);
//  })
//};

export default function MaterialTableDemo() {
  const [ data, setData] = useState([]);

  useEffect(() => {
    api.get("data.json").then(({data}) => {
      setData(data)
    })
    console.log(data)

    //eslit-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [state, setState] = React.useState({
    columns: [
      { 
        title: "Nome", 
        field: "name" 
      },
      { 
        title: "Pequena Descrição", 
        field: "shortDescription" 
      },
      { 
        title: "id", 
        field: "id" 
      },
      { 
        title: "images", 
        field: "images" 
      },
      { 
        title: "categoria", 
        field: "category" 
      },
      {
        title: "Disponibilidade",
        field: "birthCity",
        lookup: { 
          34: "Disponivel", 
          63: "Nâo disponivel" 
        }
      }
    ],
    data: [
      {
        name: "Mehmet",
        surname: "Baran",
        category: "Karan",
        birthYear: 1987,
        birthCity: 63
      },
      {
        name: "Zerya Betül",
        surname: "Xaran",
        category: "Maran",
        birthYear: 2017,
        birthCity: 34
      }
    ]
  });

  return (
    <MaterialTable
      title="Lista de Produtos"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              Axios();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          })
      }}
    />
  );
}
