import { useEffect, useState } from "react";


// const STATE = {
//     ENTERING: "entering",
//     ENTERED: "entered",
//     EXITING: "exiting",
//     EXITED: "exited",
// }

// function useTransitionState(duration = 1000){
//     const [state, setState]= useState<String>();

//     useEffect(()=>{
//         let timeId;

//         if(state === STATE.ENTERING){
//             timeId = setTimeout(()=>{ return setState(STATE.ENTERED)}, duration);
//         }
//         else if(state === STATE.EXITING){
//             timeId = setTimeout(()=>{ return setState(STATE.EXITED)}, duration);
//         }

//         return timeId && clearTimeout(timeId)
//     })

//     return [state, setState] as const;
// }


// export function useTransitionControl(duration: number){
//     const [state, setState] = useTransitionState(duration);
    
//     const enter = ()=>{
//         if(state !== STATE.EXITING){
//             console.log("Setting the state to Entering");
//             setState(STATE.ENTERING);
//         }
//     }

//     const exit = ()=>{
//         if(state !== STATE.ENTERING){
//             console.log("Setting the state to Exiting");
//             setState(STATE.EXITING);
//         }
//     }

//     return [state, enter, exit] as const;
// }