document.addEventListener('DOMContentLoaded', () => {
    const storeData = localStorage.getItem('storeData');
    if (storeData){
        document.getElementById('data').textContent = storeData;
    
    }else {
        document.getElementById('data').textContent = 'NO HAY DATOS GUARDADOS'
    }
});