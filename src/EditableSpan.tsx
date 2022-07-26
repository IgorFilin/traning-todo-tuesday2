import React, {ChangeEvent, useState} from 'react';

type EditableSpanTypeProps = {
    title:string
    dispatch:(t:string)=> void
}

export const EditableSpan:React.FC<EditableSpanTypeProps> = ({title,dispatch}) => {
    const [editMode,setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState(title)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        dispatch(value)
    }

    return (
        editMode ? <input autoFocus onBlur={offEditMode}  value={value} onChange={onChangeHandler}/>:<span onDoubleClick={onEditMode}>{title}</span>

    );
};

