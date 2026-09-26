let proses = new Promise((resolve , reject) => {
    let username = "zeref";
    let password = "12343";

    if (username === "zeref" && password === "12345"){
        resolve("Login Berhasil");
    } else {
        reject("Username atau password salah!");
    }
});

proses

    .then((hasil) => {
        console.log(hasil);
    })
    .catch((error) => {
        console.log(error);
    });