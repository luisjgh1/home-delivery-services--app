/**
 * Created by EddieMaster on 28/07/2017.
 */
export default function createReducer(initialState,handler){
    return function reducer(state = initialState,action){
        if(handler.hasOwnProperty(action.type)){
            return handler[action.type](state, action)
        }else{
            return state
        }
    }
}
