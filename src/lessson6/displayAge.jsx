import { memo } from "react";

const DisplayAge = memo(({age}) => {
  console.log("DisplayAge");
  return (
    <>
      <h1>tuổi của bạn:{age} </h1>;
    </>
  );
});

export default DisplayAge;
