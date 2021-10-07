import React, { Component } from 'react';
class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.idnum,
            name: '',
            primaryAbility: '',
            secondarAbility: '',
         }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSuper(this.state)
    }


    // superheroId: 1,
    // name: 'Batman',
    // primaryAbility: 'Wealthy',
    // secondarAbility: 'Rich'
    
    render() { 
        return ( 
            
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input name="name" onChange={this.handleChange} value={this.state.name} />
                <label>Primary Ability:</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                <label>Secondary Ability</label>
                <input name="secondarAbility" onChange={this.handleChange} value={this.state.secondarAbility} />
                <button type="submit">Add Superhero!</button>
            </form>
         );
    }
}
 
export default SuperheroCreateForm;