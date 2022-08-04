import axios from "axios";
const useImages = ()=>{
    const getImagesUrl = ()=>{
        let imgLink = "";
    }
    const postImages = async (file:any)=>{
        if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'img_upload')
            await axios.post("https://api.cloudinary.com/v1_1/dneaxae9c/image/upload", formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            });
        }
    }
    return {
        getImagesUrl,
        postImages
    }
}
export default useImages