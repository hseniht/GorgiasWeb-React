import React from 'react';

export class TextTilesPanels extends React.Component {
  render (){
      return(
      <div>
          {
            this.props.todos.map((todo) => {
              return <div todo={todo} key = {todo.id}>

              {/*-----------or ----------
                this.props.todos.map((todo,i) => {
                  return <div todo={todo} key = {i}>*/}
                  <div className="column mcb-column one-third column_column" style={{margin: 1+"% "+ 1+"%"}}>
                      <div className="column_attr align_center tkPanels">
                          <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                              <div className="image_wrapper"><img className="scale-with-grid" src="tkImages/1_Discover_Gorgias.png" alt="" width="123" height="100" /> </div>
                          </div>
                          <hr className="no_line" style={{margin: 0+" auto "+10+"px"}}/>
                          <h4 className="tkFont-Bold tkFont-Theme">{todo.name}</h4>
                          <p style={{minHeight: 100+"px"}}>{todo.description}</p>
                      </div>
                  </div>

              </div>
            })
          }
      </div>
    );
  }
}
