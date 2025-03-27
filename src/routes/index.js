import Doc from "../pages/doc";
import Form from "../pages/form";
import Table from "../pages/table";
import {TableOutlined,FormOutlined,ContainerOutlined} from '@ant-design/icons';
const routes =[
    {
      path:'/form',
      elemnet:<Form/>,
      key:'form',
      title:'表单',
      icon:<FormOutlined />
    },
    {
      path:'/doc',
      elemnet:<Doc/>,
      key:'doc',
      title:'文档',
      icon:<ContainerOutlined />
    },
    {
      path:'/table',
      elemnet:<Table/>,
      key:'table',
      title:'表格',
      icon:<TableOutlined />
    }
]



export default routes;