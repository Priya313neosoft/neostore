import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// ES2015 module syntax
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
function Orderdetails() {
  const [user, setUser] = useState([]);
  const pdfExportComponent = React.useRef(null);
  //    console.log(user);
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/order",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wOVQwOTowMjozNi4zMzlaIiwic2VjdXJlRmdwIjoiOGJlYzRjOTFiMGVlNzZmN2JlOWMxN2NhNGJkNWUxNmVhYjdmMzdkZTBkNmU5NTJmNzAxNDg0ZjA4YzA2ODU0MiIsImlhdCI6MTYxNzk1ODk1NiwiZXhwIjoxNjgxMDMwOTU2fQ.mEgtLfjHpdW-qcN-Cv2Ulf0Mez3oJrM-wF2LG-MxKcI",
      },
    };
    axios(config).then(function (response) {
      //    console.log(JSON.stringify(response.data.data.orders));
      setUser(response.data.data.orders);
    });
  }, []);
  //   const index = user.findIndex(fr=> fr._id === "607fbc830ac7d00f8f6dc3ec");
  // console.log(index); // 3

  let index = user.findIndex((rank, index) => index >= 1);

  console.log(index);
  // const image=user.items.productId.mainImage
  // console.log(image);
  //   const { mainImage, productId ,price,name} = user;

  return (
    <>
      <div className="container">
        {user.map((priyadata) => {
          console.log(priyadata);

          return (
            <>
              <div className="card" style={{ width: "40rem" }}>
                <div className="card-body">
                  <div>
                    <p>TRANSIT Order By:ORDERno_{index}</p>
                    <p>
                      Placed on {priyadata.createdAt} /<span></span>
                    </p>
                  </div>

                  <hr />
                  <div>
                    {/* <img
                      src={mainImage}
                      className="img-fluid"
                      alt="Responsive image"
                    /> */}
                  </div>
                  <hr />

                  <div>
                    <div className="example-config my-2">
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          if (pdfExportComponent.current) {
                            pdfExportComponent.current.save();
                          }
                        }}
                      >
                        Download Invoice as PDF
                      </button>
                      <PDFExport
                      scale={0.6}
                      paperSize="A4"
                      margin="2cm"
                      ref={pdfExportComponent}>
                      {priyadata.items.map((item) => {
                        console.log(
                          "items",
                          item.productId != null ? item.productId : item
                        );
                        return item.productId != null ? (
                          <>
                            <img
                              src={item.productId.mainImage}
                              style={{ width: "205px", height: "230px" }}
                            ></img>
                            <p className="py-3"><b>{item.productId.name}</b></p>
                          </>
                        ) : (
                          <h5>no data</h5>
                        );
                      })}
                      <p>{/* {priyadata.items[0].productId.avgRatings} */}</p>
                    </PDFExport>
                    </div>

                   
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Orderdetails;
