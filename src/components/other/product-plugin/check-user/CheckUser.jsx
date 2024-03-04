import React, { useEffect, useRef, useState } from "react";
import GetProductByUserId from "../get-products-by-user/GetProductByUserId";
import { CircularProgress } from "@mui/material";
import style from "./checkuser.module.css";


import httpAction from "../../../../store/action/httpAction";
import { useDispatch, useSelector } from "react-redux";
import apis from "../../../../store/utils/apis";

const CheckUser = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [products, setProducts] = useState();
  const nameRef = useRef();

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.loading);

  const list = apis();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };

  const submitHandler = async () => {
    if (!name || !password) {
      return;
    }

    const data = {
      url: list.getUserID,
      method: "POST",
      body: { name: name, password: password },
    };

    const result = await dispatch(httpAction(data));

    setProducts(result?.userId);
  };

  return (
    <div className={style.main}>
      {isLoading && (
        <div className={style.model}>
          <CircularProgress />
        </div>
      )}
      <div className={style.card}>
        <div className={style.login}>
          <h3>nuPayments</h3>
          <h4>login here to get your products</h4>
          <div className={style.form}>
            <input
              onChange={nameChange}
              ref={nameRef}
              type="email"
              placeholder="Enter Username"
            />
            <input
              onChange={passwordChange}
              type="password"
              placeholder="Enter Pin"
            />
            <button onClick={submitHandler}>Continue</button>
          </div>
        </div>
      </div>
      {products && <GetProductByUserId userId={products} />}
    </div>
  );
};

export default CheckUser;
