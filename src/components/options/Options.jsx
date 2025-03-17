import styles from "./Options.module.css";
function Button({ name, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
}

export default function Options({
  buttons,
  handleClick,
  showReset,
  resetFeedback,
}) {
  const markup = Object.keys(buttons).map((button) => (
    <li key={button}>
      <Button onClick={() => handleClick(button)} name={button} />
    </li>
  ));
  return (
    <ul className={styles.list}>
      {markup}
      {showReset && (
        <li key="reset">
          <Button onClick={resetFeedback} name="Reset" />
        </li>
      )}
    </ul>
  );
}
