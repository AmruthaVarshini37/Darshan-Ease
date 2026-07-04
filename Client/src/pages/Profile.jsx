import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res.data);

      setUser(res.data);
    } catch (error) {
      console.log(error);
      alert("Unable to fetch profile");
    }
  };

  return (
    <div>
      <h2>Profile</h2>

      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
    </div>
  );
}

export default Profile;