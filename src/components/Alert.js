import React from 'react';

const Alert = (props) => {
    // const { alert } = props;
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`}>
            {props.alert.message}
        </div>
    );
};

export default Alert;