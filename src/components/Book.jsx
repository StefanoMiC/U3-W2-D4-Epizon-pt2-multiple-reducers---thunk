import { Badge, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectBookAction } from "../redux/actions";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const bookSelected = useSelector(state => state.bookSelected.content);

  return (
    <Card
      className={`border border-2 ${bookSelected?.id === book.id ? "border-primary mt-3" : "mt-3"}`}
      onClick={() => {
        // dispatch({ type: SELECT_BOOK, payload: book });
        dispatch(selectBookAction(book));
      }}
      style={{ cursor: "pointer" }}
    >
      <Card.Body className="d-flex">
        <img className="book-image" src={book.imageUrl} alt="book cover" />
        <div>
          <Card.Text className="font-weight-bold">{book.title}</Card.Text>
          <Badge bg="primary">{book.price}€</Badge>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Book;
