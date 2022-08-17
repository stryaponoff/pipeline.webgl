import Logger from '@/logger/logger'
import WebGL from '@/webgl/WebGL'
import CanvasNotExistsError from '@/errors/CanvasNotExistsError'

function start() {
  Logger.log('Starting init loaded')

  const canvas = document.querySelector<HTMLCanvasElement>('#glcanvas')
  if (!canvas) {
    Logger.error('#glcanvas element does not exists in the page')
    throw new CanvasNotExistsError()
  }

  new WebGL(canvas)
}

window.addEventListener('load', () => {
  Logger.log('Document loaded')
  start()
})
