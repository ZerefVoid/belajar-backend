let proses = new Promise((resolve, reject) => {
    let username = "zeref";
    let password = "12345";

    if (username === "zeref" && password === "12345") {
        resolve("Login berhasil");
    } else {
        reject("Username atau password salah");
    }
});

async function cek(){
    try {
        let hasil = await proses;
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

cek();