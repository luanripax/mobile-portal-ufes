
import ResponseError from "../../utils/ReponseError";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getDocumentName } from "../../utils/documentHelper";

export const getDocumentURL = async (userName: string, document: string) => {

    try {
        const storage = getStorage();
        const docName = getDocumentName(document);
        const listRef = ref(storage, `${userName}/${docName}`);
        const url = await getDownloadURL(listRef);
        return url;
    } catch (error) {
        throw new ResponseError(error);
    }
};