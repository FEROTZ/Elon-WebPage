function whats(course) {
    const PHONE = 5215578929085
    //Es necesario dejar el espacio para complementar el mensaje con el curso/certificación
    const MESSAGE = encodeURI("Hola! me gustaría obtener información sobre, ")
    encodeURI(course)
    let link = `https://wa.me/${PHONE}?text=${MESSAGE}${course}`
    var win = window.open(link, '_blank');
}