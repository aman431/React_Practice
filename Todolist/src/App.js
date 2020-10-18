import React from 'react';
import './App.css';
import Input from './components/Input/';
import Todolist from './components/Todolist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newItems:'',
      list:[]
    }
  }

  UpdateItem = (key,value) => {
    this.setState({
      [key]: value
    });
    console.log(this.state.newItems);
  }

  addItem = () => {
    const newItems = {
      id: 1+Math.random(),
      value: this.state.newItems.slice()
    }

    const list = [...this.state.list];
    list.push(newItems);
    this.setState({
      list,
      newItems:''
    });
    console.log(list);
  
  }

  deleteItem = (id) => {
    const list = [...this.state.list];
    const Updatelist = list.filter(item => item.id !== id)
    this.setState({
      list:Updatelist
    });
  }
  render(){
    const {newItems, list} = this.state;
    return (
      <div className="App">
        <Input 
        newItems = {newItems}
        UpdateItem = {this.UpdateItem}
        addItem = {this.addItem}
        />
        <Todolist 
        list={list}
        deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
