import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TodoList from "../components/TodoList";
import { deleteTodos, getTodos } from "../utils/local";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onDeleteHandler = (index) => {
    deleteTodos(index);
    setTodos(getTodos());
  };

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const data = getTodos();
    setTodos(data);
  }, []);

  return (
    <div className="p-3">
      <strong className="fs-1 text-light">Todo List Ainun Dea</strong>
      <br />

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
          navigate("/add");
        }}
      >
        <strong>Add Todo</strong>
      </Button>
      <div>
        <TodoList todos={filteredTodos} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default Home;
