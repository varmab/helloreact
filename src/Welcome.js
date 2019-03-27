import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return (
            <h1 onClick={this.updateClicks}>Welcome to {this.props.title} ({this.state.clicks}) - {this.props.year}</h1>
        )
    }
}

Welcome.propTypes={
    title:PropTypes.string.isRequired,
    year(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName] >2019){
          return new Error(`${propName} should not be later than 2019`)
        }
      }
}

Welcome.defaultProps={
    year:2019
}

export default Welcome;