import './index.css';
import './App.css';
import Sidebar from './Sidebar';
import Banner from './banner';
import TopMenu from './topMenu';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlus, faHouse, faListCheck, faNoteSticky, faCalendarWeek} from "@fortawesome/free-solid-svg-icons";
library.add(faCirclePlus, faHouse, faListCheck, faNoteSticky, faCalendarWeek);


function App() {
  return (
    <div className="App" class="w-screen h-screen">
      <div class="flex flex-row">
        <Sidebar />
        <div class='flex w-full flex-col'>        
          <TopMenu />
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default App;
