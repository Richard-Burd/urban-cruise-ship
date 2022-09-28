const data = require("../../data/multi_solutions.json");
import { Router, useRouter } from 'next/router'

// // https://youtu.be/mAHqpdVzJmA?t=208
// export const getStaticPaths = async () => {
//   // do we really need this?
// }

// const paths = data.map(focus_area => {
//   return {
    
//   }
// })

// below I can 
const FocusArea = () => {
  console.log(data)
  const router = useRouter()
  console.log(router.asPath)
  return (
    <div>
      <h1>This component is for the focus area called: {router.asPath} </h1>
    </div>
  );
};

export default FocusArea;
