import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-Config/FirebaseConfig";
import { Database, ref, update } from "firebase/database";
import { updatePassword } from "firebase/auth";

function ChangePassword() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSucess] = useState("");
  useEffect(() => {
    const data = Cookies.get("token");
    if (!data) {
      navigate("/login");
      return;
    }

    try {
      const userData = JSON.parse(data);
      setUser(userData);
    } catch (error) {
      navigate("/login");
    }
  }, [navigate]);

  const handleNewPassword = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await updatePassword(user, newPassword);
        const userRef = ref(db, "Users/" + user.uid);
        await update(userRef, {
          password: newPassword,
        });
        setSucess("password updated sucessFully");
        setError("");
      } catch (error) {
        setError("failed to update", error.message);
      }
    }
    if (!newPassword) {
      setError("Password cannot be empty.");
      return;
    }

    console.log("New password submitted:", newPassword);
    setNewPassword("");
    setError("");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
      <div className="container sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white shadow-lg p-6">
        <h2 className="text-center text-2xl font-bold mb-4">Change Password</h2>
        <form onSubmit={handleNewPassword}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              disabled
              className="mt-2 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-900"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
