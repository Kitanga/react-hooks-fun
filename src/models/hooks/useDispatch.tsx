import useCurrentState from "./useCurrentState";

export default function useDispatch() {
    return useCurrentState()[1];
}