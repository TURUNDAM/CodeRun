/*
В каждой клетке прямоугольной таблицы
N×M записано некоторое число. Изначально игрок находится в левой верхней клетке.
За один ход ему разрешается перемещаться в соседнюю клетку либо вправо,
либо вниз (влево и вверх перемещаться запрещено).
При проходе через клетку с игрока берут столько килограммов еды,
какое число записано в этой клетке (еду берут также за первую и последнюю клетки его пути).
Требуется найти минимальный вес еды в килограммах, отдав которую игрок может попасть в правый нижний угол.
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

function calculateMinPath(N,M,matrix){
    const help = Array(N+1).fill(null).map(() => Array(M+1).fill(Infinity));
    help[0][1] = 0;
    help[1][0] = 0;
    for(let i=1; i<=N;i++){
        for(let j=1; j<=M;j++){
            help[i][j] = Math.min(help[i-1][j] + matrix[i-1][j-1], help[i][j-1] + matrix[i-1][j-1])
        }
    }
    return help[N][M];
}

rl.on('line', (input) => {
    if (firstLine) {
        [N, M] = input.split(' ').map(Number);
        firstLine = false;
    } else {
        matrix.push(input.split(' ').map(Number));
        counterRow++;
    }

    if(counterRow === N){
        console.log(calculateMinPath(N,M,matrix));
    }
    /*
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    const n = parseInt(input);
    console.log(n);
    */

    rl.close();
});

