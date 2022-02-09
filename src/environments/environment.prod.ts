import {Environment} from "./interface";
import keys from "./keys/keys";

export const environment: Environment = {
  production: true,
  apiKey: keys.FIREBASE_API_KEY
};
