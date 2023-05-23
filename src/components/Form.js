import React from "react";
import { useContext } from "react";
import { UglyContext } from "./UglyThingsContext";
import axios from "axios";

export default function Form(props) {
  const { uglyList, handleSubmit, handleChange } = useContext(UglyContext);
  const [listData, setListData] = React.useState({
    title: props.title,
    imgUrl: props.imgUrl,
    description: props.description
  });

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={listData.title}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <input
        type="text"
        placeholder="Img URL"
        name="imgUrl"
        value={listData.imgUrl}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px", width: "200px", height: "200px" }}
      />

      <input
        type="text"
        placeholder="Description"
        name="description"
        value={listData.description}
        onChange={handleChange}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <button style={{ padding: "10px", backgroundColor: "blue", color: "white" }}>Submit</button>
    </form>
  );
}
