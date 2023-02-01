import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css';

import Home from './page/home'
import Canhan from './page/canhan'
import MV from './page/mv'
import Nhacmoi from './page/nhacmoi'
import Radio from './page/radio'
import Theloai from './page/theloai'
import Theodoi from './page/theodoi'
import Top100 from './page/top100'
import Zingchart from './page/zingchart'

import Defaylayout from './layout/defaulayout';


function App() {
  
  return (
    <BrowserRouter>
      <div className='wrapall'>
      <Routes>
        <Route path='/' element={<Defaylayout>{Home}</Defaylayout>}></Route>
        <Route path='canhan' element={<Defaylayout><Canhan></Canhan></Defaylayout>}></Route>
        <Route path='zingchart' element={<Defaylayout><Zingchart></Zingchart></Defaylayout>}></Route>
        <Route path='radio' element={<Defaylayout><Radio></Radio></Defaylayout>}></Route>
        <Route path='theodoi' element={<Defaylayout><Theodoi></Theodoi></Defaylayout>}></Route>
        <Route path='nhacmoi' element={<Defaylayout><Nhacmoi></Nhacmoi></Defaylayout>}></Route>
        <Route path='top100' element={<Defaylayout><Top100></Top100></Defaylayout>}></Route>
        <Route path='theloai' element={<Defaylayout><Theloai></Theloai></Defaylayout>}></Route>
        <Route path='mv' element={<Defaylayout><MV></MV></Defaylayout>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
