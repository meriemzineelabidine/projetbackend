import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import NavBoom from './components/NavBoom';
import TelTablette from './components/TelTablette';
import Tel from './components/Tel';
import Smartphone from './components/Smartphone';
import Basic from './components/Basic';
import Tablette from './components/Tablette';
import TabletteEdu from './components/TabletteEdu';
import AccesoiresTab from './components/AccesoiresTab';
import AccessoireTel from './components/AccessoireTel';
import CasqueEcouteurs from './components/CasqueEcouteurs';
import AccPourselfie from './components/AccPourselfie';
import AccPourvoiture from './components/AccPourvoiture';
import Electromenager from './components/Electromenager';
import Cuisine from './components/Cuisine';
import GrosElectromenager from './components/GrosElectromenager';
import Femme from './components/Femme';
import Homme from './components/Homme';
import Enfant from './components/Enfant';
import Soinspersonelle from './components/Soinspersonelle';
import Maquillage from './components/Maquillage';
import Essentiels from './components/Essentiels';
import Detail from './components/Detail';
import Register from './components/Register';
import Login from './components/Login';
import Profil from './components/Profil';
import PrivateRoute from './routes/PrivateRoute';
import { userCurrent } from './Js/SliceUser/Sliceuser';
import { useDispatch } from 'react-redux';
import { getproduct } from './Js/SliceProduit/SliceProduit';
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {

      dispatch(userCurrent());
      dispatch(getproduct());
    
  }, []);
    return (
      <div>
       <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/nav' element={<NavBoom></NavBoom>}></Route>
       <Route path='/telettablette' element={<TelTablette></TelTablette>}></Route>
       <Route path='/tel' element={<Tel></Tel>}></Route>
       <Route path='/smartphone' element={<Smartphone></Smartphone>}></Route>
       <Route path='/basic' element={<Basic></Basic>}></Route>
       <Route path='/tablette' element={<Tablette></Tablette>}></Route>
       <Route path='/tabletteedu' element={<TabletteEdu></TabletteEdu>}></Route>
       <Route path='/accessoiretab' element={<AccesoiresTab></AccesoiresTab>}></Route>
       <Route path='/accesoiretel' element={<AccessoireTel></AccessoireTel>}></Route>
       <Route path='/Casque et ecouteurs' element={<CasqueEcouteurs></CasqueEcouteurs>}></Route>
       <Route path='/pourselfie' element={<AccPourselfie></AccPourselfie>}></Route>
       <Route path='/pourvoiture' element={<AccPourvoiture></AccPourvoiture>}></Route>
       <Route path='/electromenager' element={<Electromenager></Electromenager>}></Route>
       <Route path='/cuisine' element={<Cuisine></Cuisine>}></Route>
       <Route path='/groselectro' element={<GrosElectromenager></GrosElectromenager>}></Route>
       <Route path='/femme' element={<Femme></Femme>}></Route>
       <Route path='/homme' element={<Homme></Homme>}></Route>
       <Route path='/enfant' element={<Enfant></Enfant>}></Route>
       <Route path='/soins' element={<Soinspersonelle></Soinspersonelle>}></Route>
       <Route path='/maquillage' element={<Maquillage></Maquillage>}></Route>
       <Route path='/essentiels' element={<Essentiels></Essentiels>}></Route>
       <Route path='/detail/:id' element={<Detail></Detail>}></Route>
       <Route  path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route element={<PrivateRoute/>}></Route>
       <Route path='/profil' element={<Profil></Profil>}></Route>
      </Routes>
      
      </div>
       
    );
  }
  
  export default App;