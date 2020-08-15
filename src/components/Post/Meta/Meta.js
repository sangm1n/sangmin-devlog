// @flow strict
import React from "react";
import moment from "moment";
import styles from "./Meta.module.scss";

type Props = {
  date: string,
};

const Meta = ({ date }: Props) => <div className={styles["meta"]}></div>;

export default Meta;
