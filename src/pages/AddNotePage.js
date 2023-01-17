import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function AddNotePages() {
  const navigate = useNavigate()
  const { locale } = React.useContext(LocaleContext);


  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate('/')
  }

  return (
    <main>
      <h3 className="title_form_input">{locale === "id" ? "Form Tambah Catatan" : "Add Note form"}</h3>
      <NoteInput addNote={onAddNoteHandler} />
    </main>
  );
}

export default AddNotePages;
