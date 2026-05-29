# React Shopping Cart con Login

Aplicación web tipo e-commerce desarrollada con React y Vite. Este proyecto está basado en el proyecto open source:

https://github.com/ravinderh17/react-shopping-cart.git

A partir de ese proyecto se realizaron ajustes para adaptarlo al trabajo del curso, incluyendo la incorporación de un flujo básico de login y la preparación del sistema para pruebas funcionales, pruebas automatizadas y pruebas de desempeño.

## Repositorio del proyecto

https://github.com/juanferm0410/react-shopping-cart-con-login

## URL de la aplicación

https://statuesque-sunburst-34fe0f.netlify.app/

## Tipo de sistema

E-commerce web / carrito de compras con login.

## Descripción

El sistema permite visualizar productos, agregarlos al carrito, modificar cantidades, eliminar productos y confirmar una orden de compra. También cuenta con una pantalla de inicio de sesión básica para simular el acceso de un usuario al sistema.

## Funcionalidades principales

- Inicio de sesión.
- Visualización de productos.
- Agregar productos al carrito.
- Modificar cantidades.
- Eliminar productos del carrito.
- Cálculo automático del total.
- Confirmación de orden.

## Funcionalidades con lógica de negocio

| Funcionalidad | Lógica aplicada |
|---|---|
| Login | Validación básica de acceso del usuario |
| Agregar al carrito | Actualización del estado del carrito |
| Modificar cantidades | Aumento o disminución de productos seleccionados |
| Calcular total | Operación precio × cantidad |
| Confirmar orden | Validación del flujo de compra |

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS
- HTML
- LocalStorage
- Playwright

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/juanferm0410/react-shopping-cart-con-login.git
