import React from "react";
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from 'axios';

export default function Home() {
  const [cidades, setCidades] = useState([])
  async function getBooks() {
      try {
          const response = await axios({
              method: "get",
              url: "",
          })
  
          setCidades(response.data);
          console.log(cidades)
      } catch (error) {
          console.log(error);
      }
     
  }
  getBooks();
  const products = [
    {
      id: 1,
      nome: "1984",
    },
    {
      id: 2,
      nome: "Cavalo de tróia",
    },
  ];
  const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "nome",
      text: "Product Nome",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];


return (
<BootstrapTable keyField="id" data={products} columns={columns} />
)
}
 