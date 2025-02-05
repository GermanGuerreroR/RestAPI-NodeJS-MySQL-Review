import app from "./app.js";
import { PORT } from "./config.js";
app.listen(PORT);

//Hacemos el script de npm run dev. Instalando nodemon como dependencia de dev : nodemon index.js
console.log(`Running port ` + PORT);