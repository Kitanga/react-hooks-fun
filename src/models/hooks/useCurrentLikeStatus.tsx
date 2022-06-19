import useCurrentState from "./useCurrentState";

export default function useCurrentLikeStatus(): boolean {
    const [state] = useCurrentState();

    const { likes, currentlyActive } = state;
    
    return !!likes.find(like => like.id === currentlyActive);
}