import React from "react"

function ListItem(props){

    return(
        <li className="list-group-item">
            <div className="form-inline">
                <div className="form-group col-1">
                    <input type="checkbox" 
                        className="form-check-input" 
                        checked={props.data.compleated}
                        onChange={()=>{props.handleChangeCompleated(props.data.key)}}/>
                </div>
                <div className={"form-group col-9 "+(props.data.compleated?"linethrow":"")}>
                    <h5>{props.data.name}</h5>
                </div>
                <div className="form-group col-1">
                    {/* <input type="image" src="data:image/png;base64,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" 
                        width="30" height="30" 
                        className="d-inline-block" alt=""
                        name="editItem"
                        data-toggle="modal" 
                        data-target="#exampleModalCenter"
                        disabled="true"/> */}
                </div>    
                <div className="form-group col-1">
                    <input type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVFzkEfsUvBw5GBvFIaLfjZeD8clCR-Jo7th3DgHLUuq6hEhBKw" 
                        width="30" height="30" 
                        className="d-inline-block" alt=""
                        name="deleteItem"
                        onClick={()=>{props.handleDeleteItem(props.data.key)}}/>
                </div>
            </div>
        </li>
    )

}

export default ListItem