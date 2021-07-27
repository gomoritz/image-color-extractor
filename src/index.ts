import { Configuration } from "./types"
import drawImageOnCanvas from "./drawImageOnCanvas"
import createColorShareMap from "./createColorShareMap"

export default function extractColors(image: HTMLImageElement, config: Configuration) {
   const canvas = drawImageOnCanvas(image)
   const colorShareMap = createColorShareMap(image, canvas, config)
   return colorShareMap.slice(0, config.amount)
}
