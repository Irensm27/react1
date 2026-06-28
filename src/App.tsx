import './App.css'

import PaginationComponent from "./components/pagination/PaginationComponent.tsx";
import Some from "./components/user/UsersComponent.tsx";

const App = () => {
  return (
      <div>
        <Some />
        <PaginationComponent/>
      </div>
  );
};

export default App;
