import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setSuccess("");
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                setLoading(false);
                switch (response.status) {
                    case 400:
                        setError("Los datos ingresados no son válidos.");
                        break;
                    case 409:
                        setError("El email ya se encuentra registrado.");
                        break;
                    default:
                        setError(data.message || "Ocurrió un error.");
                }
                return;
            }

            // Registro exitoso
            setLoading(true);
            setSuccess("Registro exitoso. Redirigiendo al login...");

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (error) {
            setLoading(false);
            setError("No fue posible conectar con el servidor.");
        }
    };

    return (
  <div className="min-h-[calc(100vh-72px)] bg-[#1b2838] flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-[#2a475e] rounded-xl shadow-2xl p-8 border border-[#3b5d78]">

      <h2 className="text-3xl font-bold text-[#66c0f4] text-center mb-2">
        Crear cuenta
      </h2>

      <p className="text-[#8f98a0] text-center mb-8">
        Registrate para comenzar a explorar SteamLike.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md bg-[#1b2838] border border-[#3b5d78] px-4 py-3 text-[#c7d5e0] placeholder:text-[#8f98a0] focus:border-[#66c0f4] focus:outline-none"
        />

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

        {success && (
          <p className="rounded-md bg-green-900/40 border border-green-600 px-4 py-2 text-green-300">
            {success}
          </p>
        )}

        {error && (
          <p className="rounded-md bg-red-900/40 border border-red-600 px-4 py-2 text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-[#66c0f4] py-3 font-semibold text-[#171a21] transition hover:bg-[#1a9fff] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Redirigiendo..." : "Registrarse"}
        </button>

      </form>
    </div>
  </div>
);
}

export default Register;