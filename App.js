import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import {Switch,Route} from 'react-router-dom'
import Cart from './Components/Cart/Cart'
import Error from './Components/FilterComponents/Error';
import Milk from './Components/FilterComponents/Milk';
import Nuts from './Components/FilterComponents/Nuts';
import Spices from './Components/FilterComponents/Spices';
import Beverages from './Components/FilterComponents/Beverages'
import Oils from './Components/FilterComponents/Oils';
import Fruits from './Components/FilterComponents/Milk';
import Vegetables from './Components/FilterComponents/Vegetables';
import Meat from './Components/FilterComponents/Meat';
import Fish from './Components/FilterComponents/Fish';
import Biscuits from './Components/FilterComponents/Biscuits';
import Chips from './Components/FilterComponents/Chips';
import Noodles from './Components/FilterComponents/Noodles';
import Drinks from './Components/FilterComponents/Drinks';
import Soups from './Components/FilterComponents/Soups';
import Shampoo from './Components/FilterComponents/Shampoo';
import Conditioner from './Components/FilterComponents/Conditioner';
import Soap from './Components/FilterComponents/Soap';
import Bodywash from './Components/FilterComponents/Bodywash';
import HairOil from './Components/FilterComponents/HairOil';
import Toothpaste from './Components/FilterComponents/Toothpaste';
import ShavingGel from './Components/FilterComponents/ShavingGel';
import Perfume from './Components/FilterComponents/Perfume';
import Chocolates from './Components/FilterComponents/Chocolates';
import Facewash from './Components/FilterComponents/Facewash';
import ExitPage from './Components/FilterComponents/ExitPage';
import ViewDetails from './ItemDetails/ViewDetails';



function App() {
  return (
    <div className="App">
     <Header/>
     <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/cart' component={Cart}/>
     <Route exact path='/exit' component={ExitPage}/>
     <Route exact path='/product/:id' component={ViewDetails}/>
     <Route exact path='/milk' component={Milk}/>
     <Route exact path='/nuts' component={Nuts}/>
     <Route exact path='/spices' component={Spices}/>
     <Route exact path='/beverages' component={Beverages}/>
     <Route exact path='/oils' component={Oils}/>
     <Route exact path='/fruits' component={Fruits}/>
     <Route exact path='/veg' component={Vegetables}/>
     <Route exact path='/meat' component={Meat}/>
     <Route exact path='/fish' component={Fish}/>
     <Route exact path='/biscuits' component={Biscuits}/>
     <Route exact path='/chips' component={Chips}/>
     <Route exact path='/noodles' component={Noodles}/>
     <Route exact path='/drinks' component={Drinks}/>
     <Route exact path='/soups' component={Soups}/>
     <Route exact path='/shampoo' component={Shampoo}/>
     <Route exact path='/conditioner' component={Conditioner}/>
     <Route exact path='/soap' component={Soap}/>
     <Route exact path='/bodywash' component={Bodywash}/>
     <Route exact path='/facewash' component={Facewash}/>
     <Route exact path='/hair' component={HairOil}/>
     <Route exact path='/paste' component={Toothpaste}/>
     <Route exact path='/shave' component={ShavingGel}/>
     <Route exact path='/perfume' component={Perfume}/>
     <Route exact path='/chocolates' component={Chocolates}/>
     <Route component={Error}/>

     </Switch>
     
    </div>
  );
}

export default App;
