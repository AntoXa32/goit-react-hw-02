import css from "./Profile.module.css";

export default function Profile({
  profileUser: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.images} src={avatar} alt="User avatar" />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.items}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.items}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.items}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
