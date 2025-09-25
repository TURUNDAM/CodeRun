"""
Рассмотрим три числа
a, b и c. Упорядочим их по возрастанию.

Какое число будет стоять между двумя другими?
"""

import sys


def main():
    stringNumbers = input();
    array = list(stringNumbers);
    result = int[];
    for symbol in array:
        if symbol != ' ':
            result.append(symbol)
    result.sort();
    print(result[len(result)/2]);
    """
    Пример ввода и вывода числа n, где -10^9 < n < 10^9:
    n = int(input())
    print(n)
    """
    pass


if __name__ == '__main__':
    main()
