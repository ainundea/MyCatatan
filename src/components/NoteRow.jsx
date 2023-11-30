import { DeleteButton } from "./DeleteButton";
import "../App.css";
import PropTypes from "prop-types";

function NoteRow({ no, title, createdAt, children, id, index, onDelete }) {
  return (
    <div class="col-md-6 ">
      <div class="text-start fs-4 mb-2 bg-warning p-2 text-light rounded">
        <div class="card-header p-1 d-flex justify-content-between">
          <div>Catatan {no}</div>
          <DeleteButton index={index} id={id} onDelete={onDelete} />
        </div>
        <div class="card p-2 mb-2  bg-gradient">
          <div class="card-header d-flex justify-content-between">
            <h5 class="card-title">{title}</h5>
            <div class="card-text fs-5">{createdAt}</div>
          </div>
          <p class="card-text fs-5 text-start">{children}</p>
        </div>
      </div>
    </div>
  );
}

NoteRow.propTypes = {
  no: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export { NoteRow };
