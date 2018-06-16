import React, { Component } from 'react';
import PlayerItem from './PlayerItem';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component{

    constructor(props){
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList(list){
        if(list.length === 0){
            return (
                <div className='item'>
                    <p className='item__message item__message--empty'>Please add some players</p>
                </div>
            );
        }
        return list.map(
            (p)=>{return <PlayerItem key={p._id} player={p}/>;}
        );
    }

    render(){
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderList(this.props.players)}
                </FlipMove>
            </div>
        );
    }
}