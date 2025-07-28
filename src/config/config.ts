export const PERSONAL_DETAILS = {
    name: "Corey Hines",
    title: "Software Engineering Student",
    email: "me@coreyh.nz",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    location: "Christchurch, New Zealand",
    links: {
        website: "coreyh.nz",
        linkedin: "linkedin.com/in/coreyhiness",
        github: "github.com/coreyyy34",
    },
    summary:
        "Passionate third-year Software Engineering student with a strong foundation in software development and problem-solving. Experienced in full-stack development and collaborative programming. Seeking internship opportunities to apply technical skills and contribute to innovative software solutions while gaining real-world industry experience.",
};

export const SKILLS = [
    {
        label: "Programming & Development",
        key_points: [
            {
                label: "Proficient in:",
                value: "Java, Kotlin, Python, TypeScript, C",
            },
            {
                label: "Web Technologies:",
                value: "HTML, CSS, Next.js, React",
            },
            {
                label: "Backend",
                value: "SpringBoot, Flask, Node.js, Express.js, API design",
            },
        ],
    },
    {
        label: "Tools & Technologies",
        key_points: [
            {
                label: "Methodologies:",
                value: "Agile, debugging, algorithm design",
            },
            {
                label: "Databases:",
                value: "MariaDB, Redis",
            },
            {
                label: "Cloud & Tools:",
                value: "Git, Docker, Deployment, UNIX/Ubuntu",
            },
        ],
    },
];

export const PROJECTS = [
    {
        title: "HomeHelper",
        description:
            "Full-stack Spring Boot application for renovation teams to track projects, manage expenses, and chat with team members.",
        key_points: [
            "Built with Spring Boot and Java",
            "Agile development in team of 7 using Scrum",
            "Project tracking and expense management",
            "Integrated team communication features",
        ],
        date: "Feb 2025 - Present",
    },
    {
        title: "GameVerse",
        description:
            "Game catalog website with filtering, wishlists, reviews, and game management built with Express.js and React using TypeScript.",
        key_points: [
            "Express.js backend and React frontend with TypeScript",
            "Game filtering and search functionality",
            "Wishlist and owned game tracking",
            "User reviews and CRUD operations",
        ],
        date: "Feb 2025 - Jun 2025",
    },
    {
        title: "Microcontroller Battleships",
        description:
            "Embedded systems implementation of Battleships game using microcontrollers with hardware interfacing.",
        key_points: [
            "Embedded C programming for microcontrollers",
            "5x7 LED matrix display with navigation switch control",
            "IR sensor communication between two game boards",
            "Battleships game logic and multiplayer functionality",
        ],
        date: "Feb 2024 - Jun 2024",
    },
    {
        title: "SpringChat",
        description:
            "Real-time chat application built with Kotlin Spring Boot using WebSockets for live messaging and JWT authentication.",
        key_points: [
            "Kotlin Spring Boot with WebSocket implementation",
            "Real-time messaging with live delivery",
            "JWT authentication system",
            "Online user panel and modern chat interface",
        ],
        date: "Jun 2025 - Present",
    },
];

export const EXPERIENCE = [
    {
        title: "Inwards Goods & Retail Assistant",
        company: "Mitre 10 Matamata",
        key_points: [
            "Inventory management and supplier coordination",
            "Cross-departmental adaptability and customer service",
            "Strong attention to detail and teamwork skills",
        ],
        date: "2021 - 2024",
    },
];

export const EDUCATION = [
    {
        title: "Bachelor of Engineering (Hons)",
        location: "University of Canterbury",
        date: "2023 - Present",
        key_points: [
            "GPA: 7.54 / 9.0 (Professional Years)",
            "Expected Graducation: April, 2027",
        ],
        relevant_coursework: [
            "Software Engineering Principles",
            "Algorithms & Data Structures",
            "Web Development",
            "Database Systems",
            "Computer Networks",
        ],
    },
    {
        title: "NCEA",
        location: "Matamata College",
        date: "2020 - 2022",
        key_points: [
            "NCEA Levels 2 & 3: Endorsed with Excellence",
            "Digital Design Technology - First in subject (Luminate One Prize recipient)",
        ],
    },
];

export const ADDITIONAL_SKILLS = [
    { label: "Teamwork:", value: "Agile methodologies, pair programming" },
    { label: "Problem Solving:", value: "Analytical thinking, debugging" },
    { label: "Attention to Detail:", value: "Code review, testing" },
    { label: "Adaptability:", value: "Fast learning, new technology adoption" },
];
