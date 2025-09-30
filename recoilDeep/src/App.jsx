import './App.css'
import {useRecoilValue,useRecoilState} from 'recoil'
import {networkAtom,jobsAtom,messagingAtom,notificationsAtom, totalNotificationSelector} from './atoms'
import { RecoilRoot } from "recoil";


function App(){
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
 
}

function MainApp(){
   const networkNotificationCount = useRecoilValue(networkAtom)
   const jobsAtomCount = useRecoilValue(jobsAtom)
   const notificationsAtomCount = useRecoilValue(notificationsAtom)
   const [messagingAtomCount,setMessagingAtomCount] = useRecoilState(messagingAtom)
   const totalNotificationCount = useRecoilValue(totalNotificationSelector);
   //const setMessagingAtomCount = useSetRecoilState(messagingAtom);
    /*     <button onClick={() => setMessagingAtomCount(messagingAtomCount + 1)}>
        Click
      </button>  */  //after writting that hook you can add that button, its another way to increase that count usin useSetRecoilState
  return(
    <>
     <button>Home</button>
    <button>My network({networkNotificationCount>= 100 ? "99+" : networkNotificationCount})</button>
    <button>jobs ({jobsAtomCount})</button>
    <button>Message({notificationsAtomCount})</button>
    <button>Notifications({messagingAtomCount})</button>

    <button onClick = {()=>{
        setMessagingAtomCount(messagingAtomCount+1);
    }}>click</button>

    <button>me ({totalNotificationCount})</button>
    </>
  )
}

export default App