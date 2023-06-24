import noImage from "../assets/no-image.svg";

function cropImage(url: string) {
    if (!url) return noImage;

    const target = "media/";
    const index = url.indexOf(target) + target.length;
    const newImageUrl =
        url.slice(0, index) + "crop/600/400/" + url.slice(index);

    return newImageUrl;
}

export default cropImage;
