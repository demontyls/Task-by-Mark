var users = /** @class */ (function () {
    function users(name, surname, age, profession) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.profession = profession;
    }
    users.prototype.motivationWords = function () {
        var goodWordArray = ['Good boy', ' Like u', ' krasava', 'MOLODETS'];
        var goodWord = goodWordArray[Math.floor(Math.random() * goodWordArray.length)];
        if (this.age <= 18) {
            var noJob = this.profession ? ",".concat(goodWordArray[0], " \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0448\u044C") : ', и безработный';
            console.log("".concat(this.name, " \u0435\u0449\u0435 \u043F\u0438\u0441\u044C\u043A\u0430 \u043D\u0435 \u0432\u044B\u0440\u043E\u0441\u043B\u0430 ").concat(noJob));
        }
        if (!this.age || !this.profession) {
            this.insults();
        }
        if (this.profession && this.age >= 18) {
            if (this.profession.toLowerCase() !== 'програмист') {
                console.log("".concat(goodWord, " ").concat(this.name, ", \u043D\u043E \u043D\u0435 \u0442\u0430\u043C \u0442\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0448\u044C"));
            }
            else {
                console.log("".concat(goodWord, " ").concat(this.name, ", \u0442\u0430\u043A \u0434\u0435\u0440\u0430\u0436\u0442\u044C"));
            }
        }
        else if (this.age >= 18 && !this.profession) {
            this.insults();
        }
    };
    users.prototype.insults = function () {
        var insultsArray = ['loh', 'bolvan', 'mymoon'];
        var word = insultsArray[Math.floor(Math.random() * insultsArray.length)];
        if (this.name.toLowerCase() === 'oleg') {
            console.log("".concat(this.name, " -- \u043C\u043E\u043B\u043E\u0434\u0435\u0446"));
        }
        else {
            console.log("".concat(this.name, " -- ").concat(word));
        }
    };
    return users;
}());
var x1 = new users('Марк', 'Glad', 25, 'Програмист');
var x2 = new users('Олег', 'Zag', 25, 'Програмист');
var x3 = new users('влад', 'krasava', 17, 'Работяга');
var x4 = new users('влад', 'krasava', 17);
var x5 = new users('Альберт', 'kracov', 28);
x1.motivationWords();
x2.motivationWords();
x3.motivationWords();
x4.motivationWords();
x5.motivationWords();
