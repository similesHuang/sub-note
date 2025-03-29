import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import GlobalProvider from './hooks/GlobalProvider';


let root;
export let getGlobalState;
export let onGlobalStateChange;
export let setGlobalState;
function render(props) {
  const { container } = props;

  const dom = container ? container.querySelector('#root') : document.getElementById('root')
  
   // 每次mount都创建新的root实例，避免复用已卸载的root
   if (root) {
    root.unmount();
  }
  root = ReactDOM.createRoot(dom);
  root.render(
    <BrowserRouter basename='/sub-note'>
      <GlobalProvider getGlobalState={getGlobalState} setGlobalState={setGlobalState} onGlobalStateChange={onGlobalStateChange} >
         <App/>
      </GlobalProvider>
    </BrowserRouter>
  )
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

// 各个生命周期
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap(a) {
  console.log(a)
}


// 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
   getGlobalState =props.getGlobalState;
   onGlobalStateChange = props.onGlobalStateChange;
   setGlobalState = props.setGlobalState;
   render(props); 
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  root.unmount();
}

