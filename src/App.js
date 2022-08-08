import './App.css';
import Home from './components/home';
import './components/BaiTapBookingTicket.css'
function App() {
  return (
    <div className="backGround">
      <h1 className='tit'>RẠP CHIẾU PHIM CYBERSOFT</h1>
      <div className='screen'></div>
      <Home />
    </div>
  );
}

export default App;
