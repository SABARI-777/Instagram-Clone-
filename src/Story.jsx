import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Story() {
  const [story, setStory] = useState([]);
  let tot = 0;
  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((error) => console.error("Error fetching story data:", error));
    console.log(story);
  }, [story]);

  const navigate = useNavigate();

  return (
    <div>
      {story.length > 0 ? (
      <div className=" story d-flex">
        <div className="d-none">{tot = story.length}</div>
          {story.map((storys) => (
            <div key={storys.id} className="mx-1" onClick={()=>navigate(`/story/${storys.id}/${tot}`)
            }>
              {
                <div>
                  <div className="gradient-border">
                    <img
                      className="story-dp rounded-circle"
                      src={storys.pic}
                      alt="Profile"
                    />
                  </div>
                  <p className="text-truncate" style={{ width: "50px" }}>
                    {storys.username}
                  </p>
                </div>
              }
            </div>
          ))}
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}

export default Story;
