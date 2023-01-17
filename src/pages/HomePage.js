import React from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchNote from "../components/NoteSearchBar";
import { deleteNote, getNotes } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    const { data } = await getNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section>
      <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <center><h3 className="title_list_note">{locale === "id" ? "List Catatan" : "Notes List"}</h3></center>
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler}/>
    </section>
  );
}
export default HomePage;