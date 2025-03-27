import axios from "axios";

const UploadTrumpImageService = (() => {

    const uploadImageUrl = 'http://localhost:5115/UploadImage';

    const uploadImage = async (image: File) => {
        const formData = new FormData();
        formData.append('file', image);

        try {
            const response = await axios({
            url: uploadImageUrl,
            method: 'POST',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        });
            console.log(response.data);
        } catch (error) {
            console.error('Error: upload image', error);
        }


    formData.delete('file');
    };

    return {uploadImage};

})();

export default UploadTrumpImageService;