import React, {Component} from 'react';
import axios from 'axios';

class JokesAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jokes: []
         }}
    

//https://v2.jokeapi.dev/joke/Programming?type=twopart&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5'
componentDidMount() {
    axios.get(`https://v2.jokeapi.dev/joke/Programming?type=twopart&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5`)
      .then(res => {
        const newjokes = res.data.jokes;
        console.log(newjokes)
        this.setState({ 
            jokes: newjokes });
      })
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
        console.log(this.state.jokes) 
        return(
            <dl>
            {/* https://stackoverflow.com/questions/23840997/how-can-i-return-multiple-lines-jsx-in-another-return-statement-in-react */}
            {this.state.jokes.map(id => (
                <React.Fragment key={id.id}>
                <dt>{id.setup}</dt>
                <dd>{id.delivery}</dd>
                </React.Fragment>
                ))}
            </dl>
        );
    }
}
 
export default JokesAPI;