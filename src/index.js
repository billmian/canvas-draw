import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DmLog from "daimian-log-sdk";

const dmlog = new DmLog({
  performance: true,
  host: "http://localhost:8080/Log/cgi/addLog",
  globalError: true,
  pv: true,
  device: true,
  timestamp: true,
});

ReactDOM.render(<App />, document.getElementById("root"));

try {
  new Promise((resolve, reject) => {
    reject("123");
  });
  throw new Error("12333333");
} catch (err) {
  console.log("这里是 try catch 捕获的错误:", err);
}

export default dmlog;