import React from "react";
import style from "./style/container.module.css";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTranslation, loading, errorTranslating } from "../store/actions";

const key =
  "tuforty_159FvsJ263hXlcbEJVCpxvW9VqWm9JBRF06uhuhMoeAELDuTEMGjdFUvgHxn";

const Body = () => {
  const translation = useSelector((state) => state);
  const dispatch = useDispatch();

  const url = `https://tuforty.com/api/v1/translator/money?value=${translation.translatedResult.amount}&language=${translation.translatedResult.language}&currency=${translation.translatedResult.currency_code}`;

  const getResult = async () => {
    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      dispatch(getTranslation(getResult.data));
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={style.containerRoot}>
      <h3 className={`text-center center`}>Translation process goes here...</h3>
      <Card className={style.amount}>
        #4,500.00K
        <p>translated result: {translation.translatedResult.amount}</p>
      </Card>
      <div className={`center ${style.cardZone}`}>
        <Card>Popular jingo</Card>
      </div>
      <button onClick={getResult}>Translate</button>
    </section>
  );
};

export default Body;
