
import React from "react"

const Context = React.createContext()

function UglyThingsContext(props){

     const [UglyThingsContext, setUglyThingsContext] = React.useState({
        title: "",
        desc: "",
        imgUrl: ""
     })

     const [uglyThingsArray, setuglyThingsArray] = React.useState([])

     function handleChange(event){
        const {name, value} = event.target
        setUglyThingsContext(prevState => {
            return {
                [name] : value
            }
        })
     }

     function addItem(){
        setUglyThingsContext(prevState => {
            return(
                [...prevState, UglyThingsContext]
            )
        })
     }

     function handleSubmit(){
        e.preventDefault()
        addItem()
        axios.post("https://api.vschool.io/karynachernyak/thing", UglyThingsContext)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

     }
    return(
        <Context.Provider value={{
            uglyThingsArray,
            handleChange,
            handleSubmit

        }}>
            {props.childen}
        </Context.Provider>
    )
}

export {UglyThingsContext, Context}