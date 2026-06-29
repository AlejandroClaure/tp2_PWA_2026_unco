# EsteamApp — Catálogo de Juegos

---

## Información académica

**Programación Web Avanzada — Facultad de Informática — Universidad Nacional del Comahue — 2026**

### Trabajos prácticos realizados
- TP2: Aplicación React + API + Routing + Favoritos
- TP3: Seguridad, Autenticación y JWT

---

## Integrantes

| Nombre | Email | Rol |
| :--- | :--- | :--- |
| **Joaquín Vargas** | joaquinivl95@gmail.com | Frontend |
| **Gastón Llaupe** | gaston.llaupe@est.fi.uncoma.edu.ar | Frontend |
| **Alejandro Santos Claure** | alejandroclaure01@gmail.com | PM / Scrum Master |

---

## Descripción

Aplicación web que simula un catálogo de videojuegos inspirado en Steam. Permite explorar juegos, registrarse, iniciar sesión y gestionar una lista de favoritos persistida en el backend mediante autenticación JWT.

El backend puede verse en este [repositorio](https://github.com/gastonllaupe/tp3_PWA_2026_unco).

- Deploy frontend: https://tp2-pwa-2026-unco.vercel.app/
- Deploy backend: https://tp3-pwa-2026-unco.vercel.app/

---

## Funcionalidades

- Listado de juegos con paginación infinita
- Búsqueda en tiempo real con debounce
- Vista de detalle por juego
- Registro e inicio de sesión con JWT
- Sistema de favoritos persistido en el backend (por usuario)
- Rutas protegidas: `/favorites` requiere sesión activa
- Rutas públicas: `/login` y `/register` redirigen al home si ya hay sesión
- Interfaz estilo Steam (dark mode)
- Soporte multiidioma (Español / Inglés)

---

## Stack tecnológico

| Tecnología | Uso / Propósito |
| :--- | :--- |
| React | Biblioteca principal para la interfaz de usuario |
| Vite | Tooling y entorno de desarrollo |
| Tailwind CSS v4 | Estilado mediante clases de utilidad |
| React Router | Manejo de navegación y rutas de la SPA |
| Context API | Estado global de autenticación (AuthContext) |
| Vitest | Framework de testing |
| React Testing Library | Testing de componentes React |
| i18next | Internacionalización |

---

## Variables de entorno

Crear un archivo `.env` en la raíz:

```env
VITE_API_URL=http://localhost:3000/api
```

En producción (Vercel) configurar:

```env
VITE_API_URL=https://tp3-pwa-2026-unco.vercel.app/api
```

---

## Instalación y setup

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/AlejandroClaure/tp2_PWA_2026_unco.git
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

5. **Configurar variable de entorno:**
   ```bash
   # Crear .env en la raíz con:
   VITE_API_URL=http://localhost:3000/api
   ```

6. **Ejecutar el proyecto:**
   ```bash
   npm run dev
   ```

> La app estará disponible en `http://localhost:5173`

---

## Testing

```bash
# Modo watch
npm run test

# Una sola ejecución
npm run test:run
```

### Componentes testeados

- Header, Footer, SearchBar
- GameCard, GameList, GameDetailCard
- FavoriteButton, NosotrosModal, Home

---

## Estructura del proyecto

```text
src/
 ├── components/
 │    ├── GameCard/
 │    ├── GameList/
 │    ├── GameDetailCard/
 │    ├── FavoriteButton/
 │    ├── Header/
 │    ├── Layout/
 │    ├── SearchBar/
 │    ├── PrivateRoute/       # redirige a /login si no hay sesión
 │    └── PublicRoute/        # redirige al home si ya hay sesión
 ├── context/
 │    └── AuthContext.jsx     # estado global: user, token, login, logout
 ├── pages/
 │    ├── Home/
 │    ├── Details/
 │    ├── Favorites/
 │    ├── Login/
 │    ├── Register/
 │    └── NotFound/
 ├── services/
 │    └── gameApi.js          # llamadas a la API (games + auth + favorites)
 ├── const/
 │    └── routes.js
 ├── main.jsx                 # router + AuthProvider
 └── index.css
```

---

## Estrategia de branches

| Branch | Propósito |
| :----- | :-------- |
| `develop` | Rama base de integración |
| `feat-*` | Nuevas funcionalidades |
| `fix-*` | Correcciones |
| `docs-*` | Documentación |

### Flujo de trabajo

```bash
# Actualizar develop antes de empezar
git checkout develop
git pull origin develop

# Crear branch para la tarea
git checkout -b feat-nombre-tarea

# Desarrollar, commitear y subir
git add .
git commit -m "feat: descripción"
git push origin feat-nombre-tarea

# Abrir Pull Request a develop en GitHub
```

### Reglas del equipo

- No se hacen commits directos a `develop` — siempre por PR
- Cada PR necesita al menos una aprobación para mergear
- Resolver conflictos en la feature branch, no en develop
