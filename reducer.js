

const defaultState = {
 test: 'bryan'
}


const reducer = (state = defaultState, action) => {  
  switch(action.type){
    case 'CHANGE':
      return Object.assign({}, state, {item: action.data})
    default:
      return defaultState
  }
}


export default reducer