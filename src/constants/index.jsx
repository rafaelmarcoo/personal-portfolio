import { University } from "lucide-react";
import test from "../assets/projects/test.jpg";

export const navItems = [
    { label: "Home", href:"home" },
    { label: "About", href:"about" },
    { label: "Projects", href:"projects" },
    { label: "Experience", href:"experience" },
    { label: "Education", href:"education" },
];

export const hobbies = [
    { 
        title: "Waiter / Barista",
        description: "As a barista, I meet new people, develop communication skills, and multitask under pressure, all while brewing perfect coffee.",
    },
    {
        title: "Musician - Guitarist",
        description: "Playing guitar is my creative outlet. I perform live, compose melodies, and relieve stress through music.",
    },
    {
        title: "Fitness Enthusiast",
        description: "Fitness is key to my lifestyle. It keeps me fit and mentally sharp, teaching discipline.",
    }
];

export const techStack = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
];

export const programmingLanguages = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
];

export const databases = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg'
];

export const projects = [
    {
        title: "InvoicePro",
        description: "InvoicePro is an invoice and client management system developed for HexWeb Ltd. It features a robust system that handles invoice processing and client management.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/invoice-system-frontend-v2',
            'https://github.com/rafaelmarcoo/invoice-system-backend',
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "KitaKits!",
        description: "KitaKits! is an innovative social media and chat platform under planning and development, designed to help users effortlessly to make plans, explore locations, and more using AI. Inspired by the Filipino phrase `KitaKits!` meaning `See you later!`, our platform brings people together with ease, making everyday interactions smarter and more engaging.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/KitaKits--frontend',
            'https://github.com/rafaelmarcoo/KitaKits--backend',
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "Obar Website & Booking System",
        description: "Developed a website for a Obar Auckland, which is a restaurant my mates and I often go to, featuring an aesthetic front-end with a photo gallery. Implemented a booking system for customers and an admin panel for employees to manage reservations efficiently.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/obar-website-and-admin',
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "VR Landing Page",
        description: "A Front-End Project I made to learn TailwindCSS and improve my Front-End skills. This project helped me understand utility-first CSS, responsive design, and component-based styling.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/vr-landing-page'
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "Deal Or No Deal",
        description: "This project is a Java-based implementation of the popular television game show `Deal or No Deal`. The game simulates the experience of choosing cases, dealing with the banker, and deciding whether to keep or switch cases. The project demonstrates the application of Object-Oriented Programming (OOP) principles and SOLID design principles, all concepts I have learned at university.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original-wordmark.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/GUI-deal-or-nodeal',
            'https://github.com/rafaelmarcoo/deal-or-nodeal',
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "Banking System",
        description: "A banking application developed using Java and Java Swing, with Java Database Connectivity (JDBC) for MySQL integration. It features a login system, account creation functionality, deposit and withdrawal capabilities, and the ability to view transaction history.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/banking-system',
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "CabsOnline",
        description: "As part of my coursework, I developed a cab booking system named 'CabsOnline.' This system is designed to facilitate cab bookings through a user-friendly form, which then sends the requests to the admin side for processing and management. Admins can prioritize viewing and managing all booking requests within a 2-hour window.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/CabsOnline',
        ],
        screenshots: [
            test,
        ],
    },
    {
        title: "Status Posting System",
        description: "For my coursework, I created a Status Posting Platform utilizing HTML/CSS to design an intuitive and responsive web interface, PHP for backend functionality, and MySQL for database integration. The aim of this project is to offer a user-friendly platform where users can effortlessly share and search for updates and statuses.",
        technology: [
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
        ],
        sourceCode: [
            'https://github.com/rafaelmarcoo/status-posting-system',
        ],
        screenshots: [
            test,
        ],
    },
];

export const experiences = [
    {
        title: "Full Stack Developer Intern",
        company: "HexWeb Ltd.",
        location: "Hawke's Bay",
        description: [
            'Developed their in-house invoicing/management system, using ReactJS, ASP.NET Web API, TailwindCSS, and PostgreSQL, increasing efficiency in invoice processing and client management by over 50%.',
            'Designed and implemented responsive, aesthetic web pages using ReactJS and TailwindCSS, ensuring seamless user experiences across devices.',
            'Built and optimized RESTful APIs with ASP.NET, ensuring smooth communication between the frontend and backend.',
            'Managed and maintained databases with PostgreSQL, ensuring data integrity and performance.',
            'Assisted in client communications and provided basic technical support, enhancing customer satisfaction.',
        ],
        date: "November 2024 - February 2025",
    },
    {
        title: "Waiter / Barista",
        company: "The Terrace in The Grand by SkyCity",
        location: "Auckland",
        description: [
            'Crafted high-quality coffee beverages, showcasing expertise in barista skills and contributing to the premium dining experience.',
            'Provided exceptional customer service in a 5-star luxury environment, ensuring a memorable dining experience for guests.',
            'Developed strong communication and interpersonal skills while working in a high-end setting, contributing to the overall ambiance and reputation of the establishment',
        ],
        date: "Septemper 2024 - Present",
    },
    {
        title: "Waiter / Bartender",
        company: "Fortuna - SkyCity Entertainment Group",
        location: "Auckland",
        description: [
            'Prepared and served a variety of beverages as a bartender. Make sure every customer has an excellent dining experience',
            'Learned to adapt and be a team player, especially in a busy and high-pressure environment.',
            'Developed multitasking skills and the ability to manage a high workload while maintaining attention to detail.',
        ],
        date: "January 2023 - September 2024",
    },
]

export const education = {
    programme: "Bachelor of Engineering (Honours)",
    major: "Major in Software Engineering",
    year: "Penultimate Year - 3rd Year",
    university: "Auckland University of Technology",
    graduation: "Expected December 2026",
    gpa: "8.6 / 9.0 GPA"
};

export const footerLinks = [
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
        link: 'https://www.linkedin.com/in/rafaelmarcomanubay/',
    },
    {
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
        link: 'https://github.com/rafaelmarcoo/',
    },
];
