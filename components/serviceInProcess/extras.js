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
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {strings} from '../../locale/index'

const food = [
  {
    key: 1,
    name: 'DAVINCI',
    image: 'http://www.student-rag.co.uk/wp-content/uploads/2016/02/bolognese.jpg'
  },
  {
    key: 2,
    name: 'Cuore',
    image: 'http://d2p4qauh5fa1j0.cloudfront.net/fotos/recetas/ampliacion/Z6BRucIGa4fRKIMETODOS2WoqKu8KfLS7ob.jpg'
  },
  {
    key: 3,
    name: "Tony Roma's",
    image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
  },
  {
    key: 4,
    name: "Tony Roma's",
    image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
  }, {
    key: 5,
    name: 'DAVINCI',
    image: 'http://www.student-rag.co.uk/wp-content/uploads/2016/02/bolognese.jpg'
  },
  {
    key: 6,
    name: 'Cuore',
    image: 'http://d2p4qauh5fa1j0.cloudfront.net/fotos/recetas/ampliacion/Z6BRucIGa4fRKIMETODOS2WoqKu8KfLS7ob.jpg'
  },
  {
    key: 7,
    name: "Tony Roma's",
    image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
  },
  {
    key: 8,
    name: "Tony Roma's",
    image: 'https://theseasonalgourmet.files.wordpress.com/2011/07/pasta.jpg'
  },
];

class Extras extends Component {
  _renderItem(item) {
    return (
      <View>
          <View style={styles.cardService}>
              <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                      x1
                  </Text>
              </View>
          </View>
          <View style={styles.name}>
              <Text style={styles.categoryText}>
                  Servicio
              </Text>
              <Text style={styles.nameText}>
                  Servicio
              </Text>
          </View>

        {/*<View style={styles.cardServiceSelected}>*/}
        {/*<View style={styles.badge}>*/}
        {/*<Text style={styles.badgeText}>*/}
        {/*x1*/}
        {/*</Text>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*<View style={styles.nameSelected}>*/}
        {/*<Text style={styles.categoryText}>*/}
        {/*Servicio*/}
        {/*</Text>*/}
        {/*<Text style={styles.nameText}>*/}
        {/*Servicio*/}
        {/*</Text>*/}
        {/*<View style={styles.row}>*/}
        {/*<View style={styles.left}>*/}
        {/*<Text style={styles.priceText}>*/}
        {/*Bs. 0000.00*/}
        {/*</Text>*/}
        {/*</View>*/}
        {/*<View style={styles.right}>*/}
        {/*<Image source={require('./images/icon_pending.png')}*/}
        {/*style={styles.pending} resizeMode={'contain'}/>*/}
        {/*</View>*/}
        {/*</View>*/}
        {/*</View>*/}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
          <View >
              <FlatList
                renderItem={({item}) => this._renderItem(item)}
                data={food}
                horizontal={true}
                style={{paddingHorizontal: 16}}
              />
          </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {},
  cardService: {
    backgroundColor: '#a49ae5',
    minWidth: 104,
    minHeight: 107,
    marginRight: 10,
    marginTop: 30,
    borderRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  name: {
    minWidth: 104,
    marginRight: 10,
    backgroundColor: '#7d70c4',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  nameText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Muli-Bold'
  },
  categoryText: {
    color: '#fff',
    fontSize: 9,
    fontFamily: 'Muli-SemiBold'
  },
  badge: {
    backgroundColor: '#41d399',
    position: 'absolute',
    top: 6,
    left: 6,
    padding: 1,
    paddingHorizontal: 9,
    borderRadius: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 9,
    fontFamily: 'Muli-Bold',
    textAlign: 'center',
  },



  cardServiceSelected: {
    backgroundColor: '#a49ae5',
    minWidth: 117,
    minHeight: 120,
    marginRight: 10,
    marginTop: 30,
    borderRadius: 3,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nameSelected: {
    minWidth: 117,
    marginRight: 10,
    backgroundColor: '#5a4ea3',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    paddingVertical: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    flex: 4,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  priceText: {
    color: '#ffbe47',
    fontSize: 13,
    fontFamily: 'Muli-Bold',
  },
  pending: {
    width: 11,
    height: 11,
    marginTop: 2,
    // marginLeft: 5,
  },
});

export default Extras