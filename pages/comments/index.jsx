import { useEffect, useState } from "react";

function Comments() {
  const [commentsData, setCommentsData] = useState([]);
  const [replies, setReplies] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setCommentsData(data);
    };
    fetchComments();
  }, []);

  const loadReplies = async () => {
    const res = await fetch("/api/replies");
    const data = await res.json();
    setReplies(data);
  };

  return (
    <div>
      This is comment pages <br />
      <button type="button" onClick={() => loadReplies()}>
        load replies
      </button>
      {commentsData.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <hr />
      {replies?.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default Comments;
