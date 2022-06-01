var User = /** @class */ (function () {
    function User(name, surname, age, profession) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.profession = profession;
    }
    User.prototype.PrintotivationWord = function () {
        var goodWordArray = ['Good boy', 'Like u', 'krasava', 'MOLODETS'], goodWord = goodWordArray[Math.floor(Math.random() * goodWordArray.length)];
        if (this.age <= 18) {
            var additionalWord = this.profession ? ",".concat(goodWordArray[0], " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0448\u044C") : ', и безработный';
            console.log("".concat(this.name, " \u0435\u0449\u0435 \u043F\u0438\u0441\u044C\u043A\u0430 \u043D\u0435 \u0432\u044B\u0440\u043E\u0441\u043B\u0430 ").concat(additionalWord));
        }
        if (!this.age || !this.profession) {
            this.printInsult();
        }
        if (this.profession && this.age >= 18) {
            if (this.profession.toLowerCase() !== 'программист') {
                console.log("".concat(goodWord, " ").concat(this.name, ", \u043D\u043E \u043D\u0435 \u0442\u0430\u043C \u0442\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0448\u044C"));
            }
            else {
                console.log("".concat(goodWord, " ").concat(this.name, ", \u0442\u0430\u043A \u0434\u0435\u0440\u0430\u0436\u0442\u044C"));
            }
        }
        else if (this.age >= 18 && !this.profession) {
            this.printInsult();
        }
    };
    User.prototype.printInsult = function () {
        var insults = ['loh', 'bolvan', 'mymoon'], word = insults[Math.floor(Math.random() * insults.length)];
        if (this.name.toLowerCase() === 'oleg') {
            console.log("".concat(this.name, " -- \u043C\u043E\u043B\u043E\u0434\u0435\u0446"));
        }
        else {
            console.log("".concat(this.name, " -- ").concat(word));
        }
    };
    return User;
}());
var x1 = new User('Марк', 'Glad', 25, 'Программист');
var x2 = new User('Олег', 'Zag', 25, 'Програмист');
var x3 = new User('влад', 'krasava', 17, 'Работяга');
var x4 = new User('влад', 'krasava', 17);
var x5 = new User('Альберт', 'kracov', 28);
x1.PrintotivationWord();
x2.PrintotivationWord();
x3.PrintotivationWord();
x4.PrintotivationWord();
x5.PrintotivationWord();
