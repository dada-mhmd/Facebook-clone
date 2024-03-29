import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../DummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
