import React from 'react';
import {TextTilesPanels} from '../sectionTemplates/TextTilesPanels.jsx';

export class WhyBecomeGorgias extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      text:'',
      age:'',
      todos: [
                {
                  id:1,
                  name:'Discoverr Gorgias',
                  description: "Nulla accumsan consequat magna, vel faucibus tellus vulputate ac. Aliquam consectetur feugiat diam, id porta putra madre"
                },

                {
                  id:2,
                  name:'Storyland',
                  description: "Vivamus a nibh magna. Sed porttitor vehicula purus, at congue sem feugiat at. Pellentesque rutrum tempor tincidunt"
                },

                {
                  id:3,
                  name:'Touch For Love',
                  description: "Nunc pharetra erat magna in tempor risus tincidunt tristique. Maecenas bibendum mauris eu eros convallis sagittis"
                },

                {
                  id:4,
                  name:'iFeel',
                  description: "Justo in erat luctus euismod. Phasellus et orci ac risus mattis pretium at quis justo. Morbi molestie pulvinar."
                },

                {
                  id:5,
                  name:'Stay On',
                  description: "Justo in erat luctus euismod. Phasellus et orci ac risus mattis pretium at quis justo. Morbi molestie pulvinar."
                },

                {
                  id:6,
                  name:'Hotspot',
                  description: "Justo in erat luctus euismod. Phasellus et orci ac risus mattis pretium at quis justo. Morbi molestie pulvinar."
                }
            ]
    }
  }

  render (){
    return (
              <div className="section mcb-section tkSection-padding bg-color-2">
                  <div className="section_wrapper mcb-section-inner">
                      <div className="wrap mcb-wrap one  valign-top clearfix">
                          <div className="mcb-wrap-inner">
                              <div className="column mcb-column one-second column_column" style={{float:"none",marginTop: 30+"px",marginLeft:"auto", marginRight: "auto",textAlign:"center"}}>
                                  <div className="column_attr clearfix">
                                      <h2 className="tkFont1" style={{color:"white",}}>Why become Gorgias?</h2>
                                      <hr className="no_line" style={{margin:0+" auto "+30+"px"}}/>
                                      <p style={{color: "#eee"}}>
                                          Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="wrap mcb-wrap one  valign-top clearfix" style={{margin: 50+"px auto"}}>
                          <div className="mcb-wrap-inner">

                              <TextTilesPanels todos={this.state.todos}/>

                          </div>
                      </div>
                  </div>
              </div>
    );
  }
}
