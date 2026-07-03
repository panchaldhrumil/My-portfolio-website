// ── Existing projects ─────────────────────────────────────────────────────────
import project2 from "../../assets/get_me_chai.jpg";

// ── Flipkart GRiDLOCK — all 13 images ────────────────────────────────────────
import gridlock_ppt1 from "../../assets/projects/flipkart_gridlock_2026/ppt1.png";
import gridlock_ppt2 from "../../assets/projects/flipkart_gridlock_2026/ppt2.png";
import gridlock_ppt3 from "../../assets/projects/flipkart_gridlock_2026/ppt3.png";
import gridlock_ppt4 from "../../assets/projects/flipkart_gridlock_2026/ppt4.png";
import gridlock_ppt5 from "../../assets/projects/flipkart_gridlock_2026/ppt5.png";
import gridlock_ppt6 from "../../assets/projects/flipkart_gridlock_2026/ppt6.png";
import gridlock_img1 from "../../assets/projects/flipkart_gridlock_2026/img1.jpeg";
import gridlock_img2 from "../../assets/projects/flipkart_gridlock_2026/img2.jpeg";
import gridlock_img3 from "../../assets/projects/flipkart_gridlock_2026/img3.jpeg";
import gridlock_img4 from "../../assets/projects/flipkart_gridlock_2026/img4.jpeg";
import gridlock_img5 from "../../assets/projects/flipkart_gridlock_2026/img5.jpeg";
import gridlock_img6 from "../../assets/projects/flipkart_gridlock_2026/img6.jpeg";
import gridlock_img7 from "../../assets/projects/flipkart_gridlock_2026/img7.jpeg";


// ── Credit Risk Modelling ────────────────────────────────────────────────────
import creditRisk from "../../assets/projects/credit risk modelling/ml2.png";

// ── Insurance Premium Prediction ─────────────────────────────────────────────
import insurance from "../../assets/projects/Insurance  Premium prediction/ml1.JPG";

// ── Suchi Semicon ────────────────────────────────────────────────────────────
import suchi1 from "../../assets/projects/suchi semicon/suchi1.jpeg";
import suchi2 from "../../assets/projects/suchi semicon/suchi2.jpeg";

// ── Power BI Dashboard ───────────────────────────────────────────────────────
import powerbi from "../../assets/projects/online courses analytics dahsboard/dashboard.png";

const projectcardData = [
  // ── New ML / DS / Analytics projects ──────────────────────────────────────
  {
    imgsrc: [
      gridlock_ppt1, gridlock_ppt2, gridlock_ppt3, gridlock_ppt4, gridlock_ppt5, gridlock_ppt6,
      gridlock_img1, gridlock_img2, gridlock_img3, gridlock_img4, gridlock_img5, gridlock_img6, gridlock_img7,
    ],
    title: "Flipkart GRiDLOCK — Bengaluru Traffic & Demand Prediction",
    text: "Travel intelligence project analyzing passenger booking behavior, cancellation patterns, and demand forecasting for Bengaluru. Achieved 91.5% prediction accuracy using ensemble ML models.",
    techStack: ["Python", "Scikit-learn", "Pandas", "EDA", "Machine Learning", "Vercel"],
    github: "https://github.com/panchaldhrumil/Flipkart_GridLock_Benguluru_Taffic_Prediction",
    live: "https://flipkart-grid-lock-benguluru-taffic.vercel.app/",
  },
  {
    imgsrc: [creditRisk],
    title: "Credit Risk Modelling",
    text: "End-to-end ML model predicting credit default risk with a Streamlit web app for real-time inference. Covers EDA, feature engineering, and model evaluation with industry-standard metrics.",
    techStack: ["Python", "Scikit-learn", "Streamlit", "Pandas", "XGBoost"],
    github: "https://github.com/panchaldhrumil/Credit-Risk-Modelling-ML-project",
    live: "https://credit-risk-modelling-ml-model.streamlit.app/",
  },
  {
    imgsrc: [insurance],
    title: "Insurance Premium Prediction",
    text: "ML regression model predicting health insurance premiums based on personal attributes. Deployed as an interactive Streamlit app for instant premium estimation.",
    techStack: ["Python", "Regression", "Streamlit", "Pandas", "Feature Engineering"],
    github: "https://github.com/panchaldhrumil/Insurance_Premium_Prediction",
    live: "https://insurance-premium-prediction-codebasics.streamlit.app/",
  },
  {
    imgsrc: [suchi1, suchi2],
    title: "Suchi Semicon — Quality CrossCheck",
    text: "MERN stack application that digitised internal manufacturing and inventory processes for a semiconductor company. Developed REST APIs with Express.js & Node.js, managed data with MongoDB, built responsive React interfaces, and tested with Postman.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Postman"],
    github: "https://github.com/panchaldhrumil/Quality-Cross-Check-Suchi-Semicon",
    live: "https://quality-cross-check-suchi-semicon.vercel.app/",
  },
  {
    imgsrc: [powerbi],
    title: "Online Courses Analysis — Power BI Dashboard",
    text: "Interactive Power BI dashboard analyzing EdTech course trends — enrollment patterns, ratings distribution, pricing insights, and category-level demand across major online learning platforms.",
    techStack: ["Power BI", "DAX", "Data Modeling", "Data Visualization"],
    github: "https://github.com/panchaldhrumil/Edtech_Courses_PowerBI_DashBoard",
    live: null,
  },
  // ── Existing projects ───────────────────────────────────────────────────────
  {
    imgsrc: [project2],
    title: "Get Me Chai",
    text: "Dynamic frontend project built with HTML, CSS, and JavaScript delivering an engaging, user-friendly interface for ordering chai with smooth interactivity.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: null,
    live: null,
  },
];

export default projectcardData;
