import {  Route, Routes,} from 'react-router-dom';

export const useRouter = (routes 
)=>{
    return <Routes>
    {routes.map((route)=>(<Route path={route.path} key={route.key} element={route.elemnet}></Route>))}
 </Routes>
}