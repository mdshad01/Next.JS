const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const urls = [
  "https://jsonplaceholder.typicode.com/comments?_limit=5",
  "https://procodrr.vercel.app/?sleep=2000",
  "https://procodrr.vercel.app/?sleep=3000",
];

const Comments = async () => {
  //   const responce = await fetch("https://jsonplaceholder.typicode.com/comments?_limit=10");
  //   const comments = await responce.json();

  const [comments, data2s, data3s] = await Promise.all(urls.map((url) => fetchData(url)));
  return (
    <div className="h-screen w-screen mx-auto max-w-6xl">
      <h1>Comments</h1>
      {comments.map(({ id, name, body }) => (
        <div className="flex flex-col" key={id}>
          <h4>{name}</h4>
          <p>{body}</p>
        </div>
      ))}
      <div>{JSON.stringify(data2s)}</div>
      <div>{JSON.stringify(data3s)}</div>
    </div>
  );
};

export default Comments;
