import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [followers, setfollowers] = useState([]);
  const [unfollows, setunfollows] = useState(0);

  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profile")
      .then((response) => {
        setProfiles(response.data); // Get the full array
      })
      .catch((error) => {
        setError("Error fetching profiles.");
        console.error(error);
      });
  }, [unfollows]);

  const handleOnChange = (e, id) => {
    const { name, value } = e.target;

    setProfiles((prevProfiles) =>
      prevProfiles.map((profile) =>
        profile.id === id ? { ...profile, [name]: value } : profile
      )
    );
  };

  const handleButton = (profile) => {
    axios
      .put(`http://localhost:3000/profile/${profile.id}`, profile)
      .then(() => {
        console.log("Updated:", profile);
      })
      .catch((err) => {
        console.error("Update error:", err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/followers")
      .then((data) => setfollowers(data.data))
      .catch((err) => {
        console.log(err);
      });
  }, [unfollows]);

 const unfollow = (id) => {
  axios
    .delete(`http://localhost:3000/followers/${id}`)
    .then(() => {
      alert("Unfollowed successfully");
      setunfollows((prev) => prev + 1); 
    })
    .catch((err) => console.error("Error unfollowing:", err));
};


  if (error) return <div>{error}</div>;
  if (profiles.length === 0) return <div>Loading...</div>;

  return (
    <div className="m-5">
      {profiles.map((profile) => (
        <div key={profile.id}>
          <img
            className="profile rounded-circle"
            src={profile.profilePic}
            alt="Profile"
          />
          <h5>{profile.username}</h5>

          <input
            type="text"
            name="username"
            value={profile.username}
            className="form-control my-4"
            onChange={(e) => handleOnChange(e, profile.id)}
          />

          <input
            type="text"
            name="profilePic"
            value={profile.profilePic}
            className="form-control my-4"
            onChange={(e) => handleOnChange(e, profile.id)}
          />

          <button
            className="btn btn-primary my-4"
            onClick={handleButton(profile)}
          >
            Update
          </button>
          <div>
            {followers.length > 0 ? (
              <div>
                {followers.map((follower) => (
                  <div
                    key={follower.id}
                    className="d-flex my-4 align-items-center"
                  >
                    <img
                      className="follower rounded-circle"
                      src={follower.profilePic}
                      alt="follower"
                      width={50}
                    />
                    <h5 className="ms-3">{follower.username}</h5>
                    <button
                      onClick={() => unfollow(follower.id)}
                      className="btn btn-danger ms-auto"
                    >
                      Unfollow
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading followers ...</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Profile;
