import {useContext} from "react";
import { UglyContext } from "./UglyThingsContext";
import UglyThing from "./UglyThing";

export default function List(){
    const { uglyList} = useContext(UglyContext)
    console.log(uglyList)
    return(

        <div>
            <h1>this is list</h1>
            {uglyList.map((ugly, _id) => {
                return(
                <UglyThing {...ugly}
                key = {ugly._id}
                id = {ugly._id}
                title = {ugly.title}
                imgUrl ={ugly.imgUrl}
                description ={ugly.description}/>
                )
            })}
        </div>
    )
}
