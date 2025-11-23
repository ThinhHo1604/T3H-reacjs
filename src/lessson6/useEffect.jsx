import React, { useEffect, useState } from "react";

const Side_Effect = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  //useEffect(callback, dependencies)
  // callback sẽ được thực thi sau khi component render 
  // dependencies sẽ có 3 trường hợp
  //TH1: Không truyền gì cả
  // => callback trong useEffect sẽ luôn được thực thi khi components render
  useEffect(() => { //1
    console.log("useEffect không truyền gì cả");
  });

  //TH2: Dependencies là 1 mảng rỗng ([])
  // => callback trong useEffect sẽ chỉ được thực thi
  // sau lần render đầu tien
  useEffect(() => { //2
    console.log("useEffect có dependencies là []");
  });

  useEffect(() => { //3 
    console.log("useEffect có dependencies là[count1]");
  }, [count1]);

  useEffect(() => {
    console.log("useEffect có dependencies là[count2]");
  }, [count2]);

  useEffect(() => {
    console.log("useEffect có dependencies là [count1,count2]", [
      count1,
      count2,
    ]);
  });

  console.log("ABC XYZ");
  return (
    <div>
      <h1>Giá trị count1:{count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Tăng giá trị1</button>
      <h1>Giá trị count2:{count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Tăng giá trị2</button>
    </div>
  );
};

export default Side_Effect;
