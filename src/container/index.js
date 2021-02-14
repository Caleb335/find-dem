import React from "react";
import style from "./style/container.module.css";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getTranslation, loading, errorTranslating } from "../store/actions";

const key =
  "tuforty_159FvsJ263hXlcbEJVCpxvW9VqWm9JBRF06uhuhMoeAELDuTEMGjdFUvgHxn";
const url = `https://tuforty.com/api/v1/translator/money?value=${translatedResult.amount}&language=${translatedResult.language}&currency=${translatedResult.currency_code}`;

const Body = () => {
  const translation = useSelector((state) => state);
  const dispatch = useDispatch();

  const getTranslation = async () => {
    try {
      const result = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={style.containerRoot}>
      <h3 className={`text-center center`}>Translation process goes here...</h3>
      <div className={`center ${style.cardZone}`}>
        <Card>
          <h4>Amount: NGN50k</h4>
          <select>
            <option>GBP</option>
          </select>
          <select>
            <option>fr</option>
          </select>
        </Card>
      </div>
      <button onClick={getTranslation}>Translate</button>
    </section>
  );
};

export default Body;
