# Pago de Crédito en Cuotas

El objetivo de este laboratorio es crear una ruta que reciba una lista de todos los gastos realizados a crédito y el número de cuotas elegido.

## Request body

- El body debe ser un objeto que contenga dos campos: `gastos` y `numeroCuotas`
- El campo `gastos` debe ser una lista de la clase `Gasto`. La cual debe contener los siguientes campos
  - `tipo`: El tipo de gasto, solo puede aceptar `alimentacion`, `diversion` y `salud` como posibles valores
  - `descripcion`: La descripción del gasto, no debe tener más de 50 carácteres.
  - `monto`: El monto del gasto con 2 decimales.
- El campo `numeroCuotas` debe ser un entero que solo admite `6`, `9` y `12` como posibles valores

## Response body

- La respuesta debe ser un objeto que contiene los campos `cuotas` y `costoTotal`
- El campo `cuotas` debe ser una lista de la clase `Cuota`. La cual debe contener los siguientes campos
    - `order`: El identificador ordinal de la cuota. Indica el orden en el cual deben ser pagadas las cuotas
    - `monto`: El monto a pagar mensualmente. Este monto debe contener un 1% de recargo sobre la deuda actual. Es decir: Si el usuario escogió 6 cuotas, la primera cuota obtiene 1% de recargo sobre el 100% (6/6) de la deuda total. La segunda cuota obtiene 1% de recargo sobre el 83.33% (5/6) de la deuda total. La tercera cuota obtiene 1% de recargo sobre el 66.66% (4/6) de la deuda total. La cuarta cuota obtiene 1% de recargo sobre el 50% (3/6) de la deuda total. Y así hasta pagar la totalidad del crédito.
- El campo `costoTotal` representa el monto total del crédito, es un valor decimal y es la suma de todos los gastos. Adicionalmente, se debe aplicar un descuento del 0.1% al costo total por cada compra realizada con un tope del 10%. Esto es para incentivar al usuario a utilizar el crédito muchas compras pequeñas en lugar de una compra grande.
