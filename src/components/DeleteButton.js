import React from "react";
import PropTypes from 'prop-types';

function DeleteButton ({id, onDelete}){
    return(
        <button className="note-item_delete" onClick={()=>onDelete(id)}>Delete</button>
    )
}

DeleteButton.propsTypes={
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;