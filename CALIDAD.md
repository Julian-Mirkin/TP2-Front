Estrategia general: qué enfoque eligieron para garantizar calidad y por qué. No alcanza
con listar herramientas; deben explicar el razonamiento detrás de cada elección.

Herramientas seleccionadas: qué usan para tests unitarios, E2E, lint, CI/CD, y por qué
eligieron esas y no otras. Si evaluaron alternativas y las descartaron, mencionarlo.

Tests desarrollados: listado de los tests implementados con una descripción de qué caso
de uso cubre cada uno y qué comportamiento valida. Ejemplo: "Test E2E: usuario no
autenticado es redirigido al login al intentar acceder a /dashboard".

Casos de uso críticos: cuáles son los flujos de la aplicación que consideran más
importantes proteger con tests y por qué los priorizaron sobre otros.

Pipeline de CI/CD: descripción de los pasos del workflow, qué hace cada uno y qué
decisión de diseño tomaron (ej. por qué el deploy solo corre si los tests pasan, qué pasa si
falla el lint).

Limitaciones y deuda técnica: qué quedó sin cubrir, qué mejorarían con más tiempo, qué
sabían que era frágil y aceptaron como riesgo consciente.

Opcional extra:
● Integración de Sentry u otro servicio de error monitoring con al menos un error
capturado y documentado en el CALIDAD.md
● Cobertura de tests superior al 60% en las funciones de negocio (reporte generado
con vitest --coverage), con el resultado comentado en el CALIDAD.md
● Uso de un agente de IA (Codex, Cursor, etc.) para generación de tests, con sección
en el CALIDAD.md explicando qué generó, qué modificaron y por qué
● Uso de GitHub Projects o el tablero de issues para organizar el trabajo del equipo
durante el TP (kanban básico: To Do / In Progress / Done)
● Implementación de PR templates con checklist de revisión