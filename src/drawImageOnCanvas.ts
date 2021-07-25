export default function drawImageOnCanvas(image: HTMLImageElement): HTMLCanvasElement {
   const canvas = document.createElement("canvas")
   canvas.width = image.width
   canvas.height = image.height
   canvas.getContext("2d")!.drawImage(image, 0, 0, image.width, image.height)
   return canvas
}
