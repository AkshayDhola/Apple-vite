import MacContainer from "./MacContainer";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
function App() {
  return (
    <div className="w-full h-screen">
      <div className="absolute flex gap-10 py-4 top-0 left-1/2 -translate-x-1/2">
        {["iphone", "ipad","services","ios","mac","products", "ipad","services","ios","mac","products"].map(e => {
          return <a href="" className="text-white font-[400] text-sm capitalize">
            {e}
          </a>
        })}
      </div>
      <div className="absolute flex flex-col items-center text-white top-36 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="mask text-7xl tracking-tight font-[700]">Macbook Pro.</h3>
        <h5>oh so pro!</h5>
        <p className="w-3/4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab tenetur exercitationem sunt?</p>
      </div>
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr",
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
    </div>
  );
}

export default App;
