¡Tenés razón! Lo que pasó es que en el bloque anterior, después del JSON de "Modelo de datos", el texto se desconfiguró y perdió todo el formato de Markdown. Se mezcló el código con el texto plano y por eso se ve como un "bloque" difícil de leer.

Acá te lo paso **corregido y bien estructurado**, con separaciones claras, negritas para que resalte lo importante y una estética mucho más limpia para GitHub.

```markdown
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