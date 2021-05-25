import React, { Component } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Navigation/Logo/logo';
import Rank from './components/Navigation/rank/rank';
import Form from './components/Navigation/form/Form';
import Know from './components/Navigation/know/know';
import FaceRecon from './components/Navigation/FaceRecon/FaceRecon';
import SignIn from './components/Navigation/SignIn/SignIn';
import Home from './components/Navigation/Home/Home';
import Signup from './components/Navigation/Signup/Signup';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'bf067819267440efb05bba3ca386da28'
});

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'home',
  isSigned: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  },
  
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }



  loadUser = (data) => {
    this.setState(
      {
        user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }
      })
  }


  face = (value) => {

    var facebox = value.outputs[0].data.regions[0].region_info.bounding_box;

    var image = document.getElementById('inputImage');

    var width = Number(image.width);
    var height = Number(image.height);
    return {
      leftCol: facebox.left_col * width,
      topRow: facebox.top_row * height,
      rightCol: width - (facebox.right_col * width),
      bottomRow: height - (facebox.bottom_row * height),
    }

  }



  diplayfacebox = (box) => {
    this.setState({ box: box });
  }


  inputchange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        (response) => {
          if (response) {
            fetch('http://localhost:3000/image', {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                id: this.state.user.id
              })
            })
              .then(response => response.json())
              .then(count => {
                this.setState(
                  Object.assign(this.state.user, { entries: count })
                )
              })

          }
          this.diplayfacebox(this.face(response));
        }
      )
      .catch(err => console.log(err))
  }


  onRoutechange = (route) => {
    if (route === 'signout' || route === 'home') { this.setState(initialState) }
    if (route === 'form') { this.setState({ isSigned: true }) }
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={{
            polygon: {
              enable: true,
              type: 'inside',
              move: {
                radius: 20
              },
              scale: 5,
            }
          }} />
        <Navigation onRoutechange={this.onRoutechange} isSigned={this.state.isSigned} />
        <Logo />

        {this.state.route === 'form'
          ?
          <div>
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <Form
              inputchange={this.inputchange}
              onSubmit={this.onSubmit}
              onInfo={this.onInfo}
              />
            <FaceRecon box={this.state.box}  imageUrl={this.state.imageUrl}  />
          </div>
          : (this.state.route === 'signin'
            ?
            <SignIn loadUser={this.loadUser} onRoutechange={this.onRoutechange} />
            :
            (this.state.route === 'home'
              ?
              <div>
                <Home onRoutechange={this.onRoutechange} />
              </div>
              :
              (this.state.route === 'know'
                ?
                <Know />
                :
                <Signup onRoutechange={this.onRoutechange} loadUser={this.loadUser} />
              )
            )

          )

        }
      </div>
    );
  }
}

export default App;

