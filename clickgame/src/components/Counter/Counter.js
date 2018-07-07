import React from "react";
import PictureCard from "./PictureCard"

class Counter extends React.Component {
    state = {
        count: 0
    
};


handleIncrement = () => {
    const Score = {count: this.state.count};
    if (Score !=0){
    this.setState({count: this.state.count + 1});
    } else {
        this.setState({count: this.state.count -1});
    }
};





render() {
    return (
        <div className="card">
        <PictureCard
        count={this.state.count}
        handleIncrement={this.handleIncrement}
        />
    </div>

    );

}
}

export default Counter;