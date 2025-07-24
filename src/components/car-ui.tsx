/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import Model from '../Model'
import {OrbitControls, Stage} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense, useRef} from 'react'

export default function CarViewer() {
  const ref = useRef()

  return (
    <Canvas shadows dpr={[1, 2]} camera={{fov: 50}}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={1} environment="city">
          <Model />
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  )
}
