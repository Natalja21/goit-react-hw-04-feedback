import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const colors = [
  'rgba(127, 236, 147, 0.879)',
  'rgb(231, 238, 32)',
  'rgb(252, 130, 49)',
];

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.box}>
      {options.map((option, index) => (
        <button
          type="button"
          className={styles.btn}
          style={{ background: colors[index] }}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
