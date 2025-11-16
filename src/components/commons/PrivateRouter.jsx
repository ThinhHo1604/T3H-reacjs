import { Navigate } from "react-router-dom";

const PrivatieRoute = (props) => {
  const IS_LOGGINED = true;

  if (!IS_LOGGINED) {
    return <Navigate to="/" />;
  }
  return props.childem;
};
export default PrivatieRoute;
