import {updateActionState} from "../store/store.js";
import {useAppDispatch} from "./useAppDispatch.js";
import {useNavigate} from "react-router-dom";

export const useFormSubmitAction = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return async (setSubmitting, resetForm, method, link, other_method = () => {}) => {
    try {
      await dispatch(method).unwrap();
      navigate(link);
      dispatch(other_method);
      resetForm();
    } catch (e) {
      console.error(`Error: ${e.message}`);
      dispatch(updateActionState({status: true, type: "error", message: e.message}));
    } finally {
      setSubmitting(false);
    }
  };
}