import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import CRM from "./pages/crm/CRM";
import Notification from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";
import Help from "./pages/help/Help";

function App() {
  return (
    
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/crm" element={<CRM/>} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help&documentation" element={<Help />} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
