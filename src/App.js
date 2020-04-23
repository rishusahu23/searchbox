import React from 'react';
import Items from './Items'
import './App.css'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      datas:[],
      query:"",
      filterData:[]
    }

  }

fetchData=()=>{
  fetch("https://jsonplaceholder.typicode.com/comments")
  .then(response=>response.json())
  .then(
    data=>{this.setState({datas:data,filterData:data})}
    )
  
  
}


  componentDidMount(){
    this.fetchData()
    
  }

  handleInputChange=(event)=>{
        const query=event.target.value;
        this.setState(prev=>{
          const filterData=prev.datas.filter(data=>{
            return data.name.toLowerCase().includes(query.toLowerCase())
          })
          return{filterData:filterData,query:query}
        })
  }

  render(){

    const newList=this.state.filterData.map(data=>
      <Items id={data.id} data={data} /> )

    return(
      <div>


         <div className="searchbox">
             <form className="form">
                <input
                  placeholder="Search for..."
                  value={this.state.query}
                  type="text"
                  onChange={this.handleInputChange}
                />
             </form>

         </div>


            <div className="flex-container">
               {newList}
            </div>
      </div>
      )
  }
}


export default App;
