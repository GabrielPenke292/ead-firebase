import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>   
        <Routes>  
        <Route path='/:nameCourse' element={<div className='modulos'>Lista Modules</div>} />
          <Route path='/:nameCourse/:nameModule' element={<div className='aulas'>Lista Classes</div>} />
          <Route path='/:nameCourse/:nameModule/:nameClass' element={<div className='aula-video'>Show Classe</div>} />
          <Route path='/' element={<div className='cursos'>List Courses</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
