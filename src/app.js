import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Image from "./components/image";
import Images from "./components/images.json"
import aang from "./images/aang.jpg"
import zuko from "./images/zuko.jpg"
import katara from "./images/katara.jpg"
import sokka from "./images/sokka.jpg"
import toph from "./images/toph.jpg"
import azula from "./images/azula.jpg"
import iroh from "./images/iroh.jpg"
import ozai from "./images/ozai.jpg"
import mai from "./images/mai.jpg"
import tylee from "./images/tylee.jpg"
import appa from "./images/appa.jpg"
import momo from "./images/momo.jpg"
let score = 0


class App extends Component {
    state = {
        picked: [],
        correct: 0,
        topscore: 0,
        message: 'Please Click on an Image to Begin the Game!'
    };


    shuffleImages = (arr) => {
        let imageArr = Images;
        for (let i = imageArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [imageArr[i], imageArr[j]] = [imageArr[j], imageArr[i]];
        }
        return imageArr
    }


    nextImage = (name) => {
        switch (name) {
            case "aang":
                return `${aang}`
            case "zuko":
                return `${zuko}`
            case "katara":
                return `${katara}`
            case "sokka":
                return `${sokka}`
            case "toph":
                return `${toph}`
            case "azula":
                return `${azula}`
            case "iroh":
                return `${iroh}`
            case "ozai":
                return `${ozai}`
            case "mai":
                return `${mai}`
            case "tylee":
                return `${tylee}`
            case "appa":
                return `${appa}`
            case "momo":
                return `${momo}`
            default:
                return `${aang}`
        }
    }


    imagePicked = (name) => {
        let picked = this.state.picked;
        if (picked.indexOf(name) === -1) {
            this.setState({
                picked: picked.concat(name),
                correct: this.state.correct + 1,
                topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
                message: "Correct!"
            })
            score++
            this.shuffleImages();
            if (score === 12) {
                alert("You saved the world! Click on an image to restart.")
                score = 0;
                this.setState({
                    correct: 0,
                    picked: []
                })
            }
        }


        else {
            this.setState({
                message: "Incorrect :( Click again to restart!",
                correct: 0,
                picked: []
            })
            score = 0;
        }
    }


    render() {
        return (
            <div>
                <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message} />
                <Header />
                <Main>
                    {this.shuffleImages(Images).map(image => (
                        <Image src={this.nextImage(image.name)} name={image.name} key={image.name} imagePicked={this.imagePicked} />
                    ))}
                </Main>
            </div>
        );
    }
}


export default App;