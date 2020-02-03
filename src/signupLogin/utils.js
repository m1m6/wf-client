import { ROLES } from "./constants";

export const isAdmin = role => role === ROLES.ADMIN;
export const isBrand = role => role === ROLES.BRANDS;
export const isCreator = role => role === ROLES.CREATORS;
