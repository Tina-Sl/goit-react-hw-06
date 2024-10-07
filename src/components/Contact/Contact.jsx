import { FaUser, FaPhoneAlt } from "react-icons/fa";

import s from "./Contact.module.css";

const Contact = ({
  id,
  // completed,
  name,
  number,
  handleDelete,
}) => {
  return (
    <li className={s.card}>
      <div className={s.cardContent}>
        <span className={s.cardLine}>
          <FaUser /> {name}
        </span>
        <span className={s.cardLine}>
          <FaPhoneAlt /> {number}
        </span>
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
