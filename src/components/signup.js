import React from 'react';
import {connect} from 'react-redux';

class Signup extends React.Component{
constructor(props){
    super(props);
    console.log(this.props.user.user);
}
getState(){
    var data=this.props.user.user;
    console.log(data);
}
    render(){
      return(
          <div>
              <h1>{this.props.user.user.firstName}</h1>
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

export default connect(mapStateToProps)(Signup);