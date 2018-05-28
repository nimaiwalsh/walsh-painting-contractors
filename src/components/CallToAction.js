import React from 'react';
import styles from './CallToAction.css';

const CallToAction = () => {
  return (
    <div className={styles} >
      <h2 className="book-now">
        Good news! We have 4 free rooms for your selected dates.
      </h2>
      <button className="btn">
        <span className="btn__visible">
          Book now
        </span>
        <span className="btn__invisible">
          Only 4 rooms left
        </span>
      </button>
    </div>
  );
};

export default CallToAction;