import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import fire from './../config/firebase';

class Login extends Component {
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email : '',
            password: ''
        };
    }
   
    login(e){
        debugger;
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{}).catch((err) =>{
            console.log(err);
        })
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render() { 
        return (
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control"  placeholder="Enter password"/>
                    </div>
                    <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
                    <button type="button" onClick={this.signup} style={{marginLeft:'25px'}} className="btn btn-success">Sign Up</button>
                </form>
            </div>
        );
    }
}
 
export default Login;