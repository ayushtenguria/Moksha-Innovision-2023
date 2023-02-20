/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh;
    Plane013_1: THREE.Mesh;
    Plane013_2: THREE.Mesh;
    Plane013_3: THREE.Mesh;
    Plane015_1: THREE.Mesh;
    Plane015_2: THREE.Mesh;
    Plane016: THREE.Mesh;
    Plane016_1: THREE.Mesh;
    Plane017_1: THREE.Mesh;
    Plane017_2: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane018_1: THREE.Mesh;
    Plane026_1: THREE.Mesh;
    Plane026_2: THREE.Mesh;
    Plane026_3: THREE.Mesh;
    Plane026_4: THREE.Mesh;
    Plane026_5: THREE.Mesh;
    Plane026_6: THREE.Mesh;
    Plane026_7: THREE.Mesh;
    Plane026_8: THREE.Mesh;
    Circle005_1: THREE.Mesh;
    Circle005_2: THREE.Mesh;
    Plane017: THREE.Mesh;
    Circle005: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
    Plane039_1: THREE.Mesh;
    Plane039_2: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane025: THREE.Mesh;
    Plane026: THREE.Mesh;
    Plane027: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Text004: THREE.Mesh;
    Plane028: THREE.Mesh;
    Text005: THREE.Mesh;
    Text006: THREE.Mesh;
    Text007: THREE.Mesh;
    Text008: THREE.Mesh;
    Text009: THREE.Mesh;
    Plane033: THREE.Mesh;
    Plane034: THREE.Mesh;
    Plane035: THREE.Mesh;
    Text010: THREE.Mesh;
    Text011: THREE.Mesh;
    Text012: THREE.Mesh;
    Curve: THREE.Mesh;
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
    Circle004: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshPhysicalMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    wire_028089177: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.021"]: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["SVGMat.002"]: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshPhysicalMaterial;
  };
};

export function Model(props: any) {
  const { setPopup } = props;

  const { nodes, materials } = useGLTF(
    "/Moksha 23 Website Homepage No Lights.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      {/* <pointLight
        intensity={150}
        decay={2}
        color="#ff0000"
        position={[6.65, 1.28, 6.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.99}
      />
      <pointLight
        intensity={4}
        decay={2}
        color="#000"
        position={[4.04, 1.28, 6.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.99}
      />
      <pointLight
        intensity={3}
        decay={2}
        color="#000"
        position={[1.87, 1.28, 6.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.99}
      />
      <pointLight
        intensity={16}
        decay={2}
        color="#0000ff"
        position={[-0.32, 1.28, 6.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.99}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
        position={[0.62, 0.36, 1.57]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[5.23, -0.14, 7.72]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_2.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013_3.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group position={[5.23, -0.14, 7.72]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_2.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group position={[5.23, -0.14, 7.72]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_1.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group position={[5.23, -0.14, 7.72]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_2.geometry}
          material={materials["Material.010"]}
          onClick={() => {
            setPopup("something");
          }}
          onPointerOver={() => {}}
        />
      </group>
      <group position={[5.23, -0.14, 7.72]} scale={0.31}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018_1.geometry}
          material={materials["Material.010"]}
        />
      </group>
      <group
        position={[-0.84, -0.29, 2.27]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.03, 1.1, 0.87]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_3.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_4.geometry}
          material={materials.wire_028089177}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_5.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_6.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_7.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_8.geometry}
          material={materials["Material.022"]}
        />
      </group>
      <group
        position={[0.18, 0.44, 3.32]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.03}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={materials["Material.014"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials.Material}
        position={[-0.84, -0.29, 2.27]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.03, 1.03, 0.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.Material}
        position={[-1, 0.83, 2.71]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.1, 0.09, 0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials["Material.017"]}
        position={[-0.84, -0.29, 2.27]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.03, 1.1, 0.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane020.geometry}
        material={materials.Material}
        position={[-1.05, 0.62, 3.09]}
        rotation={[0, 0.2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.003"]}
        position={[2.19, 1.41, 3.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane022.geometry}
        material={materials["Material.020"]}
        position={[-1.03, 1.94, 2.27]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.39}
      />
      <group position={[-1.03, 0.48, 2.27]} rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039_2.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane024.geometry}
        material={materials["Material.001"]}
        position={[-1.03, 0.51, 2.88]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials.wire_028089177}
        position={[-1.05, 0.62, 3.09]}
        rotation={[0, 0.2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.003"]}
        position={[-0.84, -0.32, 2.27]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.03, 1.1, 0.87]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials.Material}
        position={[1.52, 2.5, 3.8]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text002.geometry}
        material={materials.Material}
        position={[-1.02, 3.7, 1.37]}
        rotation={[1.28, 0.01, 1.51]}
        scale={0.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text003.geometry}
        material={materials.Material}
        position={[-1.21, 3.82, 1.97]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.38}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text004.geometry}
        material={materials.Material}
        position={[-1.04, 3.8, 2.8]}
        rotation={[1.84, 0.01, 1.62]}
        scale={0.24}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials["Material.001"]}
        position={[-1.03, 3.14, 2.88]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text005.geometry}
        material={materials.Material}
        position={[4.75, 3.13, 6.91]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text006.geometry}
        material={materials.Material}
        position={[4.75, 1.59, 7.05]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text007.geometry}
        material={materials.Material}
        position={[4.75, 2.36, 8.98]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text008.geometry}
        material={materials.Material}
        position={[4.75, 0.77, 8.74]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text009.geometry}
        material={materials.Material}
        position={[-1.03, 0.42, 1.84]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials["Material.023"]}
        position={[-0.84, -0.33, 2.27]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["Material.023"]}
        position={[1.52, 2.73, 3.82]}
        scale={0.43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials["Material.003"]}
        position={[0.01, 3.09, 3.8]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text010.geometry}
        material={nodes.Text010.material}
        position={[6.65, 0.82, 3.57]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text011.geometry}
        material={nodes.Text011.material}
        position={[6.65, 0.82, 1.45]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text012.geometry}
        material={materials.Material}
        position={[6.65, 0.85, 2.63]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.016"]}
        position={[7.58, 0.5, 5.47]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["Material.018"]}
        position={[7.58, 0.5, 5.47]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={24.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.002"]}
        position={[-0.8, 2.81, 2.26]}
        rotation={[Math.PI / 2, -0.26, Math.PI / 2]}
        scale={3.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials["Material.025"]}
        position={[3.15, -0.09, 4.5]}
        scale={6.08}
      >
        <color args={[255, 0, 0]} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Moksha 23 Website Homepage No Lights.gltf");
export default Model;
