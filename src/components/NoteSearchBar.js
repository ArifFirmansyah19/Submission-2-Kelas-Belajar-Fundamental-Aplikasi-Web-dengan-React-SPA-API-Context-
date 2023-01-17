import React from "react";
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../contexts/LocaleContext";

function SearchNote({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="search-bar">
            <input type="text"  className="input-search" placeholder = { locale === "id" ? "Cari berdasarkan judul..." : "Search by title..."}
            value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

SearchNote.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchNote;
