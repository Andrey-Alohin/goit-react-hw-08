import css from "./Error.module.css";

export default function Error({ message }) {
  return (
    <div className={css.errorContainer}>
      <h2 className={css.errorText}>{message}</h2>
    </div>
  );
}
