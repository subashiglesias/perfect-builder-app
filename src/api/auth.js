import {Auth} from "aws-amplify";

export const getAuthSession = () => Auth.currentSession();