import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type defaultAffairsType = {
    _id: number
    name: string
    priority: string
}
export type AffairPriorityType = "high" | "middle" | "low"; // need to fix any (DONE!)
export type AffairType = any; // need to fix any
export type FilterType = "all" | AffairPriorityType;

// constants
const defaultAffairs: Array<defaultAffairsType> = [ // need to fix any (DONE!)
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: Array<defaultAffairsType>, filter: FilterType): Array<defaultAffairsType> => { // need to fix any (DONE!)
    if (filter === "high") return affairs.filter(i => i.priority === "high")
    else if (filter === "middle") return affairs.filter(i => i.priority === "middle")
    else if (filter === "low") return affairs.filter(i => i.priority === "low")
    else return affairs; // need to fix (DONE!)
}
export const deleteAffair = (affairs: Array<defaultAffairsType>, _id: number): Array<defaultAffairsType> => { // need to fix any (DONE!)
    return affairs.filter(i => i._id !== _id); // need to fix (DONE!)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<defaultAffairsType>>(defaultAffairs); // need to fix any (DONE!)
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)); // need to fix any (DONE!)
    const changeFilter = (filterValue: FilterType) => setFilter(filterValue);

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать) (DONE!)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={changeFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;
