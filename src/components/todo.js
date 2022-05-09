import React from 'react';

function todo({ todo }) {
    const { id, title, completed } = todo;
    const h1 = <h1> {title} </h1>;
    const text = completed ? <s> {h1} </s> : h1;


    return (
        <div className="hi" data-testid={`todo-${id}`}>
            { text }
        </div>
   )
}

export default todo;