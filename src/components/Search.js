// @flow

import React from 'react';
import { StyleSheet, View } from 'react-native';
import DropDown from 'react-native-modal-dropdown';
import { SearchBar } from 'react-native-elements';

const OPTIONS = [
  'username',
  'uuid',
  'key',
  'job',
  'email',
  'phone',
  'company',
];

export type ReduxProps = {
  value: string,
  onChangeText: Function,
  onChangeFilterField: Function,
};

type Props = ReduxProps;

class Search extends React.PureComponent<Props> {

  onSelectOption = (index: number) => {
    const { onChangeFilterField } = this.props;
    onChangeFilterField(OPTIONS[index]);
  }

  onClear = () => {
    const { onChangeText } = this.props;
    onChangeText('');
  }

  render() {
    const { onChangeText } = this.props;

    return (
      <View style={styles.wrapper}>
        <SearchBar
          containerStyle={styles.search}
          lightTheme
          onChangeText={onChangeText}
          placeholder='filter ...'
        />
        <DropDown
          defaultIndex={0}
          defaultValue={OPTIONS[0]}
          style={styles.dropdown}
          options={OPTIONS}
          onSelect={this.onSelectOption}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    height: '100%',
  },
  search: {
    width: '70%',
    height: '100%',
  },
  dropdown: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
