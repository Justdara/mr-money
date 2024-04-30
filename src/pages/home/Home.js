import React from "react";
import styles from "./Home.module.css";
import TransactionForm from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className={styles.container}>
      <div className={styles.main}>transaction list</div>
      <div className={styles.side}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
