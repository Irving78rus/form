import {TEXT_VALUE,TEL_VALUE,EMAIL_VALUE,ISSUB} from './types'
  
const initalState = {
    Text: '',
    tel : '',
    email:'',
    isSub: false
    
}
export function inputReducer(state  = initalState, action ) {

    switch (action.type) {
        case TEXT_VALUE: {
            return { ...state, Text: action.Text  }
        }
        case TEL_VALUE: {
            return { ...state, tel: action.tel}
        }
        case EMAIL_VALUE: {
            return { ...state, email: action.email}
        }
        case ISSUB: {
            return { ...state, isSub: action.isSub}
        }
         
        default:
            return state
    }
}
export function dispatchSub (isSub) {
    return {
        type: ISSUB,
        isSub
    }
}
export function dispatchText (Text) {
    return {
        type: TEXT_VALUE,
        Text
    }
}export function dispatchTel (tel) {
    return {
        type: TEL_VALUE,
        tel
    }
}export function dispatchEmail (email) {
    return {
        type: EMAIL_VALUE,
        email
    }
}