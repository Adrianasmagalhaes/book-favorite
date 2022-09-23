import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default function BookList() {

    
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        getBooks();
    }, [] )

    async function getBooks() {
        try {
            const response = await axios({
                method: "get",
                url: "https://books.ronier.me",
            })
    
            setBooks(response.data.content);
            console.log(response.data.content)
        } catch (error) {
            console.log(error);
        }
       
    }
   
  
    const columns = [
      {
        dataField: "id",
        text: "Product ID",
      },
      {
        dataField: "title",
        text: "Product Nome",
      },
      {
        dataField: "price",
        text: "Product Price",
      },
      {
        dataField: "authors",
        text: "Autor",
      }
    ];
    return(
        <BootstrapTable keyField="id" data={books} columns={columns} />
    )
   
}
