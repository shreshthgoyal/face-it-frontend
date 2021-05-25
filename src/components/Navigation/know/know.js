import React from 'react';
import Tilt from 'react-tilt';

const Know = () => {
    return (

        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-100-m w-100-l mw7 center white">
            <div className="pa2 ph3-ns pb3-ns">
            <Tilt className="Tilt" options={{ max: 15 , transition: true,}} >
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0 underline">Clarifai API</h1>
                    </div>
                </div>
                <p className="f6 lh-copy measure mt2 white pa2">
                    Clarifai is the leading deep learning AI platform for computer vision, natural language processing, and automatic speech recognition. We help enterprises and public sector agencies gain insights into their unstructured image, video, text, and audio data.
                    </p>
                <p className="f6 lh-copy measure mt2 white pa1">
                    This platform is powered by state-of-the-art machine learning and comes with the broadest repository of pre-trained AI models to search, sort, and organize unstructured  data and help companies build turnkey AI solutions. 
                </p>
                <p className="f6 lh-copy measure mt2 white pa1">
                    This app uses Clarifai Face-Detection Model to detect Faces. 
                </p>
                </Tilt>
            </div>

            <div className="pa2 ph3-ns pb3-ns">
            <Tilt className="Tilt" options={{ max: 15, transition: true, }} >
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0 underline">ReactJS</h1>
                    </div>
                </div>
                <p className="f6 lh-copy measure mt2 white">
                    ReactJS is an OpenSource Javascript library which helps in building painless user interfaces or its components.
                    React can be used as a base in the development of single-page or mobile applications. It is a declarative, efficient, and flexible JavaScript library for building user interfaces. ... Your components tell React what you want to render – then React will efficiently update and render just the right components when your data changes
                </p>
                <p className="f6 lh-copy measure mt2 white">
                    ReactJS is used to build this app from base.
                </p>
                </Tilt>
            </div>
            <div className="pa2 ph3-ns pb3-ns">
            <Tilt className="Tilt" options={{ max: 15, transition: true, }} >
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0 underline">Point System</h1>
                    </div>
                </div>
                <p className="f6 lh-copy measure mt2 white">
                    You will be awarded points each time you try to detect a face in an image. Sign-Up and start detecting NOW!
                </p>
                <p className="f6 lh-copy measure mt2 white">
                    The model can detect only one face in an image at the moment.
                </p>
                </Tilt>
            </div>
        </div>

    );
}

export default Know;