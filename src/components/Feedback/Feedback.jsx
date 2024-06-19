import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div className={css.container}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
