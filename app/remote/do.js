export default class Do {
    something() {
        return new Promise((resolve, reject) => {
            resolve("Did something.");
        });
    }
}