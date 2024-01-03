import './App.css';
import { Stack } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Frontend/HomePage';
import UseCasesPage from './Pages/Frontend/UseCasesPage';
import EnterprisePage from './Pages/Frontend/EnterprisePage';
import PricingPage from './Pages/Frontend/PricingPage';
import BlogPage from './Pages/Frontend/BlogPage';
import SignIn from './Pages/Frontend/SignIn';
import SignUp from './Pages/Frontend/SignUp';
import FlowiseCom from './Pages/Frontend/FlowiseCom';

function App() {
  return (
    <Stack position={'relative'} overflow={'hidden'}>
    <Routes>
      
      <Route path='/' element={<FlowiseCom/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/use-cases' element={<UseCasesPage/>}/>
      <Route path='/enterprise' element={<EnterprisePage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/auth/signin' element={<SignIn/>}/>
      <Route path='/auth/signup' element={<SignUp/>}/>
    </Routes>
    </Stack>
  );
}

export default App;
