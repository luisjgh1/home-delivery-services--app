/**
 * Created by Humbee on 13/11/2017.
 */
var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
} = ReactNative;

var Style = StyleSheet.create({
    radioForm: {
    },

    radioWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        // alignSelf: 'center',
        marginBottom: 20,
    },
    radio: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        alignSelf: 'center',
        borderColor: '#000',
        borderRadius: 30,
    },

    radioLabel: {
        paddingLeft: 10,
        lineHeight: 20,
        marginTop: 0,
    },

    radioNormal: {
        borderRadius: 10,
    },

    radioActive: {
        width: 10,
        height: 10,
        backgroundColor: '#000',
    },

    labelWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },

    labelVerticalWrap: {
        flexDirection: 'column',
        paddingLeft: 10,
    },

    labelVertical: {
        paddingLeft: 0,
    },

    formHorizontal: {
        flexDirection: 'row',
    },
});

module.exports = Style;