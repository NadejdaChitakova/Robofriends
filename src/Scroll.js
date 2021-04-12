import react from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll, border:'}}>
            {props.children}
        </div>
    );
}

export default Scroll;