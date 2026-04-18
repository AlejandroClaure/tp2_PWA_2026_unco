# 🎮 Steam UI — Catálogo de Juegos

<p align="center">
  Aplicación web estilo <strong>Steam</strong> desarrollada con React + Vite + Tailwind v4
</p>

---

## 📚 Información académica

**Trabajo Práctico N°2 — Programación Web Avanzada**  
Facultad de Informática — Universidad Nacional del Comahue — 2026

---

## 👥 Integrantes

| Nombre                  | Email                              | Rol               |
| ----------------------- | ---------------------------------- | ----------------- |
| Joaquín Vargas          | joaquinivl95@gmail.com             | Frontend          |
| Gastón Llaupe           | gaston.llaupe@est.fi.uncoma.edu.ar | Frontend          |
| Alejandro Santos Claure | alejandroclaure01@gmail.com        | PM / Scrum Master |

---

## 🧾 Descripción

Aplicación web que simula un catálogo de videojuegos inspirado en Steam.

Permite explorar juegos, visualizar su información detallada y gestionar una lista de favoritos.

---

## ✨ Funcionalidades

- 📦 Listado de juegos desde API (MockAPI)
- 🔎 Búsqueda en tiempo real
- 📄 Vista de detalle por juego
- ⭐ Sistema de favoritos (persistencia en localStorage)
- 🎨 Interfaz estilo Steam (dark mode)
- ⏳ Estados de carga (loading)
- 📭 Estados vacíos (empty state)

---

## 🖼️ Capturas de pantalla

> ⚠️ Agregar imágenes del proyecto una vez finalizado

### 🏠 Home

![Home Screenshot](./screenshots/home.png)

### 📄 Detalle

![Details Screenshot](./screenshots/details.png)

### ⭐ Favoritos

![Favorites Screenshot](./screenshots/favorites.png)

---

## 🧠 Modelo de datos

```json
{
  "id": "1",
  "titulo": "Cyberpunk 2077",
  "genero": "RPG",
  "precio": 59.99,
  "imagen": "URL",
  "rating": 4.2,
  "isFavorite": false,
  "anio": 2020,
  "plataformas": "PC,PS5,Xbox",
  "descripcion": "texto",
  "developer": "CD Projekt Red"
}

⚙️ Stack tecnológico
Tecnología	Uso
React	UI
Vite	Entorno de desarrollo
Tailwind CSS v4	Estilos
React Router	Navegación
MockAPI	Backend fake
localStorage	Persistencia
🎨 Paleta de colores (Steam-like)
#1b2838 → Fondo principal
#171a21 → Fondo secundario
#2a475e → Cards
#66c0f4 → Accent
#1a9fff → Hover
#c7d5e0 → Texto principal
#8f98a0 → Texto secundario
🌐 API
https://69e2e9773327837a1552b35a.mockapi.io/api/v1/juegos
🚀 Instalación
# Clonar repositorio
git clone https://github.com/AlejandroClaure/tp2_PWA_2026_unco.git

# Entrar al proyecto
cd tp2_PWA_2026_unco

# Cambiar a develop
git checkout develop

# Instalar dependencias
npm install

# Ejecutar proyecto
npm run dev

👉 App disponible en:
http://localhost:5173

📁 Estructura del proyecto
src/
 ├── components/
 │    ├── GameCard
 │    ├── GameList
 │    ├── GameDetailCard
 │    ├── FavoriteButton
 │    ├── Header
 │    ├── Footer
 │    └── SearchBar
 │
 ├── pages/
 │    ├── Home
 │    ├── Details
 │    ├── Favorites
 │    └── NotFound
 │
 ├── const/
 │    └── routes.js
 │
 ├── main.jsx
 └── index.css
🌿 Estrategia de Branches
develop
 ├── develop/comp-1-gamelist
 ├── develop/comp-2-gamecard
 ├── develop/feat-1-home
 ├── develop/feat-2-details
 └── ...


🔁 Flujo de trabajo
git checkout develop
git pull origin develop

git checkout -b develop/comp-1-gamelist

git add .
git commit -m "feat: GameList component"

git push origin develop/comp-1-gamelist
🔀 Pull Requests
Base: develop
1 aprobación obligatoria
No mergear sin revisión del PM
📏 Reglas del equipo
❌ No push directo a develop
✔ Todo mediante Pull Request
✔ Un PR por tarea
✔ Tailwind obligatorio
✔ Código limpio y consistente
🧠 Convención de commits
feat: nueva funcionalidad
fix: corrección de bug
style: cambios visuales
refactor: mejoras internas
docs: documentación
💾 Favoritos
localStorage.setItem("favorites", JSON.stringify([...]))
⚠️ Consideraciones
Precio 0 → mostrar "Free to Play"
Rating escala 0–5
No modificar nombres del modelo (titulo, no title)
No usar CSS externo (solo Tailwind)
🚧 Estado del proyecto
 Setup inicial
 Routing
 Listado
 Details
 Favoritos
 Búsqueda
🚀 Futuras mejoras
Scroll infinito
Skeleton loading
Animaciones
Dark / Light mode
🧠 Nota del PM

Este proyecto está organizado para:

trabajar en paralelo
evitar conflictos
mantener consistencia visual
simular un entorno profesional real
🍕

Si alguien rompe develop, paga las pizzas.
```
