// import Navbar from "./components/Navbar";
import AdminDashborad from "./pages/AdminDashborad";
import AdminTicket from "./pages/AdminTicket";
import ClientDashboard from "./pages/ClientDashboard";
import Login from "./pages/Login";
import UserQuery from "./pages/UserQuery";

export default function App() {
  return (
<div>
  <Login/>
  <ClientDashboard/>
  <UserQuery/>
  <AdminDashborad/>
  <AdminTicket/>
</div>
  )
}