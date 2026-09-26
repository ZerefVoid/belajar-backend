let umur = 16;

try {
    if (umur < 17) {
        throw new Error("Belum Cukup Umur!");
    }

    console.log("Boleh Masuk!");
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Pengecekan selesai");
}