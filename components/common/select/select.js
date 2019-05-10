/**
 * Created by Humbee on 30/8/2017.
 */
'use strict';
import React from 'react';
import {
    StyleSheet,
    Modal,
    Text,
    Dimensions,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Platform,
    Picker,
    View
} from 'react-native';

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selectedKey: props.selectedKey
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            selectedKey: props.selectedKey
        });
    }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _onChange(key) {
        this.setState({selectedKey: key});
        this.props.onChange(key);
    }

    _close() {
        this.setState({modalVisible: false});
    }

    _renderAndroid() {
        const { options=this.props.models, selectedKey, onChange, style, labelStyle, placeholder, ...other } = this.props;

        return (
            <View style={[styles.selectContainer, style]} {...other}>
                <Text style={labelStyle} >
                    {options[this.state.selectedKey] ? options[this.state.selectedKey].label : placeholder}
                </Text>
                <Picker
                    selectedValue={this.state.selectedKey ? this.state.selectedKey : placeholder}
                    onValueChange={this._onChange.bind(this)}
                    style={[styles.androidPicker]}
                >
                    {Object.keys(options).map((key) => (
                        <Picker.Item
                            key={key}
                            value={key}
                            label={options[key].label}
                        />
                    ))}
                </Picker>
            </View>

        );
    }

    _renderIOS() {
        const { options=this.props.models, selectedKey, onChange, style, labelStyle, doneLabel, doneLabelColor, placeholder, ...other } = this.props;
        let modalBackgroundStyle = {
            backgroundColor: 'transparent',
        };
        let innerContainerTransparentStyle = null;
        return (
            <View style={[styles.selectContainer, style]} {...other}>
                <Text style={labelStyle} onPress={this._setModalVisible.bind(this, true)}>
                    {options[this.state.selectedKey] ? options[this.state.selectedKey].label : placeholder}
                </Text>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <TouchableWithoutFeedback onPress={this._setModalVisible.bind(this, false)}>
                        <View style={[styles.container, modalBackgroundStyle]}>
                            <View style={styles.pickerBar}>
                                <Text
                                    style={{color: doneLabelColor}}
                                    onPress={this._close.bind(this)}>
                                    {doneLabel || "完成"}
                                </Text>
                            </View>
                            <View onStartShouldSetResponder={ (evt) => true }
                                  onResponderReject={ (evt) => {} }
                                  style={[styles.innerContainer, innerContainerTransparentStyle]}>
                                <Picker selectedValue={this.state.selectedKey}
                                        onValueChange={this._onChange.bind(this)}
                                        style={styles.pickerIOS}
                                >
                                    {Object.keys(options).map((key) => (
                                        <Picker.Item
                                            key={key}
                                            value={key}
                                            label={options[key].label}
                                        />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        );
    }

    render() {
        return Platform.OS === 'ios' ? this._renderIOS() : this._renderAndroid();
    }

}

Select.propTypes = {
    options: React.PropTypes.object,
    selectedKey: React.PropTypes.string,
    labelStyle: Text.propTypes.style,
    onChange: React.PropTypes.func,
    placeholder: React.PropTypes.string,
};

Select.defaultProps = {
    placeholder: "",
};

let styles = StyleSheet.create({
    selectContainer: {
        flex: 1,
        // alignItems: 'flex-end',
        paddingVertical: 6.8,
        paddingRight:30
        // borderBottomWidth: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    innerContainer: {
        width: Dimensions.get('window').width,
        alignItems: 'center',
        paddingVertical: 100,
        borderWidth: 1,
        backgroundColor: '#ccc'
    },
    pickerBar: {
        width: Dimensions.get('window').width,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        padding: 7,
        backgroundColor: '#ececec'
    },
    pickerIOS: {
        marginTop: 0,
        width: Dimensions.get('window').width,
    },
    androidLabel: {
        alignSelf: 'center',
        justifyContent: 'center',
    },
    androidPicker: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
    }
});