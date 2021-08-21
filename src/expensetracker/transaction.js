import React from "react";
function transaction(props) {
  console.log(props);
  const sign = props.trnsactiondata.amount < 0 ? "-" : "+";
  console.log(sign);

  return (
    <div>
      <ul className="list">
        {props.trnsactiondata.map((transaction) => {
          return (
            <>
              <li>
                {transaction.text}
                <span>
                  {sign}rs.{Math.abs(transaction.amount)}
                </span>
                <button className="btn btn-sm btn-dark">delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default transaction;
