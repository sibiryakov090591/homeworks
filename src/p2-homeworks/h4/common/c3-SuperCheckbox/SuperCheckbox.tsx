import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./SuperCheckbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // сделайте так чтоб работал onChange и onChangeChecked
        onChangeChecked && onChangeChecked(!restProps.checked)
        onChange && onChange(e)
    }

    return (
        <div className={s.checkboxes}>
            <div className={s.check}>
                <input id="check"
                       type="checkbox"
                       onChange={onChangeCallback}
                       {...restProps}/>
                <label htmlFor="check">
                    <div className={s.box}><i>✓</i></div>
                    {children && <span className={s.spanClassName}>{children}</span>}
                </label>

            </div>
        </div>
    );
}

export default SuperCheckbox;
