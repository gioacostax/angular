# Template Microfrontend Angular

## Tecnologías

- **Framework**: Angular 21
- **UI Components**: PrimeNG 21
- **Estilos**: TailwindCSS 4
- **Data Fetching**: TanStack Query (Angular)
- **Estado**: RxJS con apoyo Signals
- **Linting**: Biome
- **Testing**: Vitest
- **Paquetes**: pnpm

## Estructura estandar y recomenada

```
project/
├── public/                ← archivos estáticos, se sirven tal cual
│   ├── favicon.ico
│   ├── robots.txt
│   └── fonts/
├── src/
│   ├── app/
│   │   ├── core/               ← Servicios singleton, interceptores, guards
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   └── services/
│   │   │
│   │   ├── features/           ← Módulos por funcionalidad (lazy loaded)
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── auth.routes.ts
│   │   │   └── dashboard/
│   │   │       ├── dashboard.component.ts
│   │   │       └── dashboard.routes.ts
│   │   │
│   │   ├── shared/             ← Componentes, pipes y directivas reutilizables
│   │   │   ├── components/
│   │   │   ├── directives/
│   │   │   └── pipes/
│   │   │
│   │   ├── layout/             ← Header, footer, sidebar
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── sidebar/
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.config.ts       ← Configuración principal (standalone)
│   │   └── app.routes.ts       ← Rutas raíz
│   │
│   └── assets/            ← archivos que pasan por el build pipeline
│       ├── images/        ← imágenes que serán optimizadas
│       ├── icons/         ← SVGs que se procesan
│       └── i18n/          ← archivos de traducción (.json)
```

## Shared

La carpeta `shared/` está diseñada para contener código que se compartiría entre los distintos microfrontends de la arquitectura. Esto incluye:

- **shared/config**: Configuración centralizada de la aplicación (variables de entorno, constantes, etc.). En un proyecto real, esta carpeta debería ser un repositorio independiente y se incluiría como submódulo de Git para mantener la separación de concerns y facilitar el versionado independiente.

En una arquitectura de microfrontends real, cada carpeta dentro de `shared/` debería ser un repositorio separado y se incluiría como submódulo de Git, permitiendo:

- Versionado independiente
- Despliegue separado
- Menos acoplamiento entre equipos

## Extensiones Recomendadas (VS Code)

Para un flujo de desarrollo adecuado, se recomienda instalar las siguientes extensiones:

- **Angular Language Service**
- **Biome**
- **Tailwind CSS IntelliSense**
- **EditorConfig**
- **JavaScript and TypeScript Nightly**

## Scripts

```bash
pnpm dev      # Iniciar servidor de desarrollo
pnpm build    # Build para producción
pnpm lint     # Verificar código
pnpm test     # Ejecutar tests
```
