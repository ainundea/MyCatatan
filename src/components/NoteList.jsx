import { NoteRow } from "./NoteRow";

function NoteList(props) {
  const { notes, onDelete } = props;
  return (
    <div class="row">
      {notes.map((note, index) => {
        // Convert the string date to a JavaScript Date object
        const createdAtDate = new Date(note.createdAt);

        // Add one day to the date
        createdAtDate.setDate(createdAtDate.getDate() + 1);

        // Format the new date as a string (assuming YYYY-MM-DD format)
        const newCreatedAt = createdAtDate.toISOString().slice(0, 10);
        return (
          <NoteRow
            key={note.id}
            no={index + 1}
            index={index}
            id={note.id}
            title={note.title}
            createdAt={newCreatedAt}
            onDelete={onDelete}
          >
            {note.body}
          </NoteRow>
        );
      })}
    </div>
  );
}

export default NoteList;
