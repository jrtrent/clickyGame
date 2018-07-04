import React, {Component} from "react";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid/"
import pictures from "./pictures.json";
import "./App.css";


//Randomize picture array
function randomPictures(a) {
    for(let i = a.length - 1; i > 0; i--) {
        const j =Math.floor(Math.random()*(i+1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

class App extends Component {
    state = {
        pictures,
        currentScore: 0,
        topScore: 0,
        correctIncorrect:"",
        clicked: [],
    };

    handleClick = idx => {
        if (this.state.clicked.indexOf(idx) === -1) {
            this.handleIncrement();
            //concat 
            this.setState({ clicked: this.state.clicked.concat(idx) });
            console.log({clicked: this.state.clicked});
        } else {
            this.handleReset();
        }
    };

    handleIncrement = () => {
        const newScore =this.state.currentScore + 1;
        
        this.setState({
            currentScore: newScore,
            correctIncorrect: "You guessed correctly !"    
        });

        if (newScore >= this.state.topScore) {
            this.setState({ topScore: newScore});
        } 
        else if (newScore === 12) {
            this.setState({ correctIncorrect: "You win!"});
        }
        this.handleShuffle();
    };
    
    handleReset = () => {
        this.setState({
            currentScore: 0,
            topScore: this.setState.topScore,
            correctIncorrect: "You guessed incorrectly!",
            clicked: []
        });

        this.handleShuffle();
    };

    handleShuffle =() =>{
        let shufflePictures = randomPictures(pictures);
        this.setState({ pictures: shufflePictures });
    };
          

    
   
    
    render() {
        return (
            <Wrapper>
                <Navbar
                title="Clicky Game"
                score={this.state.currentScore}
                topScore={this.state.topScore}
                correctIncorrect={this.state.correctIncorrect}
                />
                <Title
                title="BIRDWATCH"
                subtitle="Click on an image to score points, but don't click on the same image twice!">
                </Title>
                
                {this.state.pictures.map(picture => (
                    <Grid>
                    
                    <PictureCard
                        key={picture.id}
                        handleClick={this.handleClick}
                        handleIncrement={this.handleIncrement}
                        handleReset={this.handleReset}
                        handleShuffle={this.handleShuffle}
                        id={picture.id}                        
                        image={picture.image_url}
                                               
                    />
               
                </Grid>
                ))}
           
            </Wrapper>
        );

    }
}

export default App;
