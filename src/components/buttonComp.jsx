import React from 'react'

function ButtonComp({ color, size, name, action }) {



    return (
        <>
            <button onClick={action} className={`btn btn-${color} btn-${size}`}>{name}</button>
        </>

    )
}

export default ButtonComp