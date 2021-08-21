import React from "react";
import { useState } from "react";

function Expensetracker() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  console.log(text);
  console.log(amount);
  const onSubmit = (e) => {
    e.preventDefault();
    
    // const newTransaction = {
    //   id: Math.floor(Math.random() * 100000000),
    //   text,
    //   amount: +amount,
    // };
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={onSubmit}>
              <div class="form-group">
                <label>Text</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="text"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="amount">Amount</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="amount"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>

              <button type="submit" class="btn btn-primary">
                add transcation
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Expensetracker;
