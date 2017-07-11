import store from './store'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'



const List = (props) => {
 return (
  <main className = 'main'>

   <form className = 'form' onSubmit = {props.submit}>
     <input className = 'input' onChange = {props.handleChange} type = 'text' placeholder = 'item' />
     <input className = 'submit'  type ='submit' />
   </form>
  </main>
 )
}
 
  

const mapPropsToState = (state)=> {
  return {
    item: state.item,
    test: state.test,
    list: state.list
  }
}

const dispatchPropsToState = dispatch => (
  bindActionCreators({

  }, dispatch)
)

export default connect(
  mapPropsToState,
  dispatchPropsToState
)(List)

// export default List