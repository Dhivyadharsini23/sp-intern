
export default function Dashboard() {

  return (

    <div className="dashboard">

      <div className="navbar">

        <h1>AI SmartPlot Dashboard</h1>

        <button
          onClick={()=>{
            localStorage.removeItem("token");
            window.location.href="/";
          }}
        >
          Logout
        </button>

      </div>

      <div className="dashboard-content">

        <div className="card">
          <h2>Total Plots</h2>
          <p>150+</p>
        </div>

        <div className="card">
          <h2>Revenue</h2>
          <p>$75K</p>
        </div>

        <div className="card">
          <h2>AI Analytics</h2>
          <p>Live Insights</p>
        </div>

      </div>

    </div>

  );

}

