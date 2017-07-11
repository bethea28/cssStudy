
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import store from './store'
import List from './list'
import  './styles.scss'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: '',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  handleChange(arg){
    // console.log(arg)
    this.setState({item: arg})
    console.log(this.state.item)
  }
  handleSubmit(event){
    event.preventDefault()
    this.setState({list: this.state.list.concat(this.state.item)})
    console.log(this.state.list)
  }

  render(){
    return (
      <main className = "appMain" >
        <div className = 'listDiv'>
          <List  submit = {this.handleSubmit} handleChange = {(event)=>{this.handleChange(event.target.value)}}/>
        </div>

        <div className = 'ulContainerTwo'>
          <article className = 'ulContainer'>
            <ul>
            {this.state.list && this.state.list.map((ele,key)=>{
              return <li className ='li' key = {key}> {ele} </li>
            })}
            </ul>
          </article>
        </div>
      </main>
      
    )
  }
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
)(App)


// export default App