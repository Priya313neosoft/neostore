import React from 'react'
import Filter from "./filter";
// import productcard2 from './productcard2';
import {useState,useEffect} from "react";
import axios from "axios";

function Product() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    console.log(filteredProducts);
    console.log(products);
    useEffect(() => {      
var config = {
    method: 'get',
    url: 'https://neostore-api.herokuapp.com/api/product',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    setProducts(response.data.data);
    setFilteredProducts(response.data.data);
  })
 
 
        
        
    }, [])
    return (
        <div>
            <Filter/>
            {/* <productcard2/> */}
            
        </div>
    )
}

export default Product
