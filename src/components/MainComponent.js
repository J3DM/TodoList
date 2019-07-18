import React from "react"

import ListItem from "./elements/ListItem"

class MainComponent extends React.Component{
    constructor(){
        super()
        this.state={
            newTask:"",
            items:[{key:1,name:"uno",compleated:false},
            {key:2,name:"dos",compleated:true}],
            modalItem:{
                key:0,name:"",compleated:false
            }
        } 
        this.handleChangeCompleated=this.handleChangeCompleated.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleDeleteItem=this.handleDeleteItem.bind(this)
        
    }

    handleChangeCompleated(id){        
       this.setState(prevState=>{
            const updatedItems=prevState.items.map(item=>{
                if(item.key===id){
                    item.compleated=!item.compleated
                }
                return item
            })
            this.state.items=updatedItems
            return{
                item: updatedItems
            }
        })
    }
    
    handleDeleteItem(id){
        this.setState(prevState=>{
            const updatedItems=prevState.items.filter(item=>item.key!==id)    
            return{
                items: updatedItems
            }
        })
        
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]:event.target.value        
        })
    }
    
    handleModalEvent(item){
        this.setState({
            modalItem:item
        })
    }

    handleClick(){
        //this.setState((prevState)=>{
            if(this.state.items.length===0){
                var id=1
            }else{
                var id=this.state.items[this.state.items.length-1].key+1
            }
            var newItem={
                key:id,
                name:this.state.newTask,
                compleated:false
            }
            var newItemList=this.state.items.push(newItem)
        //     return{
        //         items:newItemList
        //     }       
        // })
        this.forceUpdate()
    }

    render(){
        var itemList=this.state.items.map(
            (item)=>{
                    return(<ListItem 
                        key={item.key} 
                        data={item} 
                        handleChangeCompleated={this.handleChangeCompleated}
                        handleDeleteItem={this.handleDeleteItem}    
                    />)
            })
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>Add a new item</h5>
                        <div className="form-row align-items-center">
                            <div className="col-8">
                            <input type="text"
                                id="inputAddTask"
                                className="form-control mb-2"
                                placeholder="New Task"
                                name="newTask"
                                value={this.state.newTask}
                                onChange={this.handleInputChange}/>
                            </div>
                            <div className="col-4">
                                <button
                                    className="btn btn-primary mb-2" 
                                    onClick={this.handleClick}>Add new item</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <h5>Item List</h5>
                        <ul className="list-group">
                            {itemList}    
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainComponent