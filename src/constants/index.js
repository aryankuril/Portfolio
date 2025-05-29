import {
  Apple,
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  squdo,
  boxgame,
  goalgame,
  gussinggame,
  numbergame,
  snakegame,
  flipkartclone,
  NIDHIPC,
  sayli ,
  Aniket,
  bookapp,
  weather,
  expence,
  movixmaster,
  Password,
  Qrcode,
  todo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN stack Developer",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Fullstack Developer",
  company_name: "Hexaware",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "June 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Wlofx ",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December 2024 - Ongoing",
    points: [
      "Focused on crafting responsive and visually appealing user interfaces using React.js and modern frontend frameworks.",
      "Coordinated with designers and backend developers to ensure seamless integration and a consistent user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Improved the performance and usability of web applications by optimizing design and code.",
    ],
  },
  {
    title: " Educator ",
    company_name: "Disha classes",
    icon: web,
    iconBg: "#383E56",
    date: "June 2024 - Ongoing",
    points: [
      "Taught C. C++, Python, Java, JavaScript, and Full Stack Web Development.",
      "Developed practical coding exercises and guided students throughreal-world projects",
      "Conducted interactive workshops and coding bootcamps to foster collaborative learning and problem-solving skills.",
      "Evaluated progress and provided personalized feedback to enhance learning outcomes.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Nidhi Madivala",
    // designation: "CFO",
    // company: "Acme Co",
    image: NIDHIPC,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sayli Chavan",
    // designation: "COO",
    // company: "DEF Corp",
    image: sayli ,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: " Aniket Kuril",
    // designation: "CTO",
    // company: "456 Enterprises",
    image: Aniket,
  },
  
];

const projects = [
  {
    name: "Apple Website",
    description:
      " A responsive replica of the Apple website showcasing modern UI design, navigation, and layout using advanced front-end technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Apple,
    live_preview: "https://aryan-website.netlify.app",
    source_code_link: "https://github.com/aryankuril/Apple-website",
  },
  {
    name: " Amazon clone",
    description:
      "A dynamic e-commerce website clone featuring product catalog, responsive design, and user-friendly navigation, mirroring amazon's core functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flipkartclone,
    live_preview: "https://github.com/aryankuril/Amazon-clone",
    source_code_link: "https://github.com/aryankuril/Amazon-clone",
    
  },
  {
    name: " Book Store",
    description:
      "An online bookstore app to browse, search, and buy books across genres with cart and secure checkout.",
    tags: [
      {
        name: "Gsap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookapp,
    live_preview: "https://bookk-store.netlify.app",
    source_code_link: "https://github.com/aryankuril/Bookstore",
    
  },
  {
    name: " Movix Master",
    description:
      "Movix-Master is a movie app to explore, search, and watch trailers for trending and upcoming movies, shows.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "Scss",
        color: "pink-text-gradient",
      },
    ],
    image: movixmaster,
    live_preview: "https://movix-master.netlify.app",
    source_code_link: "https://github.com/aryankuril/movix-master",
    
  },
  {
    name: " Weather App",
    description:
      "A simple weather app that shows real-time weather updates, temperature, and conditions based on user location or search.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    live_preview: "https://weather-app-arayn.netlify.app",
    source_code_link: "https://github.com/aryankuril/Weather-App",
    
  },
  {
    name: " Password Generator",
    description:
      "A secure password generator app that creates strong, random passwords with customizable length, symbols, numbers, and uppercase letters.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Password,
    live_preview: "https://password-generator-aryann.netlify.app",
    source_code_link: "https://github.com/aryankuril/Password-Generator",
    
  },
  {
    name: "QrCode Generator",
    description:
      "A QR Code Generator app that instantly creates QR codes from text or URLs for easy sharing and scanning.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Qrcode,
    live_preview: "https://qrcode-generator-aryan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Qr-Code-Generator",
    
  },
  {
    name: " Expense Tracker",
    description:
      "An Expense Tracker app to manage income, track daily expenses, and visualize spending habits with simple, clear insights.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: expence,
    live_preview: "https://expense-tracker-aryann.netlify.app",
    source_code_link: "https://github.com/aryankuril/Expense-Tracker",
    
  },
  {
    name: " To-Do List",
    description:
      "A To-Do List app to add, edit, delete, and manage daily tasks with a clean, user-friendly interface.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    live_preview: "https://todo-list-aryann.netlify.app",
    source_code_link: "https://github.com/aryankuril/To-Do-List",
    
  },
  {
    name: "Memmory Game",
    description:
      "A memory-based game where users flip cards to match pairs, enhancing focus and memory skills.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gussinggame,
    live_preview: "https://memory-game-aryan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Games/tree/master/card%20game",
  },
  {
    name: " Tetris Game",
    description:
      "A creative game combining logic and reflex-based challenges through interactive box mechanics, ensuring a fun experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: boxgame,
    live_preview: "https://tetris-arayan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Games/tree/master/box%20game",
  },
  {
    name: "Squdo Game",
    description:
      " A strategic puzzle game involving logic and patterns, inspired by Sudoku, to challenge players’ problem-solving abilities.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: squdo,
    live_preview: "https://sudokugame-aryan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Games/tree/master/sudoku%20game",
  }, {
    name: " Pong Game",
    description:
      "An interactive game challenging users to set and achieve goals with intuitive gameplay and engaging mechanics having fun with AI.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: goalgame,
    live_preview: "https://pong-aryan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Games/tree/master/pong%20game",
  }, {
    name: "Number Game",
    description:
      "A simple and fun game where players add numbers to reach a target score, improving arithmetic skills with engaging and interactive gameplay.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: numbergame,
    live_preview: "https://number-game-aryan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Games/tree/master/Number%20game",
  }, {
    name: "Snake Game",
    description:
      "A nostalgic arcade game where players control a snake, collecting food while avoiding obstacles, with smooth controls and exciting gameplay having fun with AI.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: snakegame,
    live_preview: "https://snakegame-aryan.netlify.app",
    source_code_link: "https://github.com/aryankuril/Games/tree/master/snake%20game",
  },
];

export { services, technologies, experiences, testimonials, projects };
