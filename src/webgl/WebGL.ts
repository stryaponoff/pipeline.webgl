import WebGLNotSupportedError from '@/errors/WebGLNotSupportedError'
import Logger from '@/logger/logger'

export default class WebGL {
  private gl: WebGLRenderingContext

  constructor(canvas: HTMLCanvasElement) {
    const gl = canvas.getContext('webgl')
    if (!gl) {
      Logger.error('Unable to initialize WebGL. Your browser or machine may not support it.')
      throw new WebGLNotSupportedError()
    }

    this.gl = gl

    this.gl.clearColor(0.0, 0.0, 0.0, 1.0)
    this.gl.clear(gl.COLOR_BUFFER_BIT)

    Logger.log('WebGL context init successfully')
  }
}
