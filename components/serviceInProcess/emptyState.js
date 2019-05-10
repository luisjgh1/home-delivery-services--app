/**
 * Created by Humbee on 10/11/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'

class EmptyState extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/illustration_question_mark.png')}
                       style={styles.empty} resizeMode={'contain'}/>
                <Text style={styles.emptyTextBold}>
                    {strings.needAnythingElse}
                </Text>
                <Text style={styles.emptyText}>
                    {strings.requestAdd}
                </Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    empty: {
        width: 148,
        height: 105,
        marginTop: 40,
        marginBottom: 18,
    },
    emptyTextBold: {
        fontFamily: 'Muli-Bold',
        color: '#5a4ea3',
        fontSize: 16,
        paddingHorizontal: 16,
        marginBottom: 32,
        textAlign: 'center',
    },
    emptyText: {
        fontFamily: 'Muli-Regular',
        color: '#2b2d30',
        fontSize: 14,
        paddingHorizontal: 26,
        marginBottom: 5,
        textAlign: 'center',
    },
});

export default EmptyState