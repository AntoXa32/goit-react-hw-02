import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ items }) {
  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li key={item.id}>
          <FriendListItem friend={item} />
        </li>
      ))}
    </ul>
  );
}
