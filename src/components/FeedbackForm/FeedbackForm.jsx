import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Container from '../Сontainer/Container';
import Notification from '../Notification/Notification';

const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good,
    neutral,
    bad,
  };

  const addFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const getTotal = () => {
    const res = good + neutral + bad;
    return res;
  };
  const total = getTotal();

  const getCountPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };
  const countPositiveFeedback = getCountPositiveFeedbackPercentage();

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback !" />
        )}
      </Section>
    </Container>
  );
};
export default FeedbackForm;
