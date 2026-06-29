import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setError("Debe completar email y contraseña.");
        } else if (response.status === 401) {
          setError("Email o contraseña incorrectos.");
        } else {
          setError(data.message || "Ocurrió un error.");
        }
        return;
      }

      login(data.token, data.user);

      navigate("/");
    } catch {
      setError("Error al conectar con el servidor.");
    }
  };

  return (
  <div className="min-h-[calc(100vh-72px)] bg-[#1b2838] flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-[#2a475e] rounded-xl shadow-2xl p-8 border border-[#3b5d78]">

      <h2 className="text-3xl font-bold text-[#66c0f4] text-center mb-2">
        Iniciar sesión
      </h2>

      <p className="text-[#8f98a0] text-center mb-8">
        Accedé con tu cuenta de SteamLike.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-md bg-[#1b2838] border border-[#3b5d78] px-4 py-3 text-[#c7d5e0] placeholder:text-[#8f98a0] focus:border-[#66c0f4] focus:outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          className="w-full rounded-md bg-[#1b2838] border border-[#3b5d78] px-4 py-3 text-[#c7d5e0] placeholder:text-[#8f98a0] focus:border-[#66c0f4] focus:outline-none"
        />

        {error && (
          <p className="rounded-md bg-red-900/40 border border-red-600 px-4 py-2 text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-md bg-[#66c0f4] py-3 font-semibold text-[#171a21] transition hover:bg-[#1a9fff]"
        >
          Ingresar
        </button>

      </form>
    </div>
  </div>
);
}

export default Login;