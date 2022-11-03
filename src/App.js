import { Routes, Route, Link } from 'react-router-dom';
import { SkillProvider } from './context/SkillContext';

import { Home } from './components/Home';
import { SkillIndex } from './components/skills/SkillIndex';
import { SkillCreate } from './components/skills/SkillCreate';
import { SkillEdit } from './components/skills/SkillEdit';

function App() {
  return (
    <SkillProvider>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Link type='button' to="/" className='btn btn-primary'>Home</Link>
            <Link type='button' to="/skills" className="btn btn-primary ms-2">Skills</Link>
          </div>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skills' element={<SkillIndex/>}/>
            <Route path='/skills/create' element={<SkillCreate/>}/>
            <Route path='/skills/edit/:id' element={<SkillEdit/>}/>
          </Routes>
        </div>
      </div>
    </SkillProvider>


  );
}

export default App;
