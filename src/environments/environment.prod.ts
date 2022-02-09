import {Environment} from "./interface";
import keys from "./keys/keys";

export const environment: Environment = {
  production: true,
  apiKey: keys.FIREBASE_API_KEY,
  fbDbUrl: 'https://angular-blog-ed991-default-rtdb.europe-west1.firebasedatabase.app/'
};
