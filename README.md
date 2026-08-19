# VA — Automatizaciones de IA a medida

**VA** es la landing page de una agencia de inteligencia artificial que diseña, construye e integra automatizaciones a medida para empresas. El sitio está pensado para convertir visitantes en leads calificados: presenta la propuesta de valor en los primeros segundos, muestra resultados concretos y casos de uso reales, genera confianza con certificaciones de seguridad y cierra con múltiples llamados a la acción (agendar una llamada, unirse al programa de partners, suscribirse al newsletter).

Es una landing de una sola página (*single-page*), 100% estática, sin frameworks ni build step — pensada para cargar rápido y ser fácil de mantener y desplegar.

🔗 **Demo en vivo:** [web-eficiente.vercel.app](https://web-eficiente.vercel.app/)

---

## 📸 Preview

> Todavía no hay capturas versionadas en el repo — este entorno no tiene acceso a un navegador para generarlas automáticamente. Cuando tengas una, guardala en `docs/screenshots/` (por ejemplo `hero.png`, `full-page.png`) y reemplazá esta sección por:
> `![Hero](docs/screenshots/hero.png)`
>
> Mientras tanto, podés ver el sitio funcionando en el demo en vivo de arriba.

---

## ✨ Features

- **Hero con título animado** — palabra rotativa (JS) que cicla entre adjetivos ("Automatizados", "Optimizados", "Escalables"...) para reforzar el mensaje principal.
- **Cards de servicios** — 3 casos de uso destacados (Atención al cliente, Ventas & CRM, Operaciones internas) con métricas de impacto.
- **Ecosistema de integraciones** — sección con pestañas filtrables (Integraciones / Clientes / Tecnologías) que muestra logos reales de herramientas (Slack, Gmail, HubSpot, Notion, WhatsApp, OpenAI, Anthropic, Make, Zapier) con sus colores de marca.
- **Certificaciones y seguridad** — tarjetas con informes/auditorías de seguridad y cumplimiento.
- **Programa de partners** — dos audiencias (agencias/consultoras y empresas/organizaciones) con su propio CTA.
- **Resultados medibles** — bloque de estadísticas (proyectos entregados, satisfacción, horas ahorradas, integraciones activas).
- **Header inteligente** — fijo en la parte superior, transparente al inicio y con fondo sólido + blur al hacer scroll; incluye menú hamburguesa para mobile.
- **Newsletter** — formulario de suscripción en el footer (maquetado; falta conectarlo a un proveedor de email o backend).
- **Scroll suave y botón "volver arriba"** — navegación por anclas con `scrollIntoView` y botón flotante que aparece al scrollear.
- **Totalmente responsive** — breakpoints para desktop, tablet (≤1024px) y mobile (≤480px).

---

## 🛠️ Tech Stack

| Categoría | Tecnología | Uso en este proyecto |
|---|---|---|
| **Frontend** | HTML5 | Markup semántico, sin JSX/plantillas |
| **Frontend** | JavaScript (vanilla, sin build) | Menú móvil, filtros por pestaña, header dinámico, scroll suave, palabra rotativa del hero |
| **Styling** | CSS3 puro (sin framework) | Sistema de diseño propio: tipografía fluida basada en `vw`/`rem`, variables CSS (`:root`), componentes reutilizables (botones, cards, tags) |
| **Fuentes** | Google Fonts | Open Sans y Source Sans Pro |
| **Backend** | — | No tiene; sitio 100% estático |
| **Base de datos** | — | No aplica |
| **Hosting / Infra** | Vercel | Deploy y hosting del sitio en producción |
| **Control de versiones** | Git + GitHub | — |
| **Testing** | — | No hay suite de tests (proyecto estático sin lógica de negocio que testear) |

---

## 📁 Estructura del proyecto

```text
/
├── index.html              # Landing completa: header, hero, servicios, seguridad, alianzas, resultados, footer
├── assets/
│   ├── css/style.css       # Sistema de diseño completo (tipografía fluida, colores, componentes, responsive)
│   ├── js/main.js          # Interacciones: rotación de texto, filtros, menú móvil, scroll-to-top, header dinámico
│   └── img/                # Vacío por ahora — reservada para imágenes reales (logos, fotos) cuando las tengas
├── CLAUDE.md                # Reglas de trabajo del agente para este proyecto
└── README.md
```

No hay carpetas de `backend/`, `docs/` ni assets sin usar en el proyecto — se revisó explícitamente y `assets/img/` está vacía (todos los logos/íconos actuales son SVG inline dentro de `index.html`, marcados con comentarios `<!-- Sustituye ... -->` para cuando tengas tus propias imágenes).

---

## 🚀 Cómo correrlo en local

No requiere instalación ni dependencias.

**Opción 1 — Abrir directo:**
Doble clic en `index.html` (o clic derecho → "Open with Live Server" si usás esa extensión de VS Code).

**Opción 2 — Servidor estático:**
```bash
npx http-server -p 8080
```
y abrir `http://localhost:8080`.

---

## 🔐 Variables de entorno

Ninguna. El proyecto no usa `.env`, claves de API ni backend — todo el contenido es estático.

---

## 🎨 Diseño

- **Tipografía fluida**: el tamaño raíz (`html { font-size }`) escala con el ancho del viewport (`vw`) con un tope máximo, para que toda la escala tipográfica (títulos, texto, spacing) crezca o encoja de forma proporcional sin necesidad de media queries para cada elemento.
- **Mobile-first en breakpoints clave**: reglas específicas en 1024px (tablet) y 480px (mobile).
- **Sistema de componentes consistente**: una única fuente de verdad para tipografía (`.title-h1`...`.title-h4`, `.desc-1`...`.desc-3`, `.label-1`...`.label-3`) y botones (`.btn-main`, `.btn-border`, `.btn-arrow`) reutilizados en toda la página.
- **Paleta oscura con degradado de marca**: fondo con degradado teal → azul → índigo, consistente entre el header, el banner de anuncio y el resto de la página.
- **Placeholders explícitos**: cada imagen pendiente de reemplazo está marcada en el código para facilitar la personalización futura.

---

## 👩‍💻 Autor

Repositorio mantenido por [@violetaatkinson](https://github.com/violetaatkinson).
