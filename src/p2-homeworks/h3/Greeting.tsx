import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any (DONE!)
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any (DONE!)
    addUser: () => void // need to fix any (DONE!)
    error: string // need to fix any (DONE!)
    totalUsers: number // need to fix any (DONE!)
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input; // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <SuperInputText  value={name}
                             onChange={setNameCallback}
                             className={inputClass}
                             error={error}
            />
            <SuperButton onClick={addUser}>
                Add
            </SuperButton>
            <span className={s.total}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
