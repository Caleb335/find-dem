import React from "react";
import style from "./style/container.module.css";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { TRANSLATED_CURRENCY } from "../store/types";

const key =
  "tuforty_159FvsJ263hXlcbEJVCpxvW9VqWm9JBRF06uhuhMoeAELDuTEMGjdFUvgHxn";

const Body = () => {
  const translation = useSelector((state) => state);
  const dispatch = useDispatch();

  const getTranslation = () => {
    return (dispatch) => {
      axios
        .get("https://tuforty.com/api/v1/translator/money", {
          mode: "no-cors",
          headers: {
            "content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${key}`,
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        })
        .then((response) => {
          dispatch({
            type: TRANSLATED_CURRENCY,
            payload: response.data,
          });
          console.log(`this is the ${payload}`);
        });
    };
  };

  const onFetchedData = () => {
    dispatch(getTranslation());
  };

  return (
    <section className={style.containerRoot}>
      <h3 className={`text-center center`}>Translation process goes here...</h3>
      <div className={`center ${style.cardZone}`}>
        <Card>
          <h4>Amount: NGN50k</h4>
        </Card>
      </div>
      <button onClick={onFetchedData}>Translate</button>
    </section>
  );
};

export default Body;
