import React from 'react'

const Todos = (props: any) => {
    let i = 0;
    return (
        <div>
            <ul>
                {props.array? props.array.map((x: any, index: any) => (<li>{x[i]}</li>)) : ""}
            </ul>
        </div>
    )
}

export default Todos