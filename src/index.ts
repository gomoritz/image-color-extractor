import { Configuration } from "./types"
import drawImageOnCanvas from "./drawImageOnCanvas.js"
import createColorShareMap from "./createColorShareMap.js"

export default function extractColors(image: HTMLImageElement, config: Configuration) {
   const canvas = drawImageOnCanvas(image)
   const colorShareMap = createColorShareMap(image, canvas, config)
   return colorShareMap.slice(0, config.amount)
}
