// import Navbar from "./components/Navbar";
// import CreatePages from "./pages/Admin/CreatePages";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTicket from "./pages/AdminTicket";
import ClientDashboard from "./pages/ClientDashboard";
import ForgetPassowrd from "./pages/ForgetPassowrd";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserQuery from "./pages/UserQuery";

import Comment from "./pages/Comment";

import ConfirmPassword from "./pages/ConfirmPassword";
import Roles from "./pages/Roles";
import ProjectLeadDashboard from "./pages/ProjectLeadDashboard";

export default function App() {
  return (
<div>
  <ProjectLeadDashboard/>
  <Roles/>
  <Comment/>
  <Login/>
  <ForgetPassowrd/>
    <ConfirmPassword/>
  <Register/>
  <ClientDashboard/>
  <UserQuery/>
  <AdminDashboard/>
  <AdminTicket/>
  {/* <CreatePages/>  */}
</div>
  )
}