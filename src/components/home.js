import React, {Component} from 'react';
import fire from '../config/firebase'
class Home extends Component {
    state = {  }

    logout = () => {
        fire.auth().signOut();
    }
    render() { 
        return ( 
            <div className="col-md-6">
                <h1>Welcome to the home page.</h1>
               <button type="button" className="btn btn-primary" onClick={this.logout}>Logout</button>
            </div>
         );
    }
}
 
export default Home;