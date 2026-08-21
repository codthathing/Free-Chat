// hooks.js
import { useDispatch } from "react-redux";

/** @returns {import("@reduxjs/toolkit").ThunkDispatch<any, any, any>} */
export const useAppDispatch = () => useDispatch();