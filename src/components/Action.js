import React from 'react';

const Action = (props) => {
    return(
        <button onClick={props.handlePick} disabled={!props.isDisabled} >What should i do?</button>
    )
}

export { Action }
