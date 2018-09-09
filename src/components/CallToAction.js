import React from 'react';
import Link from 'gatsby-link';
import styles from './CallToAction.css';

const CallToAction = () => {
  return (
    <div className={styles} >
      <h2 className="book-now">
        Contact us for your next premium painting and or decorating job
      </h2>
      <Link to="/contact">
        <button className="btn">
          <span className="btn__visible">
            Get a quote 
          </span>
          <span className="btn__invisible">
            By professionals
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CallToAction;