import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

export const StoreContext = createContext({});
export const DispatchContext = createContext({});

const GlobalProvider = ({children,getGlobalState,setGlobalState,onGlobalStateChange})=>{
 
     const initState = getGlobalState? getGlobalState():{};
     
     const reducer = (state,action)=>{
          switch(action.type){
                case 'SET_Theme':{
                    
                    setGlobalState?.({theme:action.payload}); // 通知主应用变化
                    return {
                          ...state,
                          theme:action.payload
                    }
                }
                case 'SET_SEARCH_VALUE':{
                     
                      setGlobalState?.({searchValue:action.payload})
                      return {
                          ...state,
                          seachValue: action.payload
                      }
                }
                case 'SYNC_STATE':{
                     //同步主应用状态到子应用
                     return {
                          ...state,
                          ...action.payload
                     }
                }
                default:return state;
          }
     } 

    const [store,dispatch] = useReducer(reducer,initState);
    
    useEffect(() => {
     if (!onGlobalStateChange) return;
     
     const handleGlobalStateChange = (state) => {
         dispatch({
             type: 'SYNC_STATE',
             payload: state,
         });
     };
 
     // 监听全局状态变化（立即执行一次）
     onGlobalStateChange?.(handleGlobalStateChange, true);
 
 }, [onGlobalStateChange]);
    

     return <StoreContext value={store}>
           <DispatchContext value={dispatch}>
                {children}
           </DispatchContext>
     </StoreContext>
} 
export default GlobalProvider;

export const useStore =()=>{
     return useContext(StoreContext);
}
export const useDispatch =()=>{
     return useContext(DispatchContext);
}