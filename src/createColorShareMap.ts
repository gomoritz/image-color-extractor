import { Color, Configuration } from "./types"
import getColorDifference from "./getColorDifference.js"

export default function createColorShareMap(
   image: HTMLImageElement,
   canvas: HTMLCanvasElement,
   config: Configuration
) {
   const { pixelPrecision = 0.125, colorDifferenceThreshold = 50 } = config
   const step = 1 / pixelPrecision
   const colorShareMap: { [key: string]: number } = {}

   function getNearColor(c: Color) {
      return Object.keys(colorShareMap).find(key => {
         const split = key.split(",")
         return (
            getColorDifference(c, {
               red: parseInt(split[0]),
               green: parseInt(split[1]),
               blue: parseInt(split[2])
            }) <= colorDifferenceThreshold
         )
      })
   }

   for (let x = 0; x < image.width; x += step) {
      for (let y = 0; y < image.height; y += step) {
         const { 0: red, 1: green, 2: blue } = canvas
            .getContext("2d")!
            .getImageData(x, y, 1, 1).data
         const c = { red, green, blue }
         const key = getNearColor(c) ?? `${red},${green},${blue}`
         const prev = colorShareMap[key] ?? 0

         colorShareMap[key] = prev + 1
      }
   }

   return Object.entries(colorShareMap)
      .sort(([, a], [, b]) => b - a)
      .map(([color, share]) => ({ color, share }))
}
