import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good': {
        setGood(prevState => prevState + 1);
        break;
      }
      case 'neutral': {
        setNeutral(prevState => prevState + 1);
        break;
      }
      case 'bad': {
        setBad(prevState => prevState + 1);
        break;
      }
      default: {
        return;
      }
    }
  };
  const totalFeedback = good + neutral + bad;

  const positiveFeedbackPercentage = Math.round((good * 100) / totalFeedback);

  const options = ['good', 'neutral', 'bad'];
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
