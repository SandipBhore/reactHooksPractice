import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function abc() {
  //------------------useState with Object----------------
  // const [name, setName] = useState({ firstName: "", lastName: "" });
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       name=""
  //       id=""
  //       onChange={(e) => {
  //         setName({ ...name, firstName: e.target.value });
  //       }}
  //     />
  //     <input
  //       type="text"
  //       name=""
  //       id=""
  //       onChange={(e) => {
  //         setName({ ...name, lastName: e.target.value });
  //       }}
  //     />
  //     <h1>firstName:{name.firstName}</h1>
  //     <h1>LastName:{name.lastName}</h1>
  //   </div>
  // );
  //-----------------useState with Array------------------
  //   const [item, setItem] = useState([]);
  //   const addNumber = () => {
  //     let val = Math.floor(Math.random() * 10 + 1);
  //     setItem([...item, val]);
  //   };
  //   return (
  //     <div>
  //       <button onClick={addNumber}>add a number</button>
  //       <ul>
  //         {item.map((i) => (
  //           <li>{i}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // --------------------useEffect simple example----------------------
  //   const [item, setItem] = useState([]);
  //   const addNumber = () => {
  //     let val = Math.floor(Math.random() * 10 + 1);
  //     setItem([...item, val]);
  //   };
  //   useEffect(() => {
  //     document.title = item[item.length - 1];
  //   });
  //   return (
  //     <div>
  //       <button onClick={addNumber}>add a number</button>
  //       <ul>
  //         {item.map((i) => (
  //           <li>{i}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  //----------------api call with useEffect (fetching data on load)-----------------
  // const [response, setResponse] = useState([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     setResponse(res.data);
  //   });
  // }, []);
  // return (
  //   <>
  //     <ul>
  //       {response.map((item) => {
  //         return <li key={item.id}>{item.title}</li>;
  //       })}
  //     </ul>
  //   </>
  // );
  //----------------api call with useEffect (fetching data on button click)-----------------
  // const [response, setResponse] = useState([]);
  // const [click, setClick] = useState(0);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     setResponse(res.data);
  //   });
  // }, [click]);
  // return (
  //   <>
  //     <button onClick={(e) => setClick(1)}>click</button>
  //     <ul>
  //       {click &&
  //         response.map((item) => {
  //           return <li key={item.id}>{item.title}</li>;
  //         })}
  //     </ul>
  //   </>
  // );
  //-------------useContext Hook ------------------------------
}

export default abc;
