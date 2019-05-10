/**
 * Created by Humbee on 25/9/2017.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native'
import {strings} from '../../../locale/index'
import {goToRequestWizard2} from '../../common/commonHelper'

class Services extends Component {
  constructor() {
    super()
    this.state = {
      services: [
        { name: 'Cuidado Personal',
          key: 1,
          id: 'C001',
          icon: require('./images/icon_cuidado_personal.png'),
          selected: false
        },
        {
          name: 'Cuidado del hogar',
          key: 2,
          id: 'C002',
          icon: require('./images/icon_cuidado_hogar.png'),
          selected: false
        },
        {
          name: 'Cuidado de vehiculos',
          key: 3,
          id: 'C003',
          icon: require('./images/icon_cuidado_vehiculo.png'),
          selected: false
        },
        {
          name: 'Cuidado de mascotas',
          key: 4,
          id: 'C004',
          icon: require('./images/icon_cuidado_mascotas.png'),
          selected: false
        },
      ]
    }
  }
  _renderItem(item) {
    return (
      <TouchableOpacity
        style={{marginBottom: 10}}
        onPress={()=> {
          this.setState({
            services: this.state.services.map(e=> {
              return (e.key === item.key ? {...e, selected: !e.selected} : {...e, selected: false})
            })
          }, ()=> this.props.setCategory(this.state.services.filter(e=> e.selected)[0]))
        }}
      >
          <View style={item.selected ? styles.cardServiceSelected : styles.cardService}>
              <Image source={item.icon} resizeMode={'contain'}
                     style={styles.icon}
              />
          </View>
          <View style={item.selected ? styles.nameSelected : styles.name}>
              <Text style={styles.nameText}>
                { item.name }
              </Text>
          </View>
      </TouchableOpacity>


    )
  }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
              <FlatList
                numColumns={2}
                renderItem={({item}) => this._renderItem(item)}
                data={this.state.services}
                style={{padding: 30}}
              />
          </ScrollView>
          <TouchableWithoutFeedback onPress={()=> goToRequestWizard2(this.props.navigator)}>
              <View style={styles.buttonNext}>
                  <Text style={styles.btnText}>
                    {strings.continue.toUpperCase()}
                  </Text>
                  <Image
                    source={require('../images/icon_arrow_right.png')}
                    style={styles.nextIcon}
                    resizeMode={Image.resizeMode.contain}
                  />
              </View>
          </TouchableWithoutFeedback>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardService: {
    backgroundColor: '#d5eff1',
    minWidth: 145,
    minHeight: 152,
    marginHorizontal: 5,
    marginTop: 0,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  icon: {
    width: 100,
    height: 100,
  },
  name: {
    height: 43,
    minWidth: 145,
    marginHorizontal: 5,
    backgroundColor: '#abdfe2',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  cardServiceSelected: {
    backgroundColor: '#87d1d5',
    minWidth: 145,
    minHeight: 152,
    marginHorizontal: 5,
    marginTop: 0,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  nameSelected: {
    height: 43,
    minWidth: 145,
    marginHorizontal: 5,
    backgroundColor: '#0fa4ac',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
  nameText: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'Muli-ExtraBold'
  },
  buttonNext: {
    backgroundColor: '#c7e00b',
    padding: 10,
    marginTop: 15,
    marginBottom: 50,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    minWidth: 290,
    height: 36,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Muli-ExtraBold',
    fontSize: 16,
  },
  nextIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
});

export default Services