class User {
  name: string;
  surname: string;
  age?: number;
  profession?: string;


  constructor(name, surname, age?, profession?) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.profession = profession;
  }

  public PrintMotivationWord() {
    const goodWords: string[] = ['Good boy', 'Like u', 'krasava', 'MOLODETS'],
          goodWord: string = goodWords[Math.floor(Math.random() * goodWords.length)];

    if (this.age <= 18) {
      const additionalWord: string = this.profession ? `,${goodWords[0]} работаешь` : ', и безработный';
      console.log(`${this.name} еще писька не выросла ${additionalWord}`);
    }

    if (!this.age || !this.profession) {
      this.printInsult();
    }

    if (this.profession && this.age >= 18) {
      if (this.profession.toLowerCase() !== 'программист') {
        console.log(`${goodWord} ${this.name}, но не там ты работаешь`);
      } else {
        console.log(`${goodWord} ${this.name}, так деражть`);
      }
    } else if (this.age >= 18 && !this.profession) {
      this.printInsult();
    }
  }

  public printInsult() {
    const insults: string[] = ['loh', 'bolvan', 'mymoon'],
    word: string = insults[Math.floor(Math.random() * insults.length)];

    if (this.name.toLowerCase() === 'oleg') {
      console.log(`${this.name} -- молодец`);
    } else {
      console.log(`${this.name} -- ${word}`);
    }
  }
}


let x1 = new User('Марк', 'Glad', 25, 'Программист');
let x2 = new User('Олег', 'Zag', 25, 'Програмист');
let x3 = new User('влад', 'krasava', 17, 'Работяга');
let x4 = new User('влад', 'krasava', 17);
let x5 = new User('Альберт', 'kracov', 28);

x1.PrintMotivationWord();
x2.PrintMotivationWord();
x3.PrintMotivationWord();
x4.PrintMotivationWord();
x5.PrintMotivationWord();