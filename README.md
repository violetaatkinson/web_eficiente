# VA — Automatizaciones de IA a medida

Landing page de VA, agencia de inteligencia artificial que diseña, construye e integra automatizaciones a medida para empresas.

🔗 Landing en vivo: _(añade aquí la URL cuando la despliegues, p. ej. en Vercel o Netlify)_

## Vista previa

Hero de la landing de VA

![Hero de la landing de VA](docs/screenshots/hero.png)

[Ver la landing completa](docs/screenshots/landing-completa.png)

_(Las capturas todavía no existen — instrucciones en [docs/screenshots/README.md](docs/screenshots/README.md))_

## Stack

- **Frontend:** HTML5 + CSS3 (sistema tipográfico fluido a medida) + JavaScript vanilla — sin build ni dependencias — `index.html`, `assets/`
- **Backend:** ninguno todavía — sitio 100% estático
- **Base de datos:** ninguna — el formulario de newsletter está maquetado pero sin conectar; enchúfalo a tu proveedor de email o backend cuando lo tengas

## Estructura

```
/
├── index.html              # Landing completa (header, hero, servicios, seguridad, alianzas, resultados, footer)
├── assets/
│   ├── css/style.css       # Estilos y sistema de diseño (tipografía fluida, colores, componentes)
│   ├── js/main.js          # Interacciones (rotación de texto, filtros, menú móvil, scroll-to-top)
│   └── img/                # Vacío — coloca aquí tus imágenes reales
├── docs/screenshots/       # Capturas usadas en este README
└── CLAUDE.md               # Reglas de trabajo del agente para este proyecto
```

## Cómo correrlo en local

No requiere instalación: puedes abrir `index.html` directamente en el navegador, o servirlo con cualquier servidor estático:

```
npx http-server -p 8080
```

y abrir `http://localhost:8080`.

## Imágenes por reemplazar

Todos los huecos de imagen de la landing (logos de clientes en el hero, logos de integraciones/tecnologías en "Un ecosistema completo de automatización", imagen de equipo en "Tus datos, protegidos") están marcados con el bloque `.img-placeholder` (borde punteado) en `index.html`. Sustitúyelos por tus propias imágenes `<img>` cuando las tengas.
