function transformarATipos(cosas) {

    let respuesta = [];

    for (let i = 0; i < cosas.length; i++) {

        respuesta[i] = typeof cosas[i];
    }

    return respuesta;
}

console.log(transformarATipos([1, "casa", {}])); 
console.log(transformarATipos([function() { }, true]));