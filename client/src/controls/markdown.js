import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SimpleMarkdown from 'simple-markdown';

const styles = StyleSheet.create({
});

export class Markdown extends Component {
  componentWillMount() {
    const rules = SimpleMarkdown.defaultRules;
    const ruleOutput = SimpleMarkdown.ruleOutput(rules, 'react');

    this.reactOutput = SimpleMarkdown.reactFor(ruleOutput);
    this.parser = SimpleMarkdown.parserFor(rules);
  }

  componentWillReceiveProps(nextProps) {
    const parseTree = this.parser(`${nextProps.markdown}\n\n`, { inline: false });
    this.output = this.reactOutput(parseTree);
  }

  render() {
    return (
      <View>
        <Text>
          Josh
        </Text>
      </View>
    );
  }
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};
