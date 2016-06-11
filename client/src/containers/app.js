import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Markdown } from '../controls';
import { logError } from '../support';
import { loadMd } from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class AppClass extends Component {
  componentWillMount() {
    this.props.loadMd(this.props.config).catch(logError);
  }

  render() {
    return (
      <View style={styles.container}>
        <Markdown markdown={this.props.md} />
      </View>
    );
  }
}

AppClass.propTypes = {
  config: PropTypes.object,
  md: PropTypes.string,

  loadMd: PropTypes.func.isRequired,
};

const mapStateToProps = ({ config, md }) => ({ config, md });

export const App = connect(mapStateToProps, { loadMd })(AppClass);
