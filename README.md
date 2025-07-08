# API‑Producto – Laravel 10 REST API

**API‑Producto** es un backend RESTful construido con **Laravel 10** que gestiona un catálogo de productos. Incluye autenticación mediante **Laravel Sanctum** y documentación automática con **Swagger / OpenAPI** a través de **l5‑swagger**.

> Proyecto iniciado en **Laragon** (Windows) pero funciona en cualquier entorno que cumpla los requisitos.

---

## ✨ Características

- CRUD completo de productos (`/api/products`)
- Autenticación basada en **tokens Sanctum** (SPA & API tokens)
- Validación de entrada con *Form Requests* y reglas personalizadas
- Documentación interactiva **Swagger UI** en `/api/docs`
- Tests unitarios y de integración con **PHPUnit 10**
- Compilación de assets con **Vite** (JS + Axios)

---

## 🗂 Tabla de contenidos

1. [Demo](#demo)
2. [Stack y dependencias](#stack-y-dependencias)
3. [Requisitos previos](#requisitos-previos)
4. [Instalación](#instalación)
   - [Backend (Laravel)](#backend-laravel)
   - [Assets con Vite](#assets-con-vite)
5. [Variables de entorno](#variables-de-entorno)
6. [Uso rápido](#uso-rápido)
7. [Documentación Swagger](#documentación-swagger)
8. [Scripts útiles](#scripts-útiles)
9. [Contribuir](#contribuir)
10. [Licencia](#licencia)

---

## 📸 Demo



---

## 🛠️ Stack y dependencias

### Composer (extracto)

| Paquete                    | Versión  | Descripción                               |
| -------------------------- | -------- | ----------------------------------------- |
| **laravel/framework**      | 10.48.29 | Core del framework                        |
| **laravel/sanctum**        | 3.3.3    | Autenticación API / SPA                   |
| **darkaonline/l5-swagger** | 8.6.5    | Integración Swagger para Laravel          |
| **zircote/swagger-php**    | 4.11.1   | Anotaciones OpenAPI                       |
| **guzzlehttp/guzzle**      | 7.9.3    | Cliente HTTP para pruebas / integraciones |
| (dev) **phpunit/phpunit**  | 10.5.47  | Framework de tests                        |

```
brick/math 0.12.3
carbonphp/carbon-doctrine-types 2.1.0
… (ver salida completa arriba)
```

### NPM

| Paquete                 | Versión | Uso                         |
| ----------------------- | ------- | --------------------------- |
| **vite**                | 5.4.19  | Bundler / dev‑server        |
| **laravel-vite-plugin** | 1.3.0   | Integración Vite + Laravel  |
| **axios**               | 1.10.0  | Cliente HTTP en el frontend |

---

## 📋 Requisitos previos

- **PHP ≥ 8.2** con extensiones: `bcmath`, `ctype`, `fileinfo`, `json`, `mbstring`, `openssl`, `pdo`, `tokenizer`, `xml`
- **Composer ≥ 2.7**
- **Node.js ≥ 20** y **npm ≥ 10** (para compilar assets)
- **MySQL 8** (o PostgreSQL / SQLite)
- **Git**

> En Windows se recomienda **Laragon** o **WSL2**.

---

## 🚀 Instalación

### 1 – Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/api-producto.git
cd api-producto
```

### 2 – Backend (Laravel)

```bash
composer install
cp .env.example .env
php artisan key:generate

# Configura la base de datos en .env
php artisan migrate --seed

# Instala Sanctum (genera claves personal access)
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

# Generar docs iniciales
php artisan l5-swagger:generate

php artisan serve  # http://localhost:8000
```

### 3 – Assets con Vite

```bash
npm install
npm run dev  # recarga en http://localhost:5173
```

> Si sólo usas la API, este paso es opcional.

---

## 🔑 Variables de entorno

```dotenv
APP_NAME="API Producto"
APP_ENV=local
APP_KEY=base64:GENERADO
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=api_producto
DB_USERNAME=root
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:5173,localhost:8000
SESSION_DOMAIN=localhost
```

---

## ⚡ Uso rápido

```bash
# Obtener token tipo SPA (login)
POST /sanctum/token  { email, password }

# Listar productos (token en Header Authorization: Bearer xxx)
GET /api/products

# Crear producto
POST /api/products  { name, description, price }
```

---

## 📑 Documentación Swagger

Después de `php artisan l5-swagger:generate` la UI queda disponible en:

- **Swagger UI** → `http://localhost:8000/api/docs`
- **JSON OpenAPI** → `http://localhost:8000/api/docs.json`

Ejemplo *cURL*:

```bash
curl -H "Authorization: Bearer $TOKEN" http://localhost:8000/api/products
```

---

## 🧰 Scripts útiles

| Acción                   | Comando                            |
| ------------------------ | ---------------------------------- |
| Tests unitarios          | `php artisan test`                 |
| Reset + seed DB          | `php artisan migrate:fresh --seed` |
| Generar docs Swagger     | `php artisan l5-swagger:generate`  |
| Pint (formato de código) | `./vendor/bin/pint`                |

---

## 🤝 Contribuir

1. Haz un *fork* del proyecto.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Commit: `git commit -m "feat: agrega mi mejora"`.
4. Push: `git push origin feature/mi-mejora`.
5. Abre un Pull Request.

Se aceptan PRs con buenas pruebas y siguiendo *Pint*.

---

## 🪪 Licencia

Distribuido bajo la licencia **MIT**. Consulta `LICENSE` para más detalles.

---

> Hecho con ❤ por Gustavo Noriega y colaboradores.

