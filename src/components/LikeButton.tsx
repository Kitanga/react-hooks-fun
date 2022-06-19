import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCurrentLikeStatus from "../models/hooks/useCurrentLikeStatus";
import useCurrentMovie from "../models/hooks/useCurrentMovie";
import useDispatch from "../models/hooks/useDispatch";

export default function LikeButton() {
    const dispatch = useDispatch();

    const currentMovie = useCurrentMovie();
    const isLiked = useCurrentLikeStatus();

    return (
        <div className="column is-12" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <span style={{
                cursor: "pointer",
            }} onClick={() => {
                if (isLiked) {
                    dispatch({ type: "unlike", data: currentMovie.id })
                } else {
                    dispatch({ type: "like", data: currentMovie.id })
                }
            }}>
                {
                    isLiked ?
                        <FontAwesomeIcon icon={fasHeart} className="has-text-danger is-centered" /> :
                        <FontAwesomeIcon icon={faHeart} className="has-text-danger is-centered" />
                }
            </span>
        </div>
    )
} 