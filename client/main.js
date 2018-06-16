import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/components/TitleBar';
import AddPlayer from './../imports/components/AddPlayer';
import PlayerList from './../imports/components/PlayerList';
import App from './../imports/components/App';


Meteor.startup(
  ()=>{
    
    Tracker.autorun(
      ()=>{
        let players = [];
        players = Players.find({},{sort:{score:-1}}).fetch();
          ReactDom.render(<App players={players} title='Score Keep'/>, document.getElementById('app'));
      }
    );

    
  }
);
