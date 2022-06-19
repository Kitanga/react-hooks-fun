import { get, ref } from "firebase/database";
import { db } from "../firebase";

export default function getLikes() {
    const likesRef = ref(db, "likes");

    return get(likesRef).then(snap => {
        if (snap.exists()) {
            console.log("Data on likes!", snap.val());
            const data = snap.val();

            const likes = Object.keys(data).map(key => ({ key, id: data[key] }));

            // console.log("Likes?", likes);

            return likes;
        } else {
            return [];
        }
    });
}
