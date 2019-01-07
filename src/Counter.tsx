import * as React from "react";
interface ICounterOutPutProps {
  counter: number;
}

const counter = (props: ICounterOutPutProps) => {
  return <p style={{ textAlign: "center" }}>{props.counter}</p>;
};
export default counter;
