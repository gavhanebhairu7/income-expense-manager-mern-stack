import React, { useContext, useEffect } from 'react';
import '../Error.css';
import { GlobalContext } from '../Context/GlobalState';

const ErrorMessage = ({ onClose }) => {
  const { err_message } = useContext(GlobalContext);

  return (
    <div className="error-popup">
      {err_message}
      <button
        onClick={onClose}
        style={{
          marginLeft: '10px',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        x
      </button>
    </div>
  );
};

const Error = () => {
  const { error, reset_error } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        reset_error();
      }, 2000);

      // Clean up the timer when the component unmounts or error changes
      return () => clearTimeout(timer);
    }
  }, [error, reset_error]);

  return (
    <>
      {error ? <ErrorMessage onClose={reset_error} /> : null}
    </>
  );
};

export default Error;
