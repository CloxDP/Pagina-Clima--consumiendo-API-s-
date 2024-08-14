import { formSubmit, getUbication , searchFunction} from "./functions.js";
import { form } from "./variables.js";
getUbication();
form.addEventListener('input',searchFunction );
form.addEventListener('submit', formSubmit);