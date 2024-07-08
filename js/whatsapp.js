//fuincion para llamar el nombre del curso 
function whats(course = "") {
    const PHONE = 5215578929085;
    const BASE_URL = `https://wa.me/${PHONE}`;

    const MESSAGE = encodeURI("Hola! me gustaría obtener información sobre, ");
    const link = `${BASE_URL}?text=${MESSAGE}${encodeURI(course)}`;

    window.open(link, '_blank');
}

//funcion para llamar el mensaseje general 
function openWhatsApp() {
    const PHONE = 5215578929085;
    const MESSAGE = "Hola! Me gustaría obtener información.";

    const url = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(MESSAGE)}`;
    
    window.open(url, '_blank');
}


//funcion original
/*
function whats(course) {
    const PHONE = 5215578929085;
    const MESSAGE = encodeURI("Hola! me gustaría obtener información sobre, ");
    let link = `https://wa.me/${PHONE}?text=${MESSAGE}${encodeURI(course)}`;
    var win = window.open(link, '_blank');
}
*/