import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any (DONE!)
    addUserCallback: (name: string) => void // need to fix any (DONE!)
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any (DONE!)
    const [error, setError] = useState<string>(""); // need to fix any (DONE!)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any (DONE!)
        setError("");
        setName(e.currentTarget.value); // need to fix (DONE!)
    };

    const addUser = () => {
        if (!name) return setError("*What is your name, my dear friend? :)");
        setError("");
        addUserCallback(name);
        setName("");
        alert(`Hello  ${name}!`); // need to fix (DONE!)
    };

    let totalUsers = users.length; // need to fix (DONE!)

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
