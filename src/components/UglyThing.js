import React,{useContext, useState} from "react";
import List from "./List"
import { UglyContext } from "./UglyThingsContext";
import axios from "axios"

export default function UglyThing(props){
    const {deleteUgly,getUglyThing} = useContext(UglyContext)

    const [editMode, setEditMode] = useState(false)
    const [editUgly, setEditUgly] = useState({
        title: props.title,
        description: props.description
    })

    function toggleEdit(){
        setEditMode(prevState => !prevState)
    }

    function handleEditChange(e){
        const {name, value} = e.target
        setEditUgly(prevState =>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmitEdit(e){
    e.preventDefault()

    const updatedUgly={
        title: editUgly.title,
        description: editUgly.description
    }
    axios.put(`https://api.vschool.io/karynachernyak/thing/${props.id}`, updatedUgly)
    .then(() => getUglyThing())
    .catch(err => console.log(err))
    console.log(updatedUgly)
    setEditMode(false)


    return(
        <div>
            {editMode ? 
            <form onSubmit={handleSubmitEdit}>
                <img src={props.imgUrl}/>
                <input
                type="text"
                name="title"
                value={editUgly.title}
                onChange={handleEditChange}
                />

                <input
                type="text"
                name="description"
                value={editUgly.description}
                onChange={handleEditChange}
                />

                <button>Save Changes</button>
            </form> 
            : 
            <div>
                <h3>{props.title}</h3>
                <img src={props.imgUrl} alt={props.description}/>
                <h3>{props.description}</h3>
            </div>
            }
            <div>
             <button onClick={toggleEdit}>{editMode ? "Close" : "Edit"}</button>
             <button onClick={() => deleteUgly(props.id)}>Delete</button>
            </div>
        </div>
    )
}}