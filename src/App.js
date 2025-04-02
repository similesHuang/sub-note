import {  Route, Routes,Link, useLocation, Navigate, } from 'react-router-dom';
import './App.css';
import './styles/common.less';
import './styles/dark.less';
import routes from './routes';
import { useRouter } from './hooks';
import NoteMenu from './components/menu';
import { Row,Col } from 'antd';
import { useStore } from './hooks/GlobalProvider';
import { useEffect, useRef } from 'react';

function App() {
  
  const location = useLocation();
  const router = useRouter(routes);
  const {theme} = useStore();
   
  useEffect(()=>{
     const root = document.querySelector('#sub-root');
     if(window.__POWERED_BY_QIANKUN__){
      root.setAttribute('data-note-theme',theme)
     }
     
  },[theme])
  if(location.pathname==='/'){
     return <Navigate to={'/form'} replace></Navigate>
  }
  
  return (
    <div className="App">
       <Row style={{display:'flex',flexWrap:'nowrap'}}>
         <Col span={2} style={{flex:1,maxWidth:'10%',minWidth:'100px'}}>
           <NoteMenu/>
         </Col>
         <Col span={22} style={{flex:6,maxWidth:'90%',backgroundColor:'rgb(241, 243, 244)',minWidth:'400px'}}>
            {router}
         </Col>
       </Row>
     
    </div>
  );
}

export default App;
