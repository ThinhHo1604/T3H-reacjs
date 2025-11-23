import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("useEffet được thực thi khi count thực hiện");
    console.log("------------------");
    return () => {
      console.log("console.log trong return");
    };
  }, [count]);
  return (
    <div>
      <h1>Giá trị count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tăng giá trị count</button>
    </div>
  );
};

export default Count;
