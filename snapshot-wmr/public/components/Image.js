import {React} from "es-react";

const Image = ({ url, title }) => (
  <li>
    <img src={url} alt={title} />
  </li>
);

export default Image;
