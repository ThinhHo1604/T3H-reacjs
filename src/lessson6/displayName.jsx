import { memo } from "react";

const DisplayName = memo(({ name }) => {
  console.log("DisplayName");
  return <h1>tên của bạn:{name} </h1>;
});

export default DisplayName;
