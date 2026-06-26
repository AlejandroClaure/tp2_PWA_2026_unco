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
        <form onSubmit={handleSubmit}>
            <h2>Crear cuenta</h2>

            <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={form.name}
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={form.password}
                onChange={handleChange}
            />
            {success && <p className="mt-4 rounded-md bg-green-100 border border-green-300 px-4 py-2 text-green-700">{success}</p>}
            {error && <p className="mt-4 rounded-md bg-red-100 border border-red-300 px-4 py-2 text-red-700">{error}</p>}

            <button type="submit" disabled={loading} className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
                
                {loading ? "Redirigiendo..." : "Registrarse"}
            </button>
        </form>
    );
}

export default Register;