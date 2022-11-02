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
                url: "http://localhost:5000/books",
            })
    
            setBooks(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
       
    }
   
  
    const columns = [
      {
        dataField: "_id",
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
        dataField: "autor",
        text: "Autor",
      }
    ];
    return(
      <div>
      
        <BootstrapTable keyField="id" data={books} columns={columns} />
        </div>
    )
   
}
