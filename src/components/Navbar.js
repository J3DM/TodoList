import React from "react"

class Navbar extends React.Component{
    constructor(){
        super()
        this.state={
            user:"",
            login:false
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.logout=this.logout.bind(this)
    }

    handleInputChange(event){
        this.setState({
            [event.target.name]:event.target.value,
        })
    }
    
    login(){
        this.setState({
            login:true    
        })
    }

    logout(){
        this.refs.user.value = '';
        this.setState({
            user:"",
            login:false    
        })
    }

    render(){
        if(this.state.login){
            this.button=<button type="button" className="btn btn-warning" onClick={()=>{this.logout();}}>Exit</button>
        }else{
            this.button=<button 
                            type="button" 
                            className={"btn btn-primary "+this.state.user===""?"disabled":""} 
                            onClick={()=>{this.login();}}
                        >Login</button>
        }
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="col-8">
                <h4 className="text-center">{ this.state.login===false ? "Log in to create your personal list": "List of "+this.state.user}</h4>
                </div>
                <div className="col-4 form-inline">
                    <input 
                        className="form-control mr-sm-2"
                        type="search"
                        name="user"
                        ref="user" 
                        placeholder="User" 
                        aria-label="User"
                        value={this.state.user}
                        onChange={this.handleInputChange}/>
                    {this.button}
                </div>
            </nav>
        )
    }
}

export default Navbar