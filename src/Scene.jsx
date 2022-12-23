import {
    Environment,
    OrbitControls,
    PerspectiveCamera
} from '@react-three/drei';
import { Suspense, useEffect, useState } from "react";
import { Track } from './Track';
import { Ground } from './Ground';
import { Car } from './Car';

export const Scene = () => {

    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);

    useEffect(() => {
        function keydownHandler(e) {
          if (e.key === "k") {
            // random is necessary to trigger a state change
            if(thirdPerson) setCameraPosition([-6, 3.9, 6.21 + Math.random() * 0.01]);
            setThirdPerson(!thirdPerson); 
          }
        }
    
        window.addEventListener("keydown", keydownHandler);
        return () => window.removeEventListener("keydown", keydownHandler);
    }, [thirdPerson]);

    return (
        <Suspense>
            <Environment 
                files={process.env.PUBLIC_URL + '/textures/envmap.hdr'}
                background={'both'}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />

            {!thirdPerson && (
                <OrbitControls enableDamping={true} maxDistance={10} minDistance={4} maxPolarAngle={1.2} target={[-2.64, -0.71, 0.03]} />
            )}

            {/* <OrbitControls target={[-2.64, 0.71, 0.03]} /> */}
            <Car thirdPerson={thirdPerson} />
            <Track/>
            <Ground />
        </Suspense>
    );
}