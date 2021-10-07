import React, {Component} from 'react';
import axios from 'axios';

class JokesAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
         }
    }

//https://v2.jokeapi.dev/joke/Programming?type=twopart&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5'
componentDidMount() {
    axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5')
      .then(res => {
        const newJokes = res.data;
        this.setState({ 
            jokes: newJokes
         });
      })
      console.log(this.state.jokes)
  }

    // {
    //     "category": "Programming",
    //     "type": "twopart",
    //     "setup": ".NET developers are picky when it comes to food.",
    //     "delivery": "They only like chicken NuGet.",
    //     "flags": {
    //         "nsfw": false,
    //         "religious": false,
    //         "political": false,
    //         "racist": false,
    //         "sexist": false,
    //         "explicit": false
    //     },
    //     "id": 49,
    //     "safe": true,
    //     "lang": "en"
    // }
    render() { 
        return(
            <h1>{this.state.jokes}</h1>
        );
    }
}
 
export default JokesAPI;