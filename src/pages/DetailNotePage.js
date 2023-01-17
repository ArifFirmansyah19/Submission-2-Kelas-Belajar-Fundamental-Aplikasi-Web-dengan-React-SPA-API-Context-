import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getDetailNote } from "../utils/api";
import LocaleContext from "../contexts/LocaleContext";

function DetailPage() {
  const [notes, setNotes] = useState([]);
  const { locale } = useContext(LocaleContext);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const { data } = await getDetailNote(id);
      setNotes(data);
    };
    getData();
  }, [id]);

  return notes === undefined ? `<h3>Not Found</h3>` : (
    <section>
      <h2 className="title-detail">{locale === "id" ? "Detail Catatan" : "Note Details"}</h2>
      <NoteDetail
        id={notes.id}
        title={notes.title}
        body={notes.body}
        createdAt={notes.createdAt}
      />
    </section>
  );
}

export default DetailPage;
