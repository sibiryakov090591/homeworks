import React from "react";
import {defaultAffairsType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: defaultAffairsType // need to fix any (DONE!)
    deleteAffairCallback: (_id: number) => void // need to fix any (DONE!)
}

// Styles
const styleAffairTitle = {
    color: "#e7025e",
    fontSize: "20px"
}
const styleAffairs = {
    display: "inline-block"
}
const styleWrapper = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    padding: "5px 20px",
    backgroundColor: "#cdcdcd",
    width: "250px",
    borderRadius: "10px"
}
const styleBtn = {
    width: "30px",
    height: "30px",
    display: "inline-block",
    backgroundColor: "#fda2cb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#343434"
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix (DONE!)

    return (
        <div style={styleWrapper}>
            <div style={styleAffairs}>
                <div>
                    <span style={styleAffairTitle}>Name:</span> {props.affair.name}
                </div>
                <div>
                    <span style={styleAffairTitle}>Priority:</span> {props.affair.priority}
                </div>
            </div>
            <button style={styleBtn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
