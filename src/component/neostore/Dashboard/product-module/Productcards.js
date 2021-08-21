import React from "react";
import StarRating from "../dashboard-module/starRating";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Category from "./category";
import ReactPaginate from "react-paginate";
import Color from "./color";
import axios from "axios";

function Productcards() {
  const [user, setUser] = useState([]);
  const [pageCount, setPageCount] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const [offset, setOffSet] = useState(4);
  const [sortBy, setSortBy] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);
  const [searchd, setSearchd] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const getdata = () => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/product",
      headers: {},
    };

    axios(config).then(function (response) {
      ///console.log(JSON.stringify(response.data));
      const productdata = response.data.data.docs;
      setUser(productdata);
    });
  };
 

  useEffect(() => {
    if (searchd == "") {
      getdata();
    } else {
       setUser(
        user.filter((fildata) => fildata.name.includes(searchd))
      );
    
    }
  
  }, [searchd]);
  useEffect(() => {
  
  }, [sortBy])
  
  console.log(user);
  const filtereddata = selectedColor
    ? user.filter(
        (filteritems) =>
          filteritems.color.name === selectedColor ||
          filteritems.category.name === selectedColor
      )
    : user;
  const priyaColor = (loveColor) => {
    console.log("42", loveColor);
    setSelectedColor(loveColor);
  };

  const handleSort = (e) => {
    e.preventDefault();
    console.log("evs", e.target.value);
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
    console.log(value);
    setSortByRating(!sortByRating);
  };
  const handlePageClick = (e) => {
    console.log(e,perPage,"priyyyyyy")
    const selectedPage=e.selected;
    console.log("selectedPage",selectedPage)
    const offset=selectedPage*perPage;
    console.log("offset",offset);
    setCurrentPage(selectedPage)
    setOffSet(offset)
  };
  useEffect(() => {
    console.log(perPage,offset,"111")
    setPageCount(Math.ceil(user.length)/perPage)
      
  //  setPerPage(user.slice(offset,offset+perPage))
 
  }, [perPage,offset])
console.log(pageCount,offset,"pageCount")
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <span
            class="fa fa-star"
            onClick={() =>
              handlesorting(
                user.sort((a, b) => (a.avgRating > b.avgRating ? 1 : -1))
              )
            }
          >
            Sort by Rating
          </span>
        </div>
        <div className="col-lg-6">
          <form>
            <div className="form-group">
              
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Search Product"
                onChange={(e) => setSearchd(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="col-lg-3">
          <select className="form-control" onChange={(e) => handleSort(e)}>
            {/* <select onChange={(e) => setSortType(e.target.value)}>  */}
            <option selected>Select For Sorting</option>
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
          <div className="row">
            {filtereddata.map((items, key) => {
              console.log("guyg", items);
              return (
                <>
                  <div className="col-lg-4" key={key}>
                    <div className="card text-center" style={{height:"500px"}}>
                      <img  style={{height:"330px"}}
                        className="card-img-top "
                        src={items.mainImage}
                        alt="Card image cap"
                      />
                      <div className="card-body" style={{height:"30px"}}>
                        <Link className="card-title"style={{fontSize:"13px"}}>{items.name}</Link>

                        <h6 className="card-text">Rs.{items.price}</h6>
                        <button className="btn btn-danger">Add to Card</button>
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
