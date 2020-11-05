// 1

let name,
    age,
    city,
    phone,
    email,
    company;
name = prompt(`Ваше имя?`);
age = prompt (`Ваш возраст?`);
city = prompt (`Ваш город проживания?`);
phone = prompt (`Ваш контактный телефон?`);
email = prompt (`Ваш email?`);
company = prompt (`В какой компании вы работаете?`);
console.log (`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone},${email}.`);

// 2

let year = 2020;

born = year - age;
console.log(`${name} родился в ${born} году.`);

// 3

let string = prompt(`Введите 6 цифр`);
    sum1 = Number(string[0] + string[1] + string[2]);
    sum2 = Number(string[3] + string[4] + string[5]);
    if(sum1 == sum2){
        console.log(`yes`)
    } else{
        console.log(`no`)
    }

//4

let a = 0;

if(a > 0){
    console.log(`Верно`)
} else {
    console.log(`Неверно`)
}

//5

a = 10;
let b = 2,
    c,
    d,
    f;

c = a + b;
console.log(c);

c = a - b;
console.log(c);

c = a * b;
console.log(c);

c = a / b;
console.log(c);

d = a + b;
if(d > 1){
    f = d * d
    console.log(f)
}

//6

(a > 2 && a < 11 || b >=6 && b < 14)?console.log(`верно`):console.log(`неверно`);

//7

let n = prompt(`Введите число от 0 до 59`);

switch (true) {
    case (n >= 0 && n < 15): console.log(`первая четверть`);
    break;
    case (n >= 15 && n < 30): console.log(`вторая четверть`);
    break;
    case (n >= 30 && n < 45): console.log(`третья четверть`);
    break;
    case (n >= 45 && n <= 59): console.log(`четвертая четверть`);
    break;
    default: console.log(`Неверное значение`);
}

//8

let day = prompt(`Введите число от 1 до 31`);
switch (true) {
    case (day >= 1 && day <= 10): console.log(`первая декада`);
    break;
    case (day >= 11 && day <= 20): console.log(`вторая декада`);
    break;
    case (day > 20 && day <= 30): console.log(`третья декада`);
    break;
    default: console.log(`Неверное значение`);
}

//9

let days = prompt(`Введите количество дней`),
    sec,
    min,
    hour,
    week,
    month,
    year;
    
    sec = days * 24 * 60 * 60;
    console.log(`${days} дней = ${sec} секунд`);
    min = days * 24 * 60;
    console.log(`${days} дней = ${min} минут`);
    hour = days * 24;
    console.log(`${days} дней = ${hour} часов`);

    if (days < 7) {
        console.log(`${days} дней меньше недели`)
    } else {
        week = days / 7
        console.log(`${days} дней = ${week} неделя`)
    }

    if (days < 31) {
        console.log(`${days} дней меньше месяца`)
    } else {
        month = days / 31
        console.log(`${days} дней = ${month} месяц`)
    }

    if (days < 365) {
        console.log(`${days} дней меньше года`)
    } else {
        year = days / 365
        console.log(`${days} дней = ${year} год`)
    }

    //10

    let day1 = prompt(`Введите количество дней`);

    if(day1 > 365){
        day1 = day1 % 365
    }
        switch(true){
            case (day1 >= 1 && day1 <= 31): console.log(`1 месяц январь`);
            break;
            case (day1 > 31 && day1 <= 59): console.log(`2 месяц февраль`);
            break;
            case (day1 > 59 && day1 <= 90): console.log(`3 месяц март`);
            break;
            case (day1 > 90 && day1 <= 120): console.log(`4 месяц апрель`);
            break;
            case (day1 > 120 && day1 <= 151): console.log(`5 месяц май`);
            break;
            case (day1 > 151 && day1 <= 181): console.log(`6 месяц июнь`);
            break;
            case (day1 > 181 && day1 <= 212): console.log(`7 месяц июль`);
            break;
            case (day1 > 212 && day1 <= 243): console.log(`8 месяц август`);
            break;
            case (day1 > 243 && day1 <= 273): console.log(`9 месяц сентябрь`);
            break;
            case (day1 > 273 && day1 <= 304): console.log(`10 месяц октябрь`);
            break;
            case (day1 > 304 && day1 <= 334): console.log(`11 месяц ноябрь`);
            break;
            case (day1 > 334 && day1 <= 356): console.log(`12 месяц декабрь`);
            break;
            default: console.log(`Неверное значение`);
        }

        switch(true){
            case (day1 >= 1 && day1 <= 59 || day1 >=335 && day1 <=365): console.log(`зима`);
            break;
            case (day1 > 59 && day1 <= 151): console.log(`весна`);
            break;
            case (day1 > 151 && day1 <= 243): console.log(`лето`);
            break;
            case (day1 > 243 && day1 <= 334): console.log(`осень`);
            break;
            default: console.log(`Неверное значение`);
        }