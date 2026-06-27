Here's the formatted version:

---

## Estrategia General

Al ser una página web orientada a la venta de productos, se optó por enfocar los tests en lo básico: la visualización de estos y la selección en particular, así como un test E2E que fuese desde el login hasta consumada la compra.

Como los tests unitarios eran relativamente simples, se eligió usar Vitest, ya que además está diseñada para funcionar nativamente con Vite (framework que usamos con React). Para el linting usamos ESLint, que es lógicamente la opción más usada por lejos para hacer linting en JavaScript. Además usamos Playwright para los tests E2E, ya que tras un poco de investigación descubrimos que la mejor forma de hacer estos no es solo testear los endpoints en orden, sino usar uno que los busque acceder a través del frontend y así asegurar que el flujo a nivel usuario sea posible y no solo a nivel código. Playwright brinda herramientas para esto y es estándar en los tests E2E para páginas web.

---

## Herramientas Seleccionadas

**Lint — ESLint**
Estándar de industria para linting en JavaScript.

**Tests Unitarios — Vitest**
Tras ver las otras alternativas propuestas (Jest y Bun Test), nos pareció la mejor por ser la más simple de usar — cosa que nos convenía por la simplicidad de los tests — y por tener funcionamiento nativo con Vite.

**E2E — Playwright**
Pensábamos hacerlo también con Vitest, pero tras un poco de investigación entendimos que los tests E2E tenían otro esquema de funcionamiento: verificar que tanto los endpoints como su acceso a través del frontend funcionasen. Llegamos así a esta herramienta, una de las más conocidas para realizar esto, además de que su integración era relativamente simple.

**CI/CD — GitHub Workflows**
No utilizamos una herramienta externa sino los workflows integrados de GitHub. Creamos un archivo `.yml` que, a través del sistema de workflows de GitHub, se ejecuta inmediatamente después de cada push y realiza una serie de pruebas. Si todas pasan, se llama a Vercel para deployear; si no, el deploy se cancela.

---

## Tests Desarrollados

**1. Buscar Productos**
Hace un fetch a la base de datos que verifica que se pueda solicitar la lista de productos completa o filtrada. Asegura que al ingresar a la página principal los usuarios podrán acceder a los productos correctamente y que los filtros también funcionen.

**2. Buscar Producto Específico**
Valida que se pueda seleccionar cada producto individualmente, de modo que los usuarios puedan seleccionarlos y visualizarlos correctamente a la hora de hacer una compra.

**3. Test E2E**
Verifica que el flujo de usuario funcione de manera completa: login, visualización de productos, selección de productos, agregar y borrar del carrito, y cierre de sesión.

---

## Casos de Uso Críticos

Se eligieron las funcionalidades de realizar una compra y de visualizar los productos de manera completa y filtrada, ya que son las dos funciones clave del proyecto — si alguna falla, la página no cumple su propósito.

Se analizó también hacer tests con otras funciones (crear/borrar productos), pero no se consideró esencial: si eso fallase, el usuario podría seguir utilizando la página con normalidad.

---

## Pipeline de CI/CD

```
install → lint → tests → build → deploy
```

Todos los pasos se realizan en paralelo y deben completarse exitosamente para llegar al deploy. Esto permite detectar si más de un paso falla o rastrear fácilmente el error si solo falla uno.

- **Install:** descarga las dependencias necesarias.
- **Lint:** busca errores lógicos o de sintaxis en el código.
- **Tests:** verifica las funciones básicas del producto detalladas anteriormente.
- **Build:** verifica que el producto se inicie correctamente previo al deploy en Vercel.

---

## Limitaciones y Deuda Técnica

Quedó sin cubrir un posible test de registro. No se pudo implementar porque, dado el funcionamiento de la autenticación OAuth de Supabase, se hubiera requerido realizar varios pasos adicionales para borrar el usuario recién creado, o de lo contrario se hubiera acumulado una gran cantidad de usuarios falsos en la base de datos.