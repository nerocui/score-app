import React, { Component } from 'react';
import {Players} from '../api/players';

export default class PlayerItem extends Component{


    render(){

        return (
            <div className='item'>
              <div className='player'>
                <div>
                  <h3 className='player__name'>{this.props.player.name}</h3>
                  <p className='player__stats'>{this.props.player.score} point(s).</p>
                </div>
                <div className='player__actions'>
                  <button className='button button--round' onClick={()=>{
                      let newScore = this.props.player.score + 1;
                      Players.update({_id:this.props.player._id}, {$set:{score: newScore}});
                    }}>+1</button>
                  <button className='button button--round' onClick={()=>{
                      let newScore = this.props.player.score - 1;
                      Players.update({_id:this.props.player._id}, {$set:{score: newScore}});
                    }}>-1</button>
                  <button className='button button--round' onClick={()=>{
                      Players.remove({_id:this.props.player._id});
                    }}>X</button>
                </div>
                
              </div>
              
              
            </div>);
    }
}