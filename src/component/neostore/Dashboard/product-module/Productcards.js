import React from "react";
import StarRating from "../dashboard-module/starRating";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Category from "./category";
import ReactPaginate from "react-paginate";
import Color from "./color";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader"
toast.configure();

function Productcards() {
  // var datapagination=[]
  const [user, setUser] = useState([]);
  //console.log(user,16)
  
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(9);
  const [offset, setOffSet] = useState(1);
  const [sortBy, setSortBy] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);
  const [searchd, setSearchd] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  //console.log(user,"20")
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{setLoading(false)},400)
  },[]) 
 
   
  // datapagination=user.slice(offset,offset+perPage) 
  
 
  const getdata = () => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/product",
      headers: {},
    };

    axios(config).then(function (response) {
      /////console.log(JSON.stringify(response.data));
      const productdata = response.data.data.docs;
      setUser(productdata);
     

    });
  };


  useEffect(() => {
    if (searchd == "") {
      getdata();
    } else {
      //console.log(user)
      //console.log(user.filter((fildata) =>      
      // fildata.name.includes(searchd)))
       setUser(
        user.filter((fildata) =>
       
         fildata.name.includes(searchd))
      );
    
    }
  
  }, [searchd]);
  useEffect(() => {
    
  }, [user])
  useEffect(() => {
  
  }, [sortBy])
  
  useEffect(() => {
    //console.log(perPage,offset,user,"111")
    setPageCount(Math.ceil(user.length)/perPage)    
    //console.log(perPage,offset,user,"1111")
    //console.log(user.slice(offset,offset+perPage),"11111")
    
    // setUser(user.slice(offset,offset+perPage))
 
  }, [user,offset]) 
  let paginatedata=user.slice(offset,offset+perPage)
  const filtereddata = selectedColor  ? user.filter((filteritems) =>  filteritems.color.name === selectedColor ||  filteritems.category.name === selectedColor  )
    : paginatedata;
  const priyaColor = (loveColor) => {
    //console.log("42", loveColor);
    setSelectedColor(loveColor);
  };

  const handleSort = (e) => {
    e.preventDefault();
    //console.log("evs", e.target.value);
    const value = e.target.value;
    if (value === "lowest") {
      setUser(user.sort((a, b) => (a.price < b.price ? -1 : 1)));
      setSortBy(!sortBy);
    } else {
      setUser(user.sort((a, b) => (a.price < b.price ? 1 : -1)));
      setSortBy(!sortBy);
    }
  };
  const handlesorting = (value) => {
    //console.log(value);
    setSortByRating(!sortByRating);
  };
  
  const handlePageClick = (e) => {
    //console.log(user,"11111")
    //console.log(e,perPage,"priyyyyyy")
    const selectedPage=e.selected;
    //console.log("selectedPage",selectedPage)
    const offset=selectedPage*perPage;
    //console.log("offset",offset);
    setCurrentPage(selectedPage)
    setOffSet(offset)
  
  };
  const add = (productId) => {
    //console.log(productId);
    var axios = require("axios");
    var data = JSON.stringify({
      "productId": `${productId}`,
      "quantity": 1
    });
    let token=localStorage.getItem("token")
    var config = {
      method: 'post',
      url: 'https://neostore-api.herokuapp.com/api/cart',
      headers: { 
        'Authorization':`${token}` ,
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config).then(function (response) {
      //console.log(response === 400, "true");
      // //console.log(response.status,"131");
      //console.log(response,"1")
      //console.log(response.data.success);
      if (response.status === 200) {
        //console.log(response.data.message);
        //console.log(response.status);
        toast("Product added in the cart");
      } 
     
      
      //console.log(JSON.stringify(response.data));  
    })
    .catch(function (error) {
      //console.log(error);
      if(error){
        toast("Product already in the cart");
      }
    });     
  };
  
//console.log(pageCount,offset,"pageCount")
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mt-5">
          <span
            class=" fa fa-long-arrow-down"
            onClick={() =>
              handlesorting(
                user.sort((a, b) => (a.avgRating > b.avgRating ? 1 : -1))
              )
            }
          >
           
          </span> <span
            class=" fa fa-long-arrow-up"
            onClick={() =>
              handlesorting(
                user.sort((a, b) => (a.avgRating > b.avgRating ? -1 : 1))
              )
            }
          >
            Sort by Rating
          </span>
        </div>
      
        
        {/* <div className="col-lg-6"> */}
          {/* <form>
            <div className="form-group">
              
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Search Product"
                onChange={(e) => setSearchd(e.target.value)}
              />
            </div>
          </form> */}
        {/* </div> */}
        <div className="col-lg-5">

        </div>

        <div className="col-lg-4  my-4">
          <select className="form-control" onChange={(e) => handleSort(e)}>
            {/* <select onChange={(e) => setSortType(e.target.value)}>  */}
            <option selected>Select </option>
            <option value="lowest">Lowest to highest</option>
            <option value="highest">Highest to lowest</option>
          </select>
        </div>
        </div>    
      <div className="row">
        <div className="col-lg-2">
          <h4>Popular Products</h4>
          <Category datapriya={priyaColor} />
          <Color datapriya={priyaColor} />
        </div>
        <div className="col-lg-10">
        {loading?  <ClipLoader color={"red"} loading={loading}  size={50} /> : ""}
          <div className="row">
            {filtereddata.map((items, key) => {
              //console.log("guyg", items);
              return (
                <>
                  <div className="col-lg-4" key={key}>
                    <div className="card text-center my-3" style={{height:"400px"}}>
                    
                         <img  className="card-img-top" src={items.subImages} style={{ height: "230px" }} onError={(e)=>{e.target.onerror = null; e.target.src="https://images-na.ssl-images-amazon.com/images/I/71Z0WIYvgmL._SL1500_.jpg"}}/>
                      <div className="card-body" style={{height:"30px"}}>
                        <Link className="card-title"style={{fontSize:"13px"}}>{items.name}</Link>
                        <h6 className="card-text">Rs.{items.price}</h6>
                        <button className="btn btn-danger" onClick={()=>add(items._id)}>Add to Card</button>
                        <StarRating rating={items.avgRating} />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={""}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
}

export default Productcards;
