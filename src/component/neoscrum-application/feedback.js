// import React from 'react'
// import {useState} from "react"

//  export default function Feedback() {
//     const Colors=["red","green","yellow","pink"];
//     return (
//         <>
//         {Colors.map((color,key)=>{
//             <Div Color={color} Colors={Colors} key={key}>hhhh</Div>
//             console.log(color)
//         })}
//         <p>priya</p>

//         </>
//     )
// }

// function Div({Color,Colors}) {
//     const handleChange=()=>{
//         const [color, setColor] = useState(Color)

//     }
//     return (
//         <div onClick={handleChange}>
//         <p>ppp</p>
//         </div>
//     )
// }
// import React, { useState } from "react";

// export default function Feedback() {
//   const Colors = ["red", "green", "blue", "orange", "yellow"];
//   return (
//     <div className="App">

//       {Colors.map((color, key) => (
//         <Button Color={color} Colors={Colors} key={key} />
//       ))}
//     </div>
//   );
// }

// function Button({ Color, Colors }) {
//   const [color, setColor] = useState(Color);
//   const handleChange = (e) => {
//     e.preventDefault();
//     setColor(Colors[Math.floor(Math.random() * Colors.length)]);
//   };
//   const style = {
//     backgroundColor: color
//   };
//   return (
//     <button onClick={handleChange} style={style}>
//       Click Me!
//     </button>
//   );
// }
