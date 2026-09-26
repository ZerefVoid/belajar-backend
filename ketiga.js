class game {
    constructor (nama,genre){
        this.nama = nama;
        this.genre = genre;
    }

    main() {
        console.log("Zeref sedang memainkan " +this.nama);
    }

    info() {
        console.log(this.nama + " adalah game " + this.genre);
    }
}

let game1 = new game("Minecraft", "Survival");
let game2 = new game("Valorant", "fps");

game1.main();
game1.info();