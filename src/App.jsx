import {Fragment}  from "react";
import {Navbar}  from "./component/cricket";
import { Hero } from "./component/herosection";
import { LiveScores } from "./component/livescore";
import{Rankings} from "./component/ranking";
import {News} from "./component/news";
import {Videos} from "./component/vidio";
import { Footer } from "./component/footer";
import "./index.css";
// import {NetflixSeries } from "./map method";
// import "./service.module.css";
// import {Eventhandling} from "./component/eventhandling";
export const App=()=>{
return (
         <Fragment>
         <Navbar/>
         <Hero/>
         <LiveScores/>
         <Rankings/>
         <News/>
         <Videos/>
         <Footer/>
         </Fragment>
);
};











































































                      // component in javascript//
 
//     const NetflixSeries=()=>{ 
//     return(
//          <div>
//             <h2>Name</h2>
//             <h1>hello</h1>
//          </div>
//     );
//   };
                      


                           //add dynamic value

                    //   export const NetflixSeries=()=>{ 
                    //     const name="abhishek";
                    //     return(
                    //          <div>
                    //             <h2>{name}</h2>
                    //             <h1>{1/2}</h1>
                    //          </div>
                    //     );
                    //   };