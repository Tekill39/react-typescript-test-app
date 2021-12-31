import React, {FC, useState, useRef} from 'react';

const EventsExample:FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
       console.log(inputRef.current?.value)
    }
    const dragHandler = (e:React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG")
    }
    const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log("DROP")
    }
    const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    const dragWithPreventHandler = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)

    }
    return (
        <div>
            <input value={value} type ="text" onChange={changeHandler} placeholder="Управляемый"/>
            <input ref= {inputRef} type ="text"  placeholder="Неуправляемый"/>
            <button onClick={clickHandler}>Text button</button>
            <div draggable onDrag={dragHandler} style={{width:200, height:200, background:'blue', marginBottom:10 }}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver = {dragWithPreventHandler}
                style={{width:200, height:200, background: isDrag? 'red' :'blue' }}>
            </div>
        </div>
    )
}
export default EventsExample;