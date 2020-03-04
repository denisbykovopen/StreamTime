import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import SearchFormView from "./SearchForm/SearchFormRF";
import ProcessButton from "../common/ProcessButton";

class HomeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggested: props.suggested,
    //   filtered: [],
        name: null,
        time: null,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "----- homeSearch derived props:",
      nextProps.suggested,
      nextProps.suggested.length
    );
    if (prevState.suggested !== nextProps.suggested) {
      return {
        suggested: nextProps.suggested
        // filtered: []
      };
    }
    return { suggested: nextProps.suggested };
  }
  handleSuggestedChange = ({ name }) => {
    const { suggested } = this.props;
    const { filtered } = this.state;

    suggested.length > 0 &&
      suggested.map(item => {
        return Object.keys(item).map(atom => {
          const process = item[atom].processName;
          const processDetails = item[atom];

          if (String(item[atom].processName) === String(name)) {

            // let formatObject = { [`${process}`]: processDetails };
            // return this.setState(() => ({
            //   filtered: formatObject
            // }),
            // () => console.log(
            //     "----- homeSearch handler setState:",
            //     this.state.filtered
            // )
            // );
            return this.setState({
                name: item[atom].processName,
                time: item[atom].processTime
            })
          }

          //   return this.setState(
          //     prevState => ({
          //       filtered: [...prevState.filtered, formatObject]
          //     }),
          //     () => console.log("----- homeSearch state:", this.state.filtered)
          //   );
        });
      });
  };
  render() {
    const {name, time} = this.state;
    return (
      <View>
        <SearchFormView
          onChange={this.handleSuggestedChange}
          form={"homeSearch"}
        />
        {name && 
            <ProcessButton 
                processName = {name}
                processTime = {time}
            />
        }
      </View>
    );
  }
}

export default HomeSearch;
