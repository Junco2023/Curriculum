function mostrarHabilidades(tipo) {
    if (tipo === 'tecnica') {
        var habilidadesTecnicas = document.getElementById('habilidades-tecnicas');
        habilidadesTecnicas.style.display = (habilidadesTecnicas.style.display === 'none') ? 'block' : 'none';
    } else if (tipo === 'blanda') {
        var habilidadesBlandas = document.getElementById('habilidades-blandas');
        habilidadesBlandas.style.display = (habilidadesBlandas.style.display === 'none') ? 'block' : 'none';
    }else if (tipo==='otra'){
        var otrasHabilidades=document.getElementById('otras');
        otrasHabilidades.style.display=(otrasHabilidades.style.display==='none')? 'block' : 'none';
    }
}

