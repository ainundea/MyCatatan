import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { getNotes, deleteAccessToken, deleteNote } from "../utils/network";
import NoteList from "../components/NoteList";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const { username } = useParams();

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = async (id) => {
    const deleteResult = await deleteNote(id);

    if (!deleteResult.error) {
      // Jika penghapusan berhasil, jalankan getNotes kembali
      const getNotesResult = await getNotes();

      if (!getNotesResult.error) {
        setNotes(getNotesResult.data);
      } else {
        console.error(
          "Error fetching notes after deletion:",
          getNotesResult.code
        );
      }
    } else {
      console.error("Error deleting note:", deleteResult.code);
    }
  };

  function onLogoutHandler(event) {
    event.preventDefault();
    // TODO HANDLE LOGOUT HERE
    const isConfirmed = window.confirm("Apakah Anda yakin?");
    if (isConfirmed) {
      deleteAccessToken();
      navigate("/");
    }
  }

  useEffect(() => {
    getNotes()
      .then((result) => {
        const data = result.data;
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="p-3">
      <strong className="fs-1 text-light">Notes {username}</strong>
      <br />
      <div className="d-flex ">
        <button
          class="btn btn-warning p-2 text-light"
          onClick={(event) => {
            onLogoutHandler(event);
          }}
          style={{
            marginLeft: "1650px",
            marginTop: "70px",
          }}
        >
          <strong>
            Logout
            <FontAwesomeIcon icon={faSignOutAlt} />
          </strong>
        </button>
      </div>
      <nav class="navbar">
        <div>
          <form class="d-flex" role="search">
            <input
              class="form-control me-3"
              type="search"
              style={{
                marginLeft: "30px",
                marginTop: "70px",
              }}
              onChange={(event) => {
                handleChangeSearch(event);
              }}
              value={search}
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>
        </div>
      </nav>

      <br />
      <Button
        className=" d-flex p-2 text-light"
        style={{
          marginLeft: "30px",
          marginTop: "-25px",
        }}
        variant="warning"
        type="submit"
        onClick={() => {
          navigate(`/${username}/add`);
        }}
      >
        <strong>Add Note</strong>
      </Button>
      <div>
        <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default Home;
