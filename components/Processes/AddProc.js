import AddCompIcon from '../../common/AddCompIcon';
import styles from './styles';
// import { connect } from 'react-redux';
import React from 'react';
import ProcForm from '../ProcForm/index';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

class AddProc extends React.Component {
    state = {
        index: 1
    }
    toggle = () => {
        this.setState({
            index: this.state.index + 1
        });
    }
    render() {
        const processes = [];

        for (let i = 0; i < this.state.index; i += 1) {
          processes.push(<ProcForm key={i} index={i} form={`proc${i}`} />);
        }

        return(
            <View style={styles.addProcContainer}>
                <Text style={styles.addProcText}>Add a new process</Text>
                {processes}
                <View style={styles.line}></View>
                <TouchableOpacity 
                    onPress={this.toggle}
                    style={styles.addProcOpenButton}
                >
                    <AddCompIcon />
                    <Text style={styles.addProcOpenText}>One more process</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Tools')}
                    style={styles.nextButton}
                >
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(AddProc);