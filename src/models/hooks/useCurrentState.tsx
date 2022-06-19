import { useContext } from "react";
import { ActionType, StateType } from "../reducer";
import { Context } from "../store";

export default function useCurrentState() {
    return useContext<[StateType, (action: ActionType) => any]>(Context)
}
