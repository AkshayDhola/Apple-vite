import MacContainer from "./Components/MacContainer";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import anchors from "./Objects/anchors";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="absolute w-4 h-full bg-black z-[100] right-0 top-0"></div>
      <div className="absolute w-full px-32 pt-4 flex items-center justify-between z-[100]">
          {Object.entries(anchors).map(([text, href])=> (
            <a href={href} key={text} className="text-white text-sm hover:cursor-pointer">
              {text}
            </a>
          ))}
      </div>
      <div className="absolute flex flex-col items-center w-4/5 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="mask text-[9vw] tracking-tight font-[700]">Macbook Pro.</h3>        
      </div>
      <Canvas camera={{ fov: 12, position: [-60, 20, 220] }}>
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
