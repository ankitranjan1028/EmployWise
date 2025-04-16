// import { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import api from "../reqresApi";

const UserCard = ({ user, setData, setShowUpdateBox, setSelectedUser }) => {
  const handleDelete = async (id) => {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (!confirm) return;

      const response = await api.delete(`api/users/${id}`);
      if (response.status === 204) {
        toast.success("User deleted successfully");
        setData((prev) => prev.filter((user) => user.id !== id));
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Something went wrong");
    }
  };

  const handleEdit = () => {
    setSelectedUser(user);
    setShowUpdateBox(true);
  };

  return (
    <div
      className="relative rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <img
        src={user.avatar}
        alt={user.fullName}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h2
        className="text-lg font-semibold"
        style={{ color: "var(--color-text-primary)" }}
      >
        {user.fullName}
      </h2>
      <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
        {user.email}
      </p>
      
      {/* Action buttons at the bottom */}
      <div className="w-full flex justify-between mt-2">
        <button
          className="flex items-center gap-1 px-3 py-1 rounded-md transition-colors"
          onClick={handleEdit}
          style={{ color: "var(--color-primary)" }}
        >
          <FaUserEdit />
          <span className="cursor-pointer">Edit</span>
        </button>
        
        <button
          className="flex items-center gap-1 px-3 py-1 rounded-md transition-colors"
          onClick={() => handleDelete(user.id)}
          style={{ color: "var(--color-error)" }}
        >
          <MdDelete />
          <span className="cursor-pointer">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;