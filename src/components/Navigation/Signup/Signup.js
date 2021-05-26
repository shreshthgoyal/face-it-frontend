import React from 'react';
import Tilt from 'react-tilt';


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            signupmails : '',
            signuppass: ''
        };
    }

    onName = (event) => {
        this.setState({signupname: event.target.value});
    }

    onEmail = (event) => {
        this.setState({signupmails: event.target.value});
    }
    onPass = (event) => {
        this.setState({signuppass: event.target.value});
    }
    
    onSubmit = () => {
        fetch('https://git.heroku.com/damp-journey-26415.git/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.signupname,
                email: this.state.signupmails,
                password: this.state.signuppass
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.id){
            this.props.loadUser(user);
            this.props.onRoutechange('signin');}

        })
    }

    render(){
    return (
        <div className="center">
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 0-20 white">
                <main className="pa4 black-80">
                <Tilt className="Tilt" options={{ max: 35 }} >
                    <div className="measure o-100 white">
                        <fieldset id="sign_up" className="ba b--transparent ph3 mh0">
                            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input onChange={this.onName} className="pa2 input-reset ba bg-transparent hover-white w-100" type="text" name="name" id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input onChange={this.onEmail} className="pa2 input-reset ba bg-transparent hover-white w-100" type="email" name="email-address" id="email-address" />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input  onChange={this.onPass} className="b pa2 input-reset ba bg-transparent hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="white">
                        <input
                             onClick={this.onSubmit}
                             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                             type="submit" value="Sign Up" />
                        </div>
                    </div>
                    </Tilt>
                </main>
            </article>

            
        </div>
    );
}
}

export default Signup;
