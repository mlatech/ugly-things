
import React, { useEffect } from "react"
import { createContext } from "react"
import axios from "axios"

const UglyContext = React.createContext()

function UglyContextProvider(props){
    //setting state to hold arrat and list data items 
    const [uglyList, setUglyList] = React.useState([])
    
    const [listData, setListData] = React.useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    //get request
    const getUglyThing = () =>{
        axios.get("https://api.vschool.io/karynachernyak/thing")
        .then(res => {
            setUglyList(res.data)
        })
        .catch(err=> console.log(err))
    }
    useEffect(() => {
        console.log("useEffect ran successfully")
        getUglyThing()
    }, [])
    
    //handle change function 
    function handleChange(e){
        const {name, value} = e.target
        setListData(prevListData => {
            return {
                ...prevListData,
                [name]: value
            }
        })
    }


    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://api.vschool.io/karynachernyak/thing", {
            title: listData.title,
            imgUrl: listData.imgUrl,
            description: listData.description
            
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    
    return(
        <UglyContext.Provider value={{
            uglyList, 
            setUglyList,
            listData,
            setListData,
            handleSubmit,
            handleChange
            }}>
            {props.children}
        </UglyContext.Provider>
    )
}
export {UglyContext, UglyContextProvider}