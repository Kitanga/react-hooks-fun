import { get, ref } from "firebase/database";
import { db } from "../firebase";

export default function getLikes() {
    const likesRef = ref(db, "likes");

    return get(likesRef).then(snap => {
        if (snap.exists()) {
            const data = snap.val();

            const likes = Object.keys(data).map(key => ({ key, id: data[key] }));

            return likes;
        } else {
            return [];
        }
    });
}
