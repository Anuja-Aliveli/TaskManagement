# My Angular Project with PrimeNG

This project is built with Node.js 20, Angular 17.0, and PrimeNG 17.0.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm)
- [Node.js 20](https://nodejs.org/)
- [Angular CLI 17.0](https://angular.io/cli)

## Setup

1. Clone this repository:

   ```
   git clone  https://github.com/Anuja-Aliveli/TaskManagement
   cd TaskManagement
   ```

2. Use nvm to switch to Node.js 20:

   ```
   nvm use 20
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Development Server

Run the development server:

```
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

To build the project for production:

```
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Adding PrimeNG Components

This project uses PrimeNG 17.0. To add a new PrimeNG component:

1. Import the component module in your `app.module.ts`:

   ```typescript
   import { ButtonModule } from 'primeng/button';

   @NgModule({
     // ...
     imports: [
       // ...
       ButtonModule,
     ],
     // ...
   })
   export class AppModule {}
   ```

2. Use the component in your template:
   ```html
   <p-button label="Click me!"></p-button>
   ```

For more information on available components and their usage, refer to the [PrimeNG documentation](https://primeng.org/installation).

## Further Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
