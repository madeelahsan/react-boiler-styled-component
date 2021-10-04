import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const context = {};

export const LoadingContext = createContext(context);

export const LoadingContextProvider = props => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider
      value={{
        isLoading: loading,
      }}>
      {props.children}
    </LoadingContext.Provider>
  );
};

LoadingContextProvider.propTypes = propTypes;
