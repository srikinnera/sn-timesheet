import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  QueryClient,
  useMutation
} from 'react-query'
import Home from './components/Home'
import Login from './components/Login'
import ViewTimesheet from './components/ViewTimesheet';
import './App.css';
import { loginUser } from './services';

const queryClient = new QueryClient()

function App() {
  const token = sessionStorage.getItem('token');
  const { mutate } = useMutation(loginUser, {
    onSuccess: data => {
      console.log(data)
      sessionStorage.setItem('token', data.access_token)
  },
   onError: () => {
        alert("login error")
 },
   onSettled: () => {
      queryClient.invalidateQueries('login')
 }
 });
  
  if(!token){
    return <Login  mutateMethod={mutate} />
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<ViewTimesheet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
