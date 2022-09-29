function createBoard() {
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = 'repeat(16, 1fr)';
    container.style.gridTemplateRows = 'repeat(16, 1fr)';
        
    for(let i = 0; i < 256; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        container.insertAdjacentElement('beforeend', div);
    }
}