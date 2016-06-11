import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Config } from './config';
import { App } from './app';

const RootClass = (props) => {
  if (props.configSet) {
    return <App />;
  }

  return <Config />;
};

RootClass.propTypes = {
  configSet: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ configSet }) => ({ configSet });

export const Root = connect(mapStateToProps)(RootClass);
