import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I’m Abhishek, a Full Stack Web Developer certified in Python Automation, creating efficient and scalable solutions for the web.`;

export const ABOUT_TEXT = `I am a B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. Growing up in a humble background, I’ve always been inspired by the transformative power of technology and motivated to bridge the gap through innovation. Despite challenges, my passion for learning drives me forward as I explore cutting-edge technologies to create impactful solutions. Whether it's developing intelligent systems or designing user-friendly applications, I’m committed to building a future where technology serves everyone. My journey is just beginning, and I’m excited to see where it leads!`;

export const EXPERIENCES = [
  {
    year: "September 2024 - October 2024",
    role: "Java Intern",
    company: "Oasis Infobyte",
    description: `Devised an ATM Interface using Java with OOP principles, improving transaction efficiency by 25%. Designed a number guessing game with Java Swing, enhancing user engagement through robust input validation and error handling. Ensured 100% functionality through unit testing, reducing debugging time by 30%.`,
    technologies: ["Java"],
  },
  {
    year: "May 2024 - July 2024",
    role: "IT Services Intern",
    company: "Tata Steel Ltd.",
    description: `Developed an Inventory Forecast Model to optimize inventory tracking, enhancing demand prediction accuracy by up to 30% and reducing stock-outs by 25%. Collaborated with IT teams to improve inventory management systems, resulting in 10% cost savings.`,
    technologies: ["Python", "Tableau,", "MS Excel"],
  },
  {
    year: "July 2023 - October 2024",
    role: "WordPress Developer Intern",
    company: "Stecho Services",
    description: `Revamped WordPress websites with responsive designs, optimizing performance by 20% across 3+ projects. Resolved technical issues to reduce downtime by 15% and streamlined content management with GPT-based solutions, cutting manual work by 25%.`,
    technologies: ["WordPress", "HTML", "CSS", "JavaScript",],
  },
];

export const PROJECTS = [
  {
    title: "Student Information System with Facial Attendance",
    image: project1, // Replace with actual image or path
    description:
      "A facial recognition tool that scans and records attendance for events, generating detailed Excel logs. The interface reduces manual work by 70% and automates attendance tracking with OpenCV and Keras.",
    technologies: ["Python", "OpenCV", "Keras", "Tkinter", "MySQL", "Figma"],
  },
  {
    title: "Bollywood Movie Recommendation System",
    image: project2, // Replace with actual image or path
    description:
      "A recommendation model trained on a Bollywood movie dataset, achieving 85% accuracy in generating movie suggestions. Built with Streamlit for a user-friendly interface and presented in demo sessions.",
    technologies: ["Python", "Streamlit", "Jupyter Notebook"],
  },
  {
    title: "AI-Powered Web Text Scraper and Q&A",
    image: project3, // Replace with actual image or path
    description:
      "A robust tool utilizing LangChain document loading, Google Generative AI, and BeautifulSoup to scrape data from web pages, PDFs, and more. With FAISS for vectorized text storage, it enables efficient search and question-answering functionalities.",
    technologies: ["Python", "LangChain", "Google Generative AI", "BeautifulSoup", "FAISS"],
  },
  {
    title: "WhatsApp AI Bot Powered by Gemini API",
    image: project4, // Replace with actual image or path
    description:
      "A Python-based bot that automates WhatsApp message responses using Google’s Generative AI. Integrated with Twilio for message handling and Flask for webhook management, it processes incoming messages and generates intelligent responses via the Gemini AI model.",
    technologies: ["Python", "Twilio", "Flask", "Gemini AI", "Google Generative AI"],
  },
];


export const CONTACT = {
  address: "India",
  phoneNo: "+91 9534840936",
  email: "codeitabhishek911@gmail.com",
};