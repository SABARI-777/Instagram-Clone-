import axios from "axios";
import React, { useState, useEffect } from "react";

function Suggestions() {
  const [profile, setProfile] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile data:", error));
    console.log(profile);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((error) =>
        console.error("Error fetching suggestions data:", error)
      );
    console.log(suggestions);
  }, []);

  const hanleclick = (id, username, profilePic) => {
    axios
      .post("http://localhost:3000/followers", {
        id: id,
        username: username,
        profilePic: profilePic,
      })
      .then(alert("Followed"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="suggetions w-75 m-4">
      {profile.length > 0 ? (
        <div>
          {profile.map((profile) => (
            <div key={profile.id}>
              {
                <div className="d-flex">
                  <img
                    className="dp rounded-circle"
                    src={profile.profilePic}
                    alt="Profile"
                  />
                  <h4>{profile.username}</h4>
                  <small className="ms-auto text-primary">Switch</small>
                </div>
              }
            </div>
          ))}
        </div>
      ) : (
        <p>Loading....</p>
      )}
      <div className="d-flex">
        <p>Suggestions for you</p>
        <b className="ms-auto">See All</b>
      </div>
      <hr />

      {suggestions.length > 0 ? (
        <div>
          {suggestions.map((suggestion) => (
            <div className="my-2" key={suggestion.id}>
              {
                <div className=" d-flex ">
                  <img
                    className="dp rounded-circle"
                    src={suggestion.profilePic}
                    alt="Profile"
                  />
                  <h6>{suggestion.username}</h6>
                  <a
                    className="text-primary ms-auto"
                    onClick={() => {
                      hanleclick(
                        suggestion.id,
                        suggestion.username,
                        suggestion.profilePic
                      );
                    }}
                  >
                    Follow
                  </a>
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

export default Suggestions;
