function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let emoji = "";
  if (minutes < 30) {
    emoji = "☕️".repeat(Math.ceil(minutes / 5));
  } else {
    emoji = "🍱".repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emoji} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
