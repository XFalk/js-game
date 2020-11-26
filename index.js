const variables = document.querySelectorAll(`.variable`);
const user = document.querySelector(`#user`);
const comp = document.querySelector(`#comp`);
const dialog = document.querySelector(`dialog`);
const message = document.querySelector(`#message`);
const close = document.querySelector('#close');
const game = document.querySelector(`#game`);
variables.forEach(variable => variable.addEventListener('click', playRound));
let computerCount = 0;
let playerCount = 0;
close.addEventListener('click', () => {
    dialog.close();
});
// функция запуска раунда
function playRound(e) {
    let playerSelection = e.path[1].id;
    let computerSelection = computerPlay();
    let result;
    if (playerSelection == computerSelection) {
        result = `<b>Ничья</b>`;
    } else if (playerSelection == `stone` && computerSelection == `scissors`) {
        result = `<b>Вы выиграли!</b> Камнень бьёт ножницы`;
    } else if (playerSelection == `stone` && computerSelection == `paper`) {
        result = `<b>Вы проиграли!</b> Бумага бьёт камень`;
    } else if (playerSelection == `scissors` && computerSelection == `stone`) {
        result = `<b>Вы проиграли!</b> Камнень бьёт ножницы`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        result = `<b>Вы выиграли!</b> Ножницы бьют бумагу`;
    } else if (playerSelection == `paper` && computerSelection == `stone`) {
        result = `<b>Вы выиграли!</b> Бумага бьёт камень`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        result = `<b>Вы проиграли!</b> Ножницы бьют бумагу`;
    }
    game.innerHTML = `Компьютер выбрал ` + translate(computerSelection) + "<br>" + result;
    countWin(result);
    selecrWin();
    console.log(result);

    return result;

}
//функция рандомного выбора компьютером
function computerPlay() {
    let x = Math.floor(Math.random() * Math.floor(3));
    let result;
    switch (x) {
        case 0:
            result = `stone`;
            break;
        case 1:
            result = `scissors`;
            break;
        case 2:
            result = `paper`;
            break;
    }
    return result;
}
//функция перевода
function translate(str) {
    if (str == `stone`) {
        return `КАМЕНЬ`;
    } else if (str == `scissors`) {
        return `НОЖНИЦЫ`;
    } else if (str == `paper`) {
        return `БУМАГА`;
    }

}
//функция счётчика побед
function countWin(result) {
    if (result.includes(`Вы выиграли`)) {
        playerCount = playerCount + 1;
    } else if (result.includes(`Вы проиграли`)) {
        computerCount = computerCount + 1;
    }
    user.textContent = `Ваш счёт - ` + playerCount;
    comp.textContent = `Счёт компьютера - ` + computerCount;
    console.log(`игрок ` + playerCount + `
` + `компьютер ` + computerCount);
}
//функция выбора победителя
function selecrWin() {
    if (playerCount == 5) {
        playerCount = 0;
        computerCount = 0;
        user.textContent = `Ваш счёт - ` + playerCount;
        comp.textContent = `Счёт компьютера - ` + computerCount;
        message.textContent = `Поздравляем, вы обошли эту железку`;
        dialog.show();
    } else if (computerCount == 5) {
        playerCount = 0;
        computerCount = 0;
        user.textContent = `Ваш счёт - ` + playerCount;
        comp.textContent = `Счёт компьютера - ` + computerCount;
        message.textContent = `К сожалению вы проиграли, в этот раз компьютер оказался сильнее`;
        dialog.show();
    }
}
//функция запускающая 5 раундов
/* function game() {
            let computerCount = 0;
            let playerCount = 0;
            for (let i = 0; i < 5; i++) {
                let x = i + 1;
                alert(`Раунд` + x)
                let playerSelection = window.prompt(`Введите ваш вариант`, `камень`) // выбор игрока
                let computerSelection = computerPlay() // выбор компьютера
                console.log(`Компьютер выбрал - ` + computerSelection);
                let result = playRound(playerSelection, computerSelection) // формируем результаты раунда   
                console.log(result) // выводим результат
                if (result.includes(`Вы выиграли`)) {
                    playerCount = playerCount + 1;
                } else if (result.includes(`Вы проиграли`)) {
                    computerCount = computerCount + 1;
                }
            }
            if (computerCount == playerCount) {
                console.log(`По результатам пяти раундов у вас ничья
Компьютер выиграл - ${computerCount} раз
Вы выиграли - ${playerCount} раз`);
            } else if (computerCount > playerCount) {
                console.log(`По результатам пяти раундов вы проиграли :-(
Компьютер выиграл - ${computerCount} раз
Вы выиграли - ${playerCount} раз`);
            } else if (computerCount < playerCount) {
                console.log(`По результатам пяти раундов вы выиграли :-)
Компьютер выиграл - ${computerCount} раз
Вы выиграли - ${playerCount} раз`);
            }
        }*/
//game();
/*const playerSelection = window.prompt(`Введите ваш вариант`, `камень`) // выбор игрока
const computerSelection = computerPlay() // выбор компьютера
console.log(`Компьютер выбрал - ` + computerSelection);
const result = playRound(playerSelection, computerSelection) // формируем результаты раунда
console.log(result) // выводим результат*/
