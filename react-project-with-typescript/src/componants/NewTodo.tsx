import React, { useRef } from 'react'

const NewTodo = () => {

    const currentRef = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let x = currentRef.current?.value;
        console.log(x)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='text'>Todo text</label>
            <input type='text' id='text' ref={currentRef} />
            <button type='submit'>submit</button>
        </form>
    )
}

export default NewTodo