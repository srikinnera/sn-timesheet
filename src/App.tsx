import {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Home from './components/Home'
import Login from './components/Login'
import ViewTimesheet from './components/ViewTimesheet';
import './App.css';

const queryClient = new QueryClient()

function App() {
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    if(token !== sessionStorage.getItem('token'))
      sessionStorage.setItem('token', token);
  },[token])
  
  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<ViewTimesheet />} />
        </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
