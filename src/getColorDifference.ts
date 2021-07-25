import { Color } from "./types"

export default function getColorDifference(a: Color, b: Color) {
   const dr = Math.abs(a.red - b.red)
   const dg = Math.abs(a.green - b.green)
   const db = Math.abs(a.blue - b.blue)
   return dr + dg + db
}
