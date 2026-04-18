```markdown

---

# 🎮 Steam UI — Catálogo de Juegos

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</p>

<p align="center">
  Aplicación web estilo <strong>Steam</strong> desarrollada con React + Vite + Tailwind v4
</p>

---

## 📚 Información académica

**Trabajo Práctico N°2 — Programación Web Avanzada** **Facultad de Informática — Universidad Nacional del Comahue — 2026**

---

## 👥 Integrantes

| Nombre | Email | Rol |
| :--- | :--- | :--- |
| **Joaquín Vargas** | joaquinivl95@gmail.com | Frontend |
| **Gastón Llaupe** | gaston.llaupe@est.fi.uncoma.edu.ar | Frontend |
| **Alejandro Santos Claure** | alejandroclaure01@gmail.com | PM / Scrum Master |

---

## 🧾 Descripción

Aplicación web que simula un catálogo de videojuegos inspirado en Steam. Permite explorar juegos, visualizar su información detallada y gestionar una lista de favoritos.

---

## ✨ Funcionalidades

- 📦 **Listado de juegos** desde API (MockAPI).
- 🔎 **Búsqueda** en tiempo real.
- 📄 **Vista de detalle** por cada título.
- ⭐ **Sistema de favoritos** con persistencia en `localStorage`.
- 🎨 **Interfaz estilo Steam** (Dark mode nativo).
- ⏳ **Feedback visual:** Estados de carga y pantallas vacías.

---

## 🖼️ Capturas de pantalla

> ⚠️ *Agregar imágenes del proyecto una vez finalizado.*

| 🏠 Home | 📄 Detalle | ⭐ Favoritos |
| :---: | :---: | :---: |
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) | ![Favorites](./screenshots/favorites.png) |

---


---

## 🧠 Modelo de Datos

La estructura de los objetos que consumimos desde la API sigue este formato estándar:

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
  "plataformas": "PC, PS5, Xbox",
  "descripcion": "Texto descriptivo del juego...",
  "developer": "CD Projekt Red"
}
## 🧠 Modelo de Datos

La estructura de los objetos que consumimos desde la API sigue este formato estándar:

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
  "plataformas": "PC, PS5, Xbox",
  "descripcion": "Texto descriptivo del juego...",
  "developer": "CD Projekt Red"
}
```

---

## ⚙️ Stack Tecnológico

| Tecnología | Uso / Propósito |
| :--- | :--- |
| **React** | Biblioteca principal para la interfaz de usuario |
| **Vite** | Tooling y entorno de desarrollo ultra rápido |
| **Tailwind CSS v4** | Estilado mediante utilidades de última generación |
| **React Router** | Manejo de navegación y rutas de la SPA |
| **MockAPI** | Backend simulado para el consumo de datos |
| **localStorage** | Persistencia local para la lista de favoritos |

---

## 🎨 Paleta de Colores (Steam-like)

Para lograr la estética característica de la plataforma, utilizamos los siguientes códigos hexadecimales:

* 🔵 **Fondo Principal:** `#1b2838`
* 🌑 **Fondo Secundario:** `#171a21`
* 📂 **Tarjetas (Cards):** `#2a475e`
* 💎 **Acento (Primary):** `#66c0f4`
* ✨ **Hover:** `#1a9fff`
* ⚪ **Texto Principal:** `#c7d5e0`
* 🔘 **Texto Secundario:** `#8f98a0`

---

## 🌐 API Reference

Los datos se obtienen del siguiente endpoint:
`https://69e2e9773327837a1552b35a.mockapi.io/api/v1/juegos`

---

## 🚀 Instalación y Setup

Para poner en marcha el proyecto localmente, seguí estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/AlejandroClaure/tp2_PWA_2026_unco.git](https://github.com/AlejandroClaure/tp2_PWA_2026_unco.git)
   ```

2. **Entrar al directorio:**
   ```bash
   cd tp2_PWA_2026_unco
   ```

3. **Cambiar a la rama de desarrollo:**
   ```bash
   git checkout develop
   ```

4. **Instalar dependencias:**
   ```bash
   npm install
   ```

5. **Ejecutar el proyecto:**
   ```bash
   npm run dev
   ```

👉 *La app estará disponible en: `http://localhost:5173`*

---

## 📁 Estructura del Proyecto

```text
src/
 ├── components/       # Componentes (GameCard, List, SearchBar, etc.)
 ├── pages/            # Vistas (Home, Details, Favorites, NotFound)
 ├── const/            # Definición de rutas (routes.js)
 ├── main.jsx          # Punto de entrada de React
 └── index.css         # Directivas de Tailwind
```

---

## 🌿 Estrategia de Branches

Mantenemos un flujo de trabajo organizado mediante ramas descriptivas:

* `develop` (Rama base de integración)
* `develop/comp-name` (Desarrollo de componentes)
* `develop/feat-name` (Nuevas funcionalidades)

---

## 🔁 Flujo de Trabajo (Git Workflow)

1. Sincronizar local: `git pull origin develop`
2. Crear rama: `git checkout -b develop/mi-tarea`
3. Commitear cambios: `git commit -m "feat: descripción corta"`
4. Subir y crear PR: `git push origin develop/mi-tarea`

---

## 📏 Reglas del Equipo

* ❌ **No push directo a develop:** Todo cambio debe pasar por un Pull Request.
* ✔ **Aprobación:** Se requiere al menos 1 aprobación para mergear.
* ✔ **Atomicidad:** Un PR por cada tarea específica.
* ✔ **Estilos:** Uso obligatorio de **Tailwind CSS**.

---

## 💾 Gestión de Favoritos

La persistencia se maneja de forma local para evitar llamadas innecesarias al servidor:
```javascript
localStorage.setItem("favorites", JSON.stringify([...]))
```

---

## 🚧 Estado del Proyecto

- [x] Setup inicial
- [x] Routing
- [x] Listado de juegos
- [ ] Vista de detalles
- [ ] Sistema de favoritos
- [ ] Buscador en tiempo real

---

## 🍕 Nota del PM

> **"Si alguien rompe develop, paga las pizzas."** > Proyecto enfocado en consistencia visual y trabajo colaborativo profesional.

---
```
