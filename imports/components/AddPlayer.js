import React, { Component } from 'react';
import {Players} from '../api/players';

export default class AddPlayer extends Component{
    constructor(props){
		super(props);

		//use the state to display the input value instead of the other way around
		//thus we need to initialize the state term to empty string
		this.state = {term:''};

		//whenever callback is just a function without fat arrow, and the function calls this
		//we have to bind the function to this.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event){
		//console.log(event.target.value);
		this.setState({term:event.target.value});
	}

    onFormSubmit(event){
        event.preventDefault();
        let playerName = event.target.playerName.value;
        if(playerName != ''){
            Players.insert({
            name:playerName,
            score:0
            });
        }
        this.setState({term:''});
    }

    render(){

        return (
            <div className='item'>
                    <form className='form' onSubmit={this.onFormSubmit}>
                        <input 
                            className='form__input'
                            placeholder='player name' 
                            type='text' 
                            name='playerName' 
                            value={this.state.term}
						    onChange={this.onInputChange}/>
                        <button className='button'>Add Player</button>
                    </form>
            </div>
        );
    }
}