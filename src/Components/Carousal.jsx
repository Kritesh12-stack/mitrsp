// import "./Carousal.css"
// import { useTypewriter , Cursor} from 'react-simple-typewriter'

// function Carousal() {
//     const { text } = useTypewriter({
//       words : ['Complete IT Solutions','It'],
//       loop :{},

//     });
//     return (
//       <>
//         <div className="Container">
//           <div className="main">
//             <div className="text">
//               <div className="headText">Mittroz</div>
//               <div className="tagText">
//                 {text}
//                 <Cursor />
//               </div>
//             </div>
//             <div className="imageS"></div>
//           </div>
//           <div className="main2"></div>
//         </div>
//       </>
//     );
// }

// export default Carousal
import "./office.gif"
import React, { useEffect } from "react";
import Typed from "typed.js";
import "./Carousal.css";
// import {useTypewriter,Cursor} from "react-simple-typewriter"

function Carousal() {
  useEffect(() => {
    const options = {
      strings: ["Complete IT Solutions"],
      typeSpeed: 100, // Adjust the typing speed as needed
      backSpeed: 50, // Adjust the erasing speed as needed
      loop: true, // Enable looping
    };

    const typed = new Typed(".tagText", options);

    return () => {
      typed.destroy(); // Cleanup
    };
  }, []);

  return (
    <div className="Container">
      <div className="main">
        <div className="text">
          <div className="headText">Mittroz</div>
          <div className="tagText"></div>
        </div>
        <div className="imageS"></div>
      </div>
      <div className="main2"></div>
    </div>
  );
}

export default Carousal;
