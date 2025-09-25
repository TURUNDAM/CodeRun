/*
В левом верхнем углу прямоугольной таблицы размером
N×M находится черепашка. В каждой клетке таблицы записано некоторое число.
Черепашка может перемещаться вправо или вниз,
при этом маршрут черепашки заканчивается в правом нижнем углу таблицы.
Подсчитаем сумму чисел, записанных в клетках,
через которую проползла черепашка (включая начальную и конечную клетку).
Найдите наибольшее возможное значение этой суммы и маршрут, на котором достигается эта сумма.
*/

const readline = require('readline');
firstLine = true;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let N;
let M;
let matrix = [];
let counterRow = 0;

function calculateMaxPath(N, M, matrix) {
    const help = Array(N + 1).fill(null).map(() => Array(M + 1).fill(0));
    help[0][1] = 0;
    help[1][0] = 0;
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= M; j++) {
            help[i][j] = Math.max(help[i - 1][j] + matrix[i - 1][j - 1], help[i][j - 1] + matrix[i - 1][j - 1])
        }
    }
    console.log(help[N][M]); // Нашли максимум

    let path = [];
    let i = N;
    let j = M;

    while (i > 1 || j > 1) {
        if (i === 1) { // Чтобы не выйти за границы матрицы
            path.push('R');
            j--;
        } else if (j === 1) { // Чтобы не выйти за границы матрицы
            path.push('D');
            i--;
        } else {
            if (help[i - 1][j] + matrix[i - 1][j - 1] === help[i][j]) {
                path.push('D');
                i--;
            } else {
                path.push('R');
                j--;
            }
        }
    }

    path.reverse();
    console.log(path.join(''));
}

rl.on('line', (input) => {
    if (firstLine) {
        [N, M] = input.split(' ').map(Number);
        firstLine = false;
    } else {
        matrix.push(input.split(' ').map(Number));
        counterRow++;
    }

    if (counterRow === N) {
        calculateMaxPath(N, M, matrix);
    }
    rl.close();
});

