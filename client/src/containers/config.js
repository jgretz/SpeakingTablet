import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { reduxForm } from 'redux-form';

import { Button } from '../controls';
import { loadConfig, saveConfig, markConfigSet } from '../actions';
import { logError } from '../support';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  label: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    margin: 20,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },
});

class ConfigClass extends Component {
  componentWillMount() {
    this.props.loadConfig().catch(logError);
  }

  configure = (form) => {
    this.props.saveConfig(form).then(this.props.markConfigSet()).catch(logError);
  }

  render() {
    const { handleSubmit, fields: { ipAddress, mdAddress } } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Configure
        </Text>
        <Text style={styles.label}>
          Presenting IP Address:
        </Text>
        <TextInput style={styles.input} {...ipAddress} autoCorrect={false} autoCapitalize="none" />
        <Text style={styles.label}>
          Markdown Address:
        </Text>
        <TextInput style={styles.input} {...mdAddress} autoCorrect={false} autoCapitalize="none" />
        <Button onPress={handleSubmit(this.configure)}>Configure</Button>
      </View>
    );
  }
}

ConfigClass.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,

  config: PropTypes.object,

  loadConfig: PropTypes.func.isRequired,
  saveConfig: PropTypes.func.isRequired,
  markConfigSet: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  config: state.config,
  initialValues: state.config,
});

export const Config = reduxForm({
  form: 'Config',
  fields: ['ipAddress', 'mdAddress'],
}, mapStateToProps, { loadConfig, saveConfig, markConfigSet })(ConfigClass);
