//game1

function gameseasons() {
    let monthN = Number(prompt('Введите номер месяца, чтобы узнать время года.'));
   
    if (monthN == 1 || monthN == 2 || monthN == 12) {
        return(console.log(`Время года - Зима.`));
    } 
    else if (monthN == 3 || monthN == 4 || monthN == 5 ) {
        return(console.log(`Время года - Весна.`));
    }
    else if (monthN == 6 || monthN == 7 || monthN == 8 ) {
        return(console.log(`Время года - Лето.`));
    }
    else if (monthN == 9 || monthN == 10 || monthN == 11 ) {
        return(console.log(`Время года - Осень.`));
    }
    else {
        return(console.log(`Введите НОМЕР месяца.`));
    }
} 


