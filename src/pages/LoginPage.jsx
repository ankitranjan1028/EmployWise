import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../reqresApi";

const Login = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("api/login", formData);
      if (response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successfully");
        nav("/user");
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      nav("/user");
    }
  }, [token, nav]);

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div
        className="w-full max-w-md p-8 rounded-2xl shadow-xl"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <h1
          className="flex justify-center items-center gap-2 text-3xl font-extrabold"
          style={{ color: "var(--color-text-primary)" }}
        >
          <span>EmployWise</span>
        </h1>

        <h2
          className="text-xl font-semibold text-center mt-4"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Welcome Back
        </h2>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-text-secondary)",
                backgroundColor: "var(--color-surface)",
              }}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--color-text-secondary)",
                backgroundColor: "var(--color-surface)",
              }}
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-medium transition-all cursor-pointer ${
              loading ? "cursor-not-allowed" : ""
            }`}
            style={{
              backgroundColor: loading
                ? "var(--color-primary-dark)"
                : "var(--color-primary)",
              color: "var(--color-surface)",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="text-center" style={{ color: "black" }}>
            <p>Use the following credentials to login:</p>
            <p className="text-sm">Email: <span className="font-semibold">eve.holt@reqres.in</span></p>
            <p className="text-sm">Password: <span className="font-semibold"> cityslicka</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;