import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Intern</h4>
                <h5>DRDO (Institute for Systems Studies and Analysis) — New Delhi, India</h5>
              </div>
              <h3>June 2025 – July 2025</h3>
            </div>
            <p>
              Developed Sangrah, a full-stack web application for IT resource management across DRDO. Frontend built with React, JavaScript and CSS; Node.js backend with MySQL database. Implemented modules for asset tracking, status management, and interactive dashboards, and deployed securely on DRDO's internal server. Focused on responsive UI, efficient server-side logic, and secure data handling.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science and Engineering</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>Aug 2023 – May 2027</h3>
            </div>
            <p>
              CGPA: 9.13. Coursework includes Data Structures, Algorithms, Computer Networks, Databases and Machine Learning.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
