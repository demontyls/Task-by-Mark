class users {
  name: string
  surname: string
  age?: number
  profession?: string


  constructor(name, surname, age?, profession?) {
    this.name = name
    this.surname = surname
    this.age = age
    this.profession = profession
  }

  motivationWords() {
    const goodWordArray: string[] = ['Good boy', ' Like u', ' krasava', 'MOLODETS'];
    let goodWord: string = goodWordArray[Math.floor(Math.random() * goodWordArray.length)];

    if (this.age <= 18) {
      let noJob: string = this.profession ? `,${goodWordArray[0]} работаешь` : ', и безработный';
      console.log(`${this.name} еще писька не выросла ${noJob}`);
    }

    if (!this.age || !this.profession) {
      this.insults();
    }

    if (this.profession && this.age >= 18) {
      if (this.profession.toLowerCase() !== 'програмист') {
        console.log(`${goodWord} ${this.name}, но не там ты работаешь`);
      } else {
        console.log(`${goodWord} ${this.name}, так деражть`);
      }
    } else if (this.age >= 18 && !this.profession) {
      this.insults();
    }
  }

  insults() {
    const insultsArray: string[] = ['loh', 'bolvan', 'mymoon'];

    let word: string = insultsArray[Math.floor(Math.random() * insultsArray.length)];
    if (this.name.toLowerCase() === 'oleg') {
      console.log(`${this.name} -- молодец`);
    } else {
      console.log(`${this.name} -- ${word}`);
    }
  }
}


let x1 = new users('Марк', 'Glad', 25, 'Програмист');
let x2 = new users('Олег', 'Zag', 25, 'Програмист');
let x3 = new users('влад', 'krasava', 17, 'Работяга');
let x4 = new users('влад', 'krasava', 17);
let x5 = new users('Альберт', 'kracov', 28);

x1.motivationWords();
x2.motivationWords();
x3.motivationWords();
x4.motivationWords();
x5.motivationWords();