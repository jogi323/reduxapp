import React from 'react';
import {connect} from 'react-redux';

class Data extends React.Component{
constructor(props){
    super(props);
    this.state={
        user:this.props.user.user
    }
  
}
// componentWillMount(){
//     this.arr.push(this.props.user.user);
//     console.log( this.arr);
//     this.setState({
//         user: this.arr
//     });
   
// }
    render(){
      return( 
          <div>
              <h1>{this.state.user.firstName}</h1>
          </div>
      )  
    }
}
function mapStateToProps(state) {
    console.log('Servicedetails mapStatetoprops =',state );
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Data);