import React from "react";

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const Fruits = () => {
  return(
    <div>
        {fruits.map((fruit,index)=>(
            <li key={index}>{fruit}</li>
        ))}
    </div>
  ) 
};

export default Fruits;
