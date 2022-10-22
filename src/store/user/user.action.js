import { CreateAction } from "../../utils/dispatch-action.utils";
import { USER_ACTION_TYPES } from "./user-action.types";

export const setCurrentUser = (user) => 
    CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
  