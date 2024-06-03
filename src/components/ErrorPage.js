import React from "react";
import { useParams } from "react-router-dom";

const ErrorPage = () => {
  const { errMsg } = useParams();
  console.log(errMsg);
  return <div></div>;
};

export default ErrorPage;
