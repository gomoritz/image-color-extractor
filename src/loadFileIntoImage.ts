export default function loadFileIntoImage(file: any, callback: (image: HTMLImageElement) => void) {
   const img = new Image()
   const objectUrl = URL.createObjectURL(file)

   img.onload = () => callback(img)
   img.src = objectUrl
}
