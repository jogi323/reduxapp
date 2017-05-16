import React from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/loginAction';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
         this.setState({
      [e.target.name]: e.target.value
    });
}
handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
     this.props.login(this.state).then(
        (res) => this.props.history.push('/data'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
}
    render(){
      return(
          <div>
             <form className="col-md-6 col-md-offset-3">
                 <div className="form-group">
                    <label >Username : </label>
                    <input type="email" className="form-control"
                     name='username' ref="username" value={this.state.username} onChange={this.handleChange} required/>
                 </div>
                 <div className="form-group">
                    <label >Password : </label>
                    <input type="password" className="form-control"
                     name='password' ref="password" value={this.state.password} onChange={this.handleChange} required/>
                 </div>
                 <button type="submit" className="btn btn-primary btn-lg" onClick={this.handleSubmit}>Submit</button>
             </form>
          </div>
      )  
    }
}
Login.propTypes = {
  login: React.PropTypes.func.isRequired
}
Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null,{login})(Login);