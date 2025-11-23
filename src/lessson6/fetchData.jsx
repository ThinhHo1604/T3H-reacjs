import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://6680276e56c2c76b495b50ad.mockapi.io/api/v1/students"
        );
        if (!response.ok) {
          throw new Error("network respone was not ok");
        }
        const result = await response.json();
        console.log("result", result);
        setData(result);
        setIsloading(false);
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((student) => {
            return <h1>{student.name}</h1>;
          })
        )}
      </div>
    </>
  );
};

export default FetchData;
