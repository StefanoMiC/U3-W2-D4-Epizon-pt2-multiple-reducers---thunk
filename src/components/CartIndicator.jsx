import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameAction } from "../redux/actions";

const CartIndicator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //collegamento in lettura allo Store attraverso useSelector()
  const cartLength = useSelector(state => state.cart.content.length);
  const userName = useSelector(state => state.user.content);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    // eseguire una funzione che ritorna qualcosa, possiamo pensarla come l'oggetto (in questo caso) che ritornerà
    // questa operazione ha priorità sulla chiamata dispatch esterna, quindi viene valutata prima, l'oggetto verrà ricevuto,
    // e con quell'oggetto la dispatch verrà eseguita.
    dispatch(setUserNameAction(inputValue));
  };

  return (
    <div className="text-end mt-3 mb-4">
      {userName ? (
        <>
          <span>
            Benvenuto/a, <strong>{userName}</strong>
          </span>
          <Button
            className="d-inline-flex align-items-center py-2 px-3"
            variant="primary"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="text-white" />
            <span className="ms-2">{cartLength}</span>
          </Button>
        </>
      ) : (
        <Form className="w-25 ms-auto" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo nome"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              required
            />
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default CartIndicator;
