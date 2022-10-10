import {useEffect, useState} from 'react';
import dynamic from "next/dynamic";
// const Box = dynamic(() => import("@/components/canvas/Box"), {
//   ssr: false,
// });
import Scene from '../components/canvas/Mercedes';


// DOM elements here
const DOM = (props) => {
  // console.log("props:", props);
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      justifyContent: "flex-end"
    }}>
    <input type="color" onChange={(e) => {
      // console.log(e.target.value);
      props.setBodyColor(e.target.value);
    }} />
    <input type="color" onChange={(e) => {
      // console.log(e.target.value);
      props.setWheelColor(e.target.value);
    }} />
        <input type="color" onChange={(e) => {
      // console.log(e.target.value);
      props.setRimColor(e.target.value);
    }} />
    </div>
  );
};

// Canvas/R3F components here
const R3F = (props) => {
  return (
    <>
      <gridHelper />
      <axesHelper />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <directionalLight position={[-10, 10, 10]} intensity={1.8} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <Scene route="/" {...props}/>
    </>
  );
};

// We assume first component is DOM
// second component is Canvas/R3F
// You can even add more and just keep alternating if needed
export default function Page() {
  const [bodyColor, setBodyColor] = useState(0xfbfbfb);
  const [wheelColor, setWheelColor] = useState(0x000000);
  const [rimColor, setRimColor] = useState(0x0f0f0f);

  const newProps = {
    bodyColor: bodyColor, 
    setBodyColor: setBodyColor,
    wheelColor: wheelColor, 
    setWheelColor: setWheelColor,
    rimColor: rimColor, 
    setRimColor: setRimColor,
  }

  return (
    <>
      <DOM {...newProps} />
      <R3F {...newProps} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Page two",
    },
  };
}
