function transformarATipos(cosas) {

    let respuesta = new Array;
    for (var i in cosas) {

        respuesta[i] = typeof(cosas[i]);
    }

    return respuesta;
}

console.log(transformarATipos([1, "casa, {}"])); 
console.log(transformarATipos([function(){}, true]));