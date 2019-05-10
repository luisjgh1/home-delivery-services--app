/**
 * Created by Humbee on 26/9/2017.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native'
import Accordion from '../collapsible/accordion'
import CheckBox from './checkbox/checkBox'
import {strings} from '../../../locale/index'
import { goToRequestWizard3 } from '../../common/commonHelper'

const SECTIONS = [
    {
        backgroundColor: '#0fa4ac',
        title: 'Manicure',
        content: 'Secado',
        id: 'SC001'
    },
    {
        backgroundColor: '#c7e00b',
        title: 'Pedicure',
        content: 'Lorem ipsum...',
        id: 'SC002'
    },
    {
        backgroundColor: '#5a4ea3',
        title: 'Estilismo',
        content: 'Lorem ipsum...',
        id: 'SC003'
    }
];

const food = [
  {
    key: 1,
    name: 'Secado',
    backgroundColor: '#0fa4ac',
    id: 'S001'
  },
  {
    key: 2,
    name: 'Secado',
    backgroundColor: '#0fa4ac',
    id: 'S002'
  },
  {
    key: 3,
    name: "Secado",
    backgroundColor: '#0fa4ac',
    id: 'S003'
  },
  {
    key: 4,
    name: 'Secado',
    backgroundColor: '#0fa4ac',
    id: 'S004'
  },
]

class Services extends Component {
  constructor() {
    super()
    this._renderContent = this._renderContent.bind(this)
    this._renderItem = this._renderItem.bind(this)
    this.state = {
      subCategories: SECTIONS,
      services: food.map(e=> ({...e, quantity: 0, checked: true}))
    }
  }

  _renderHeader(section) {
    return (
      <View style={styles.card}>
          <View style={styles.left}>
              <View style={[styles.iconContainer, {backgroundColor: section.backgroundColor}]}>
                  <Image
                    source={require('../images/icon_manicure.png')}
                    style={styles.iconService}
                    resizeMode={Image.resizeMode.contain}
                  />
              </View>
          </View>
          <View style={styles.center}>
              <Text style={styles.titleText}>{section.title}</Text>
              <Text style={styles.descripText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </Text>
          </View>
          <View style={styles.right}>
              <Image
                source={require('../images/arrow_down_expand.png')}
                style={styles.icon}
                resizeMode={Image.resizeMode.contain}
              />
          </View>
      </View>
    );
  }

  _renderContent(item, section) {
    console.log(section)
    return (
      <FlatList
        renderItem={({item}) => this._renderItem(item, section)}
        data={this.state.services}
      />
    );
  }

  _renderItem(item) {
    return (
      <View style={styles.cardExpanded}>
          <View style={styles.leftExpanded}>
              <CheckBox
                style={styles.checkbox}
                isChecked={item.checked}
                onChange={(checked) => console.log('I am checked', checked)}
                onClick={(checked) => console.log('I am checked', checked)}
              />
              <View style={[styles.iconContainer, {backgroundColor: item.backgroundColor}]}>
                  <Image
                    source={require('../images/icon_manicure.png')}
                    style={styles.iconService}
                    resizeMode={Image.resizeMode.contain}
                  />
              </View>
          </View>
          <View style={styles.centerExpanded}>
              <Text style={styles.titleText}>{item.name}</Text>
          </View>
          <View style={styles.rightExpanded}>
              <TouchableOpacity>
                  <Image
                    source={require('../images/icon_remove_disabled.png')}
                    style={styles.icon}
                    resizeMode={Image.resizeMode.contain}
                  />
              </TouchableOpacity>
              <View>
                  <TextInput
                    style={styles.input}
                    underlineColorAndroid={'#dedede'}
                    keyboardType={'numeric'}
                    value={item.quantity.toString()}
                  />
              </View>
              <TouchableOpacity onPress={()=> {
                let newServices = [...this.state.services]
                newServices.filter(e=> e.id === item.id)[0].quantity += 1
                this.setState({services: newServices})  
              }}>
                  <Image
                    source={require('../images/icon_add.png')}
                    style={styles.icon}
                    resizeMode={Image.resizeMode.contain}
                  />
              </TouchableOpacity>
          </View>
      </View>
    )
  }

  render() {
    return (
      <View>
          <Accordion
            sections={SECTIONS}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
          <TouchableWithoutFeedback onPress={()=> {
              this.props.setServices(this.state.services.filter(e=> e.quantity > 0))
              goToRequestWizard3(this.props.navigator)
            }}>
              <View style={styles.buttonNext}>
                  <Text style={styles.btnText}>
                    {strings.continue}
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
  card: {
    flexDirection: 'row',
    minHeight: 100,
    alignItems: 'center',
    elevation: 7,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
    // marginBottom: 16,
  },
  cardExpanded: {
    flexDirection: 'row',
    minHeight: 100,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 2,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  leftExpanded: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerExpanded: {
    flex: 2,
    marginLeft: -16
  },
  rightExpanded: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconService: {
    width: 40,
    height: 40,
  },
  titleText: {
    color: '#2b2d30',
    fontSize: 16,
    fontFamily: 'Muli-Bold',
  },
  descripText: {
    color: '#2b2d30',
    fontSize: 14,
    fontFamily: 'Muli-Regular'
  },
  icon: {
    width: 19,
    height: 19,
  },
  checkbox: {
    position: 'absolute',
    left: 0
  },
  input: {
    height: 60,
    textAlign: 'center',
    color: '#2b2d30',
    fontSize: 16,
    fontFamily: 'Muli-Regular',
  },
  buttonNext: {
    backgroundColor: '#c7e00b',
    padding: 10,
    marginTop: 30,
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