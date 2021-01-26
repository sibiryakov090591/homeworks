import React from "react";
import Affair from "./Affair";
import {AffairType, defaultAffairsType, FilterType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any (DONE!)
    data: Array<defaultAffairsType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

const styleBtnFilter = {
    marginRight: "10px",
    height: "30px",
    width: "80px",
    display: "inline-block",
    backgroundColor: "#fda2cb",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#343434"
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter("all")}; // need to fix (DONE!)
    const setHigh = () => {props.setFilter("high")};
    const setMiddle = () => {props.setFilter("middle")};
    const setLow = () => {props.setFilter("low")};

    return (
        <div>

            {mappedAffairs}

            <SuperButton onClick={setAll}>All</SuperButton>
            <SuperButton onClick={setHigh}>High</SuperButton>
            <SuperButton onClick={setMiddle}>Middle</SuperButton>
            <SuperButton onClick={setLow}>Low</SuperButton>
        </div>
    );
}

export default Affairs;
