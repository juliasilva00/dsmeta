export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";


// ?? coalescencia nula significa que do lado direito do operador temos o valor padrão da variavel
// ja do lado esquerdo alternativamente pegara o valor da variavel de ambiente setada
//ou seja pega o valor da variavel de ambiente se nao existir por padrao utilize o localhost8080