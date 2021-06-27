const Database = require("./config") //importa a config

const  initDb = { //guarda nossas  funções
    async init(){
        const db = await Database() //AWAIT: espera retornar um resultado para depois rodar o restante do código. O AWAIT só pode ser executado se a função for ASYNC.

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);

        await db.close()
    }
}
//&28:01 TEMPO DE AULA
initDb.init(); //chama o init e executa o init