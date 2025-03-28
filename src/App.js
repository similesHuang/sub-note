import {  Route, Routes,Link, useLocation, Navigate, } from 'react-router-dom';
import './App.css';
import './styles/common.less';
import './styles/dark.less';
import routes from './routes';
import { useRouter } from './hooks';
import NoteMenu from './components/menu';
import { Row,Col } from 'antd';
import { useDispatch } from './hooks/GlobalProvider';

function App() {
  
  const location = useLocation();
  const router = useRouter(routes);
     
  if(location.pathname==='/'){
     return <Navigate to={'/form'} replace></Navigate>
  }
  
  return (
    <div className="App" data-note-theme='light'>
       <Row style={{display:'flex'}}>
         <Col span={2} style={{flex:1,maxWidth:'10%',whiteSpace:"nowrap"}}>
           <NoteMenu/>
         </Col>
         <Col span={22} style={{flex:6,maxWidth:'90%'}}>
            {router}
         </Col>
       </Row>
     
    </div>
  );
}

export default App;
