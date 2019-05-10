/**
 * Created by lgonzalez on 25/09/17.
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
    Modal
} from 'react-native'
import {strings} from '../../../locale/index'
import EmptyState from './emptyState'
import {goToProviders} from '../../common/commonHelper'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {ActionCreators} from "../../../actions"

class Pending extends Component {
  constructor(props){
    super(props)
    this.state = {
        requests: [],
        confirmedRequests: [],
        selectedRequest: {},
        visible: false
    }
  }

  async componentWillMount() {
    const fetch = ()=> {
      this.props.fetchRequests(this.props.userData.id)
      this.props.fetchConfirmedRequests(this.props.userData.id)     
    }
    await fetch()
    this.setState({requests: this.props.requests })
  }

  componentWillReceiveProps({requests, confirmedRequests}) {
    this.setState({requests, confirmedRequests})
  }

  _renderItem(item) {
    return (
      <TouchableWithoutFeedback onPress={async () => {
        await this.props.setRequest(item)
        goToProviders(this.props.navigator)
      }}>
          <View style={styles.cardService}>
              <View style={styles.cant}>
                  <Text style={styles.cantText}>0</Text>
              </View>
              <View style={styles.cancel}>
                  <TouchableOpacity onPress={()=> { this.setState({visible: true, selectedRequest: item})}  }>
                      <Image source={require('../images/icon_remove_wrong_cancel.png')}
                             style={[styles.icon]}
                             resizeMode={Image.resizeMode.contain}/>
                  </TouchableOpacity>
              </View>

              <View style={styles.name}>
                  <Text style={styles.categoryText}>
                    {item.category.title}
                  </Text>
                  <Text style={styles.nameText}>
                      Servicio
                  </Text>
              </View>
          </View>
      </TouchableWithoutFeedback>

    )
  }

  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
              <FlatList
                numColumns={3}
                renderItem={({item}) => this._renderItem(item)}
                data={this.state.requests}
                style={{padding: 5, paddingVertical: 20}}
              />

            {/*EMPTY STATE*/}
            {/*<EmptyState/>*/}
          </ScrollView>

          <Modal
            visible={this.state.visible}
            transparent={true}
            animationType={'fade'}
            onRequestClose={() => {
            }}
          >
              <View style={styles.modal}>
                  <View style={styles.content}>
                      <Text style={styles.titleModalText}>
                        {strings.cancelRequest}
                      </Text>

                      <Text style={styles.contentText}>
                        {strings.confirmCancel}
                      </Text>

                      <View style={styles.footer}>
                          <TouchableOpacity onPress={() => {
                            this.setState({
                              visible: false
                            })
                          }}>
                              <Text style={styles.no}>
                                  NO
                              </Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={async () => {
                            await this.props.cancelRequest(this.state.selectedRequest.id)
                            this.setState({
                              visible: false
                            })
                          }}>
                              <Text style={styles.si}>
                                {strings.yes.toUpperCase()}
                              </Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </Modal>
      </View>



    )
  }
}

let styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  cardService: {
    backgroundColor: '#87d1d5',
    width: 105,
    minHeight: 150,
    margin: 5,
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 3,
  },
  name: {
    position: 'absolute',
    bottom: 0,
    minHeight: 43,
    width: 105,
    backgroundColor: '#0fa4ac',
    justifyContent: 'center',
    paddingHorizontal: 8,
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
  cant: {
    position: 'absolute',
    left: 6,
    top: 6,
  },
  cantText: {
    color: '#fff',
    fontSize: 9,
    fontFamily: 'Muli-Bold',
    padding: 2,
    paddingHorizontal: 6,
    backgroundColor: '#5a4ea3',
    borderRadius: 3,
  },
  cancel: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
  icon: {
    width: 14,
    height: 14,
  },

  emptyContainer: {
    marginTop: 70,
    alignItems: 'center'
  },
  emptyIcon: {
    width: 152,
    height: 102,
  },
  noRequestText: {
    paddingTop: 25,
    paddingHorizontal: 60,
    textAlign: 'center',
    color: '#5a4ea3',
    fontSize: 16,
    fontFamily: 'Muli-Bold',
    lineHeight: 20,
  },
  manageRequestText: {
    paddingTop: 32,
    paddingHorizontal: 44,
    textAlign: 'center',
    color: '#2b2d30',
    fontSize: 14,
    fontFamily: 'Muli-Regular',
    lineHeight: 20,
  },
  buttonNext: {
    backgroundColor: '#c7e00b',
    padding: 10,
    marginTop: 16,
    marginBottom: 50,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    minWidth: 290,
    height: 36,
  },
  btnText: {
    color: '#fff',
    fontFamily: 'Muli-Bold',
    fontSize: 16,
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  titleModalText: {
    fontFamily: 'Muli-Bold',
    fontSize: 20,
    color: '#2b2d30',
    marginBottom: 12,
  },
  contentText: {
    fontFamily: 'Muli-Regular',
    fontSize: 16,
    color: '#2b2d30',
    marginBottom: 36,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
  },
  no: {
    fontFamily: 'Muli-Bold',
    fontSize: 14,
    color: '#f76954',
    marginRight: 45,
  },
  si: {
    fontFamily: 'Muli-Bold',
    fontSize: 14,
    color: '#41d299',
  }
});

const MapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

const MapStateToProps = ({ dashboard, login }) => {
  return {
    requests: dashboard.requests,
    confirmedRequests: dashboard.confirmedRequests,
    userData: login.userData
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Pending)