let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWin();
        
        if (gameActive) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                botMove(); // Добавляем ход бота
            }
        }
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(Игрок[a] );
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        alert('Ничья!');
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.textContent = '');
}

function botMove() {
    const availableCells = board.map((cell, index) => (cell === '') ? index : null).filter(index => index !== null);
    if (availableCells.length > 0) {
        const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
        board[randomIndex] = currentPlayer; // Бот ставит свою "O"
        const cells = document.querySelectorAll('.cell');
        cells[randomIndex].textContent = currentPlayer;
        checkWin();
        currentPlayer = 'X'; // Смена игрока
    }
}