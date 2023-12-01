import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <header>
        <div className="heading">
          <div>
            <strong>Student Placement Dashboard</strong>
          </div>
          <div>
            <img id="cbit_logo" src="CBIT-LOGO.png" alt="cbit_logo" />
          </div>
        </div>
      </header>
      <nav>
        <a href="/">Profile</a>
        {/* <a href="/">Status</a> */}
        <a href="/contactus">Contact us</a>
      </nav>
      <div>Dashboard</div>
      <main>
        <section id="Placement Statistics">
          <a href="Companies.pdf">
            <h3>Placement Statistics</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWsspMsehAPckPfxEfd3PVmeNLbMK_dIUHwA&usqp=CAU"
              alt="Statistics"
            />
          </a>
        </section>

        <section id="Announcements">
          <a href="/announcements">
            <h3>Announcements</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKlpmGvY0DP69msZZC6cdLqv_JKkKeTq0PA&usqp=CAU"
              alt="Announcements"
            />
          </a>
        </section>

        <section id="Feedback and Reviews">
          <a href="/statistics">
            <h3>Feedback and Reviews</h3>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyR91wYdJevaqKGcoS75ncS-v6cExLwg13A&usqp=CAU"
              alt="Statistics"
            />
          </a>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 CBIT Student Placement Dashboard</p>
      </footer>
    </>
  );
};

export default Dashboard;
