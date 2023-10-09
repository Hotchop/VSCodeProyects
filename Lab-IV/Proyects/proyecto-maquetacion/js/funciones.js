export function validar(obj){
    return Object.values(obj).every(input => input!=='') //Verifica que todos los campos de del objeto estan completos
}