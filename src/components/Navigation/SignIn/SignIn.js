import React from 'react';
import Tilt from 'react-tilt';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signinmails: '',
            signinpass: ''
        };
    }


    onEmail = (event) => {
        this.setState({ signinmails: event.target.value });
    }
    onPass = (event) => {
        this.setState({ signinpass: event.target.value });
    }

    onSubmit = () => {
        fetch('https://git.heroku.com/damp-journey-26415.git/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signinmails,
                password: this.state.signinpass
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user[0].id) {
                    this.props.loadUser(user[0]);
                    this.props.onRoutechange('form');
                }
            })
    }

    render() {
        const { onRoutechange } = this.props;

        return (
            <div className="center">
                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5 0-20 white">
                    <main className="pa4 black-80">
                        <Tilt className="Tilt" options={{ max: 35 }} >
                            <div className="measure o-100 white">
                                <fieldset id="sign_up" className="ba b--transparent ph3 mh0">
                                    <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                        <input
                                            onChange={this.onEmail}
                                            className="pa2 input-reset ba bg-transparent hover-white w-100" type="email" name="email-address" id="email-address" />
                                    </div>
                                    <div className="mv3">
                                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                        <input
                                            onChange={this.onPass}
                                            className="b pa2 input-reset ba bg-transparent hover-white w-100" type="password" name="password" id="password" />
                                    </div>
                                </fieldset>
                                <div className="white">
                                    <input
                                        onClick={this.onSubmit}
                                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                        type="submit" value="Sign in" />
                                </div>
                                <div className="lh-copy mt3">
                                    <p onClick={() => onRoutechange('signup')} className="f6 link dim white b db">Sign up</p>
                                </div>
                            </div>
                        </Tilt>
                    </main>
                </article>


            </div>
        );
    }
}

export default SignIn;
