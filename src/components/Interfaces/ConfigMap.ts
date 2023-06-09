import { IBaseLayer, ILayers } from './Control'
import { IMarker } from './Layers'

export interface IConfigMap {
  center?: [number, number]
  layers?: ILayers
  fullscreen?: boolean
  defaultLayer?: IBaseLayer
  fitBounds?: {
    center: boolean
    markers: boolean
  }
  style?: {
    width: string
    height: string
  }
  zoom?: number
  randomMarkers?: boolean
}

export interface ISizeMap {
  width: string
  height: string
}

export interface MapProps {
  id: string
  style: {
    width: string
    height: string
  }
  defaultLayer?: IBaseLayer
  center: { lat: number; lng: number }
  zoom: number
  layers?: ILayers
  markers?: Array<IMarker>
  defaultMarker?: string
  fullscreen?: boolean
  fitBounds?: {
    center: boolean
    markers: boolean
  }
}
