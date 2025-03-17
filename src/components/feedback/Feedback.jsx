import styles from "./Feedback.module.css";

export default function Feedback({ names, positiveFeedback }) {
  const markup = Object.keys(names).map((name) => (
    <li key={name}>
      <p className={styles.text}>
        {name}: {names[name]}
      </p>
    </li>
  ));
  return (
    <ul className={styles.list}>
      {markup}
      {
        <li key={"reset"}>
          <p className={styles.text}>Positive: {positiveFeedback}%</p>
        </li>
      }
    </ul>
  );
}
