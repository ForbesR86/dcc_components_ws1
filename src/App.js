// import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import DisplayName from './components/DisplayName/DisplayName';
import NamesList from './components/NamesList/NamesList';
import AlertUser from './components/AlertUser/AlertUser';
import SuperHeroTable from './components/SuperHeroTable/SuperHeroTable';

class App extends Component {
  constructor(props){
      super(props);
      this.person = [
          {firstName: 'Reggie', lastName: 'White'},
      ];
      this.names = [
          'Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly', 'Randy'
      ];
      this.superheroes = [
          {
              superheroId: 1,
              name: 'Batman',
              primaryAbility: 'Wealthy',
              secondarAbility: 'Rich'
          },
          {
              superheroId: 2,
              name: 'Superman',
              primaryAbility: 'Super strength',
              secondarAbility: 'Fly'
          },
          {
              superheroId: 3,
              name: 'Spiderman',
              primaryAbility: 'Spider senses',
              secondarAbility: 'Shoots web'
          },
          {
              superheroId:4,
              name: 'Hulk',
              primaryAbility: 'Smash',
              secondarAbility: 'not losing pants when transforming'
          },
          {
            superheroId:5,
            name: 'Randy',
            primaryAbility: 'Troubleshooting',
            secondarAbility: 'Making a mess'
        }
      ];

      this.state = {
          personNumber: 0,
      };
  }

  alertButton = ()=> {
          alert('devCodeCamp Rocks!')
  }

  createSuperhero =(newSuper)=> {
      this.superheroes.push(newSuper);
      this.setState({
          personNumber: this.superheroes.length - 1
      })
  }

  render (){
      return(
      <div className= "container-fluid">

          <DisplayName person={this.person[this.state.personNumber]} />
          <br></br>
          <NamesList names={this.names}/>
          <h1> Alert</h1>
          <AlertUser alert={this.alertButton}/>
          <h1>Super Heroes!</h1>
          <SuperHeroTable superheroes={this.superheroes}/>
      </div>
      )
  }
}


export default App;
