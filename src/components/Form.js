import React from "react";
import { useContext } from "react";
import { UglyContext } from "./UglyThingsContext";
import axios from "axios";



export default function Form(props){
    const { uglyList, handleSubmit, handleChange} = useContext(UglyContext)
    const [listData, setListData] = React.useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description
    })

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Title"
            name="title"
            value={listData.title}
            onChange={handleChange}
            />

            <input
            type="text"
            placeholder="Img URL"
            name="imgUrl"
            value={listData.imgUrl}
            onChange={handleChange}
            />

            <input
            type="text"
            placeholder="Description"
            name="description"
            value={listData.description}
            onChange={handleChange}
            />
        <button>Submit</button>
        </form>
    )
}