import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/ShowFormattedDate.js';

function NoteDetail({ title, body, createdAt}) {

  return (
<>
    <div className="note-detail">
    <h2 className="note-detail_title">
        {title}
    </h2>
    <h5 className="note-item_createdAt">{showFormattedDate(createdAt)}</h5>
        <div className="note-body">
            <p className="note-item_body">{body}</p>
        </div>
</div>

</>

  );
}

 
NoteDetail.propType = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteDetail;