// 3D Portfolio Application - Fixed Loading Issue
class Portfolio3D {
    constructor() {
        this.scenes = {};
        this.renderers = {};
        this.cameras = {};
        this.controls = {};
        this.mouse = { x: 0, y: 0 };
        this.isLoading = true;
        this.loadingProgress = 0;
        this.audioEnabled = false;
        this.currentSection = 'hero';
        
        // Portfolio data
        this.portfolioData = {
            personal: {
                name: "Vansh Maurya",
                tagline: "Web Developer & Creative Technologist",
                subtitle: "Creating Immersive Digital Experiences",
                about: "I'm a passionate 3D web developer specializing in immersive digital experiences using Three.js, WebGL, and modern web technologies. With 5+ years of experience in creative development, I bridge the gap between art and technology to create stunning interactive websites that push the boundaries of what's possible on the web.",
                email: "vanshmaurya01234@gmail.com",
                phone: "+91 7652015646",
                location: "Lucknow, Uttar Pradesh, India",
                linkedin: "https://www.linkedin.com/in/vansh-maurya-7742b8315/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0rW5dk%2BtTBu8VuiAC9Piuw%3D%3D",
                github: "https://github.com/Er-Vansh",
                twitter: "https://x.com/vansh_maurya_05",
                website: "https://vansh-maurya-portfolio.vercel.app",
                stats: {
                    experience: "1+",
                    projects: "10+",
                    awards: "5+"
                }
            },
            projects: [
                {
                    id: 1,
                    title: "NotMyFault.AI",
                    shortDescription: "AI-powered excuse generator chatbot",
                    fullDescription: "An innovative web application that leverages advanced AI models to generate humorous and context-aware excuses for various situations. Features include a chat interface, customizable excuse categories, and social sharing options. Built with a focus on user experience and responsive design.",
                    technologies: ["Python", "FastAPI", "HTML", "JavaScript", "Gemini API"],
                    image: "C:\Users\vansh\OneDrive\Pictures\Screenshots\Screenshot 2025-09-29 204636.png",
                    githubUrl: "https://github.com/Er-Vansh/NotMyFault.AI",
                    liveUrl: "https://notmyfaultai.vercel.app",
                    featured: true,
                    category: "AI Chatbot"
                },
                {
                    id: 2,
                    title: "Safra",
                    shortDescription: "File upload and sharing platform",
                    fullDescription: "A secure and user-friendly file upload and sharing platform that allows users to easily upload, manage, and share files with others. Features include drag-and-drop uploads, file previews and password protection. Built with scalability and security in mind.",
                    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Firebase"],
                    image: "https://via.placeholder.com/800x500/00d4ff/ffffff?text=Holographic+Showcase",
                    githubUrl: "https://github.com/Er-Vansh/Safra",
                    liveUrl: "#",
                    featured: true,
                    category: "Web Application"
                },
                {
                    id: 4,
                    title: "Echobot",
                    shortDescription: "Personal Voice Assistant",
                    fullDescription: "A voice-activated personal assistant web application that responds to user commands and queries. Features include speech recognition, and integration with various APIs for weather, news, and reminders. Designed for ease of use and accessibility.",
                    technologies: ["Python", "Speech Recognition", "Text-to-Speech Engine", "API"],
                    image: "https://via.placeholder.com/800x500/00ffff/ffffff?text=Neural+Network",
                    githubUrl: "https://github.com/Er-Vansh/EchoBot",
                    liveUrl: "#",
                    featured: true,
                    category: "Personal Assistant"
                },
                {
                    id: 5,
                    title: "Happily",
                    shortDescription: "Mental health tracking platform",
                    fullDescription: "A comprehensive mental health tracking platform that allows users to monitor their mood, and overall well-being. Features include daily mood logging, and data visualization. Built with a focus on user privacy and data security.",
                    technologies: ["React.js", "Botpress", "JavaScript", "TailwindCSS"],
                    image: "",
                    githubUrl: "#",
                    liveUrl: "#",
                    featured: false,
                    category: "Health & Wellness"
                },
                {
                    id: 3,
                    title: "Pixify",
                    shortDescription: "AI Image Enhancer",
                    fullDescription: "A minimal React app that uploads an image and uses a remote enhancement API to upscale, denoise and restore images. Built with React, Axios and Tailwind CSS utility classes.",
                    technologies: ["React.js", "TailwindCSS", "JavaScript", "Picwish"],
                    image: "",
                    githubUrl: "https://github.com/Er-Vansh/Image-Enhancer",
                    liveUrl: "https://image-enhancer-xi.vercel.app/",
                    featured: false,
                    category: "AI-integrated Web Application"
                },
                {
                    id: 6,
                    title: "HandsUp",
                    shortDescription: "Volume control using hand gestures",
                    fullDescription: "An innovative application that utilizes computer vision to detect hand gestures via webcam and control the system volume accordingly. Features include real-time gesture recognition, customizable gesture mappings, and a user-friendly interface.",
                    technologies: ["Python", "OpenCV", "cv2", "Computer Vision"],
                    image: "https://via.placeholder.com/800x500/4ecdc4/ffffff?text=Quantum+Lab",
                    githubUrl: "#",
                    liveUrl: "#",
                    featured: false,
                    category: "Computer Vision"
                }
            ],
            skills: {
                // "3d_graphics": [
                //     {name: "Three.js", level: 95, icon: "🎲", color: "#00d4ff"},
                //     {name: "WebGL", level: 90, icon: "🔷", color: "#ff0080"},
                //     {name: "GLSL Shaders", level: 88, icon: "✨", color: "#00ffff"},
                //     {name: "Blender", level: 85, icon: "🎨", color: "#9d4edd"},
                //     {name: "React Three Fiber", level: 92, icon: "⚛️", color: "#00ff00"}
                // ],
                "web_development": [
                    {name: "JavaScript", level: 85, icon: "📜", color: "#ffd60a"},
                    {name: "Express.js", level: 80, icon: "🔷", color: "#3178c6"},
                    {name: "React", level: 50, icon: "⚛️", color: "#61dafb"},
                    {name: "Node.js", level: 80, icon: "🟢", color: "#68a063"},
                    {name: "HTML & CSS", level: 95, icon: "🖌️", color: "#654ff0"}
                ],
                "creative_tools": [
                    {name: "CapCut", level: 70, icon: "🎬", color: "#9999ff"},
                    {name: "Firebase", level: 75, icon: "🔥", color: "#011a6b"},
                    {name: "Figma & Canva", level: 70, icon: "🎨", color: "#000000"},
                    {name: "Adobe Photoshop Lightroom", level: 65, icon: "📽️", color: "#313131"}
                ],
                "specializations": [
                    {name: "Real-time Rendering", level: 70, icon: "⚡", color: "#ff0080"},
                    {name: "ML techniques", level: 85, icon: "⚙️", color: "#00d4ff"},
                    {name: "AI integration", level: 80, icon: "⛓️", color: "#9d4edd"},
                    {name: "Performance Optimization", level: 80, icon: "🚀", color: "#00ffff"}
                ]
            }
        };

        this.init();
    }

    init() {
        console.log('Initializing 3D Portfolio...');
        
        // Initialize loading screen first
        this.initLoadingScreen();
        
        // Register GSAP ScrollTrigger
        if (typeof gsap !== 'undefined' && gsap.registerPlugin) {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        // Initialize components immediately
        this.setupEventListeners();
        this.initCursorFollower();
        this.initNavigation();
        this.loadProjects();
        this.loadSkills();
        this.initContactForm();
        this.initModal();
        
        // Start loading sequence
        this.startLoadingSequence();
    }

    initLoadingScreen() {
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
        
        // Create a simple 3D loader
        this.createLoaderVisual();
    }

    createLoaderVisual() {
        const loaderContainer = document.getElementById('loader3D');
        if (!loaderContainer) return;
        
        // Create CSS-based 3D loader
        loaderContainer.innerHTML = `
            <div style="
                width: 60px;
                height: 60px;
                position: relative;
                margin: 0 auto;
                transform-style: preserve-3d;
                animation: loaderRotate 2s linear infinite;
            ">
                <div style="
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 3px solid transparent;
                    border-top: 3px solid #00d4ff;
                    border-radius: 50%;
                    animation: loaderSpin 1s linear infinite;
                "></div>
                <div style="
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    top: 10px;
                    left: 10px;
                    border: 3px solid transparent;
                    border-right: 3px solid #ff0080;
                    border-radius: 50%;
                    animation: loaderSpin 1.5s linear infinite reverse;
                "></div>
                <div style="
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    top: 20px;
                    left: 20px;
                    background: #00ffff;
                    border-radius: 50%;
                    animation: loaderPulse 0.8s ease-in-out infinite alternate;
                "></div>
            </div>
        `;
        
        // Add loader animations via CSS
        if (!document.getElementById('loaderStyles')) {
            const style = document.createElement('style');
            style.id = 'loaderStyles';
            style.textContent = `
                @keyframes loaderRotate {
                    0% { transform: rotateX(0deg) rotateY(0deg); }
                    100% { transform: rotateX(360deg) rotateY(360deg); }
                }
                @keyframes loaderSpin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                @keyframes loaderPulse {
                    0% { transform: scale(1); opacity: 1; }
                    100% { transform: scale(1.2); opacity: 0.7; }
                }
            `;
            document.head.appendChild(style);
        }
    }

    startLoadingSequence() {
        const progressBar = document.getElementById('progressBar');
        const loadingItems = [
            'Loading Three.js Engine...',
            'Initializing WebGL Context...',
            'Creating 3D Scenes...',
            'Loading Shaders...',
            'Setting up Particle Systems...',
            'Preparing Interactive Elements...',
            'Optimizing Performance...',
            'Ready to Experience...'
        ];

        let currentStep = 0;
        const stepDuration = 300; // Reduced from 500ms to make it faster

        const loadStep = () => {
            if (currentStep < loadingItems.length) {
                this.loadingProgress = ((currentStep + 1) / loadingItems.length) * 100;
                
                if (progressBar) {
                    progressBar.style.width = `${this.loadingProgress}%`;
                }
                
                // Update loading text
                const subtitle = document.querySelector('.loading-subtitle');
                if (subtitle) {
                    subtitle.textContent = loadingItems[currentStep];
                }
                
                currentStep++;
                setTimeout(loadStep, stepDuration);
            } else {
                // Loading complete
                setTimeout(() => {
                    this.completeLoading();
                }, 500);
            }
        };

        // Start loading after a brief delay
        setTimeout(loadStep, 500);
    }

    completeLoading() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('fade-out');
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                this.isLoading = false;
                
                // Initialize 3D scenes after loading completes
                this.init3DScenes();
                this.initScrollAnimations();
                this.startAnimations();
                
                console.log('3D Portfolio loaded successfully!');
            }, 1000);
        }
    }

    setupEventListeners() {
        // Mouse movement for parallax
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });

        // WASD Controls
        const keys = {};
        document.addEventListener('keydown', (e) => {
            keys[e.code] = true;
            this.handleKeyboard(keys);
        });
        
        document.addEventListener('keyup', (e) => {
            keys[e.code] = false;
        });

        // Window resize
        window.addEventListener('resize', () => {
            this.onWindowResize();
        });

        // Scroll handling
        this.lastScrollTime = 0;
        window.addEventListener('scroll', () => {
            const now = Date.now();
            if (now - this.lastScrollTime > 16) { // ~60fps
                this.handleScroll();
                this.lastScrollTime = now;
            }
        });
    }

    handleKeyboard(keys) {
        if (!this.cameras.hero) return;

        const camera = this.cameras.hero;
        const speed = 0.1;

        if (keys['KeyW']) camera.position.z -= speed;
        if (keys['KeyS']) camera.position.z += speed;
        if (keys['KeyA']) camera.position.x -= speed;
        if (keys['KeyD']) camera.position.x += speed;

        // Add subtle camera shake for movement feedback
        if (keys['KeyW'] || keys['KeyS'] || keys['KeyA'] || keys['KeyD']) {
            camera.position.y += (Math.random() - 0.5) * 0.02;
        }
    }

    initCursorFollower() {
        const cursor = document.getElementById('cursorFollower');
        if (!cursor) return;

        document.addEventListener('mousemove', (e) => {
            if (typeof gsap !== 'undefined') {
                gsap.to(cursor, {
                    duration: 0.3,
                    x: e.clientX,
                    y: e.clientY,
                    ease: "power2.out"
                });
            } else {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        });

        // Add cursor interactions
        const interactiveElements = document.querySelectorAll('button, a, .nav-item-3d, .project-card-3d');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
            });
        });
    }

    initNavigation() {
        const navItems = document.querySelectorAll('.nav-item-3d');
        const audioToggle = document.getElementById('audioToggle');

        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = item.getAttribute('data-section');
                this.scrollToSection(targetSection);
                
                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
            });
        });

        if (audioToggle) {
            audioToggle.addEventListener('click', () => {
                this.audioEnabled = !this.audioEnabled;
                audioToggle.querySelector('.control-text').textContent = 
                    `AUDIO: ${this.audioEnabled ? 'ON' : 'OFF'}`;
            });
        }
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        if (typeof gsap !== 'undefined') {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: section,
                    offsetY: 80
                },
                ease: "power2.inOut"
            });
        } else {
            // Fallback smooth scroll
            section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    init3DScenes() {
        // Check if Three.js is available
        if (typeof THREE === 'undefined') {
            console.warn('Three.js not loaded, skipping 3D scene initialization');
            return;
        }

        try {
            // Initialize Hero Scene
            this.initHeroScene();
            
            // Initialize other scenes
            this.initAboutScene();
            this.initProjectsScene();
            this.initSkillsScene();
            this.initContactScene();
            
            // Start render loop
            this.animate();
        } catch (error) {
            console.warn('Error initializing 3D scenes:', error);
        }
    }

    initHeroScene() {
        const canvas = document.getElementById('heroCanvas');
        if (!canvas || typeof THREE === 'undefined') return;

        try {
            // Scene setup
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            
            // Store references
            this.scenes.hero = scene;
            this.cameras.hero = camera;
            this.renderers.hero = renderer;

            // Create cyberpunk environment
            this.createHeroEnvironment(scene);
            
            // Position camera
            camera.position.set(0, 0, 5);
        } catch (error) {
            console.warn('Error initializing hero scene:', error);
        }
    }

    createHeroEnvironment(scene) {
        if (typeof THREE === 'undefined') return;

        try {
            // Ambient lighting
            const ambientLight = new THREE.AmbientLight(0x00d4ff, 0.3);
            scene.add(ambientLight);

            // Neon lights
            const neonLight1 = new THREE.PointLight(0x00d4ff, 2, 10);
            neonLight1.position.set(-5, 3, 2);
            scene.add(neonLight1);

            const neonLight2 = new THREE.PointLight(0xff0080, 2, 10);
            neonLight2.position.set(5, -3, 2);
            scene.add(neonLight2);

            // Floating geometric shapes
            const shapes = [];
            for (let i = 0; i < 15; i++) {
                const geometry = this.getRandomGeometry();
                const material = new THREE.MeshPhongMaterial({
                    color: this.getRandomNeonColor(),
                    transparent: true,
                    opacity: 0.7,
                    wireframe: Math.random() > 0.5
                });
                
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 20
                );
                mesh.rotation.set(
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI
                );
                
                shapes.push(mesh);
                scene.add(mesh);
            }

            // Store shapes for animation
            this.heroShapes = shapes;

            // Particle system
            this.createParticleSystem(scene);
        } catch (error) {
            console.warn('Error creating hero environment:', error);
        }
    }

    getRandomGeometry() {
        if (typeof THREE === 'undefined') return null;

        const geometries = [
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.SphereGeometry(0.5, 8, 6),
            new THREE.TetrahedronGeometry(0.7),
            new THREE.OctahedronGeometry(0.7),
            new THREE.TorusGeometry(0.5, 0.2, 8, 16)
        ];
        return geometries[Math.floor(Math.random() * geometries.length)];
    }

    getRandomNeonColor() {
        const colors = [0x00d4ff, 0xff0080, 0x00ffff, 0x9d4edd, 0x00ff00];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    createParticleSystem(scene) {
        if (typeof THREE === 'undefined') return;

        try {
            const particleCount = 200;
            const particles = new THREE.BufferGeometry();
            const particlePositions = new Float32Array(particleCount * 3);
            const particleColors = new Float32Array(particleCount * 3);

            for (let i = 0; i < particleCount * 3; i += 3) {
                particlePositions[i] = (Math.random() - 0.5) * 50;
                particlePositions[i + 1] = (Math.random() - 0.5) * 50;
                particlePositions[i + 2] = (Math.random() - 0.5) * 50;

                const color = new THREE.Color(this.getRandomNeonColor());
                particleColors[i] = color.r;
                particleColors[i + 1] = color.g;
                particleColors[i + 2] = color.b;
            }

            particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
            particles.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

            const particleMaterial = new THREE.PointsMaterial({
                size: 0.02,
                vertexColors: true,
                transparent: true,
                opacity: 0.8
            });

            const particleSystem = new THREE.Points(particles, particleMaterial);
            scene.add(particleSystem);
            
            this.heroParticles = particleSystem;
        } catch (error) {
            console.warn('Error creating particle system:', error);
        }
    }

    initAboutScene() {
        const canvas = document.getElementById('aboutCanvas');
        if (!canvas || typeof THREE === 'undefined') return;

        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            
            this.scenes.about = scene;
            this.cameras.about = camera;
            this.renderers.about = renderer;

            // Create about environment
            this.createAboutEnvironment(scene);
            camera.position.set(0, 0, 3);
        } catch (error) {
            console.warn('Error initializing about scene:', error);
        }
    }

    createAboutEnvironment(scene) {
        if (typeof THREE === 'undefined') return;

        try {
            // Profile visualization - abstract representation
            const profileGeometry = new THREE.SphereGeometry(1, 32, 32);
            const profileMaterial = new THREE.MeshPhongMaterial({
                color: 0x00d4ff,
                transparent: true,
                opacity: 0.3,
                wireframe: true
            });
            
            const profileMesh = new THREE.Mesh(profileGeometry, profileMaterial);
            scene.add(profileMesh);
            this.aboutProfile = profileMesh;

            // Lighting
            const light = new THREE.PointLight(0x00ffff, 1, 10);
            light.position.set(2, 2, 2);
            scene.add(light);

            const ambientLight = new THREE.AmbientLight(0x00d4ff, 0.4);
            scene.add(ambientLight);
        } catch (error) {
            console.warn('Error creating about environment:', error);
        }
    }

    initProjectsScene() {
        const canvas = document.getElementById('projectsCanvas');
        if (!canvas || typeof THREE === 'undefined') return;

        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            
            this.scenes.projects = scene;
            this.cameras.projects = camera;
            this.renderers.projects = renderer;

            this.createProjectsEnvironment(scene);
            camera.position.set(0, 0, 5);
        } catch (error) {
            console.warn('Error initializing projects scene:', error);
        }
    }

    createProjectsEnvironment(scene) {
        if (typeof THREE === 'undefined') return;

        try {
            // Project showcase environment
            const projectCubes = [];
            
            for (let i = 0; i < 6; i++) {
                const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
                const material = new THREE.MeshPhongMaterial({
                    color: this.getRandomNeonColor(),
                    transparent: true,
                    opacity: 0.6
                });
                
                const cube = new THREE.Mesh(geometry, material);
                cube.position.set(
                    (i % 3 - 1) * 2,
                    Math.floor(i / 3) * 2 - 0.5,
                    0
                );
                
                projectCubes.push(cube);
                scene.add(cube);
            }
            
            this.projectCubes = projectCubes;

            // Lighting
            const light = new THREE.PointLight(0xff0080, 1, 15);
            light.position.set(0, 0, 5);
            scene.add(light);
        } catch (error) {
            console.warn('Error creating projects environment:', error);
        }
    }

    initSkillsScene() {
        const canvas = document.getElementById('skillsCanvas');
        if (!canvas || typeof THREE === 'undefined') return;

        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            
            this.scenes.skills = scene;
            this.cameras.skills = camera;
            this.renderers.skills = renderer;

            this.createSkillsEnvironment(scene);
            camera.position.set(0, 0, 3);
        } catch (error) {
            console.warn('Error initializing skills scene:', error);
        }
    }

    createSkillsEnvironment(scene) {
        if (typeof THREE === 'undefined') return;

        try {
            // Skills visualization - interconnected nodes
            const skillNodes = [];
            const connections = [];

            // Create skill nodes
            for (let i = 0; i < 12; i++) {
                const geometry = new THREE.SphereGeometry(0.1, 8, 8);
                const material = new THREE.MeshPhongMaterial({
                    color: this.getRandomNeonColor(),
                    emissive: new THREE.Color(this.getRandomNeonColor()),
                    emissiveIntensity: 0.2
                });
                
                const node = new THREE.Mesh(geometry, material);
                const radius = 1.5;
                const angle = (i / 12) * Math.PI * 2;
                
                node.position.set(
                    Math.cos(angle) * radius,
                    Math.sin(angle) * radius,
                    (Math.random() - 0.5) * 0.5
                );
                
                skillNodes.push(node);
                scene.add(node);
            }

            // Create connections between nodes
            for (let i = 0; i < skillNodes.length; i++) {
                for (let j = i + 1; j < skillNodes.length; j++) {
                    if (Math.random() > 0.7) {
                        const points = [
                            skillNodes[i].position,
                            skillNodes[j].position
                        ];
                        
                        const geometry = new THREE.BufferGeometry().setFromPoints(points);
                        const material = new THREE.LineBasicMaterial({
                            color: 0x00ffff,
                            transparent: true,
                            opacity: 0.3
                        });
                        
                        const line = new THREE.Line(geometry, material);
                        connections.push(line);
                        scene.add(line);
                    }
                }
            }

            this.skillNodes = skillNodes;
            this.skillConnections = connections;

            // Lighting
            const ambientLight = new THREE.AmbientLight(0x00d4ff, 0.6);
            scene.add(ambientLight);
        } catch (error) {
            console.warn('Error creating skills environment:', error);
        }
    }

    initContactScene() {
        const canvas = document.getElementById('contactCanvas');
        if (!canvas || typeof THREE === 'undefined') return;

        try {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
            
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            
            this.scenes.contact = scene;
            this.cameras.contact = camera;
            this.renderers.contact = renderer;

            this.createContactEnvironment(scene);
            camera.position.set(0, 0, 3);
        } catch (error) {
            console.warn('Error initializing contact scene:', error);
        }
    }

    createContactEnvironment(scene) {
        if (typeof THREE === 'undefined') return;

        try {
            // Communication waves
            const waves = [];
            
            for (let i = 0; i < 5; i++) {
                const geometry = new THREE.RingGeometry(0.5 + i * 0.3, 0.6 + i * 0.3, 32);
                const material = new THREE.MeshBasicMaterial({
                    color: 0x00d4ff,
                    transparent: true,
                    opacity: 0.1 + i * 0.05,
                    side: THREE.DoubleSide
                });
                
                const wave = new THREE.Mesh(geometry, material);
                wave.position.z = -i * 0.1;
                waves.push(wave);
                scene.add(wave);
            }
            
            this.contactWaves = waves;

            // Central communication hub
            const hubGeometry = new THREE.SphereGeometry(0.2, 16, 16);
            const hubMaterial = new THREE.MeshPhongMaterial({
                color: 0xff0080,
                emissive: 0xff0080,
                emissiveIntensity: 0.3
            });
            
            const hub = new THREE.Mesh(hubGeometry, hubMaterial);
            scene.add(hub);
            this.contactHub = hub;

            // Lighting
            const light = new THREE.PointLight(0x00ffff, 1, 10);
            light.position.set(0, 0, 2);
            scene.add(light);
        } catch (error) {
            console.warn('Error creating contact environment:', error);
        }
    }

    animate() {
        this.updateAnimations();
        this.render();
        requestAnimationFrame(() => this.animate());
    }

    updateAnimations() {
        if (typeof THREE === 'undefined') return;

        const time = Date.now() * 0.001;

        // Hero animations
        if (this.heroShapes) {
            this.heroShapes.forEach((shape, index) => {
                shape.rotation.x += 0.01 * (index % 3 + 1);
                shape.rotation.y += 0.008 * (index % 4 + 1);
                shape.position.y += Math.sin(time + index) * 0.002;
            });
        }

        if (this.heroParticles) {
            this.heroParticles.rotation.y += 0.002;
        }

        // Camera parallax based on mouse
        if (this.cameras.hero) {
            this.cameras.hero.position.x += (this.mouse.x * 0.5 - this.cameras.hero.position.x) * 0.05;
            this.cameras.hero.position.y += (this.mouse.y * 0.5 - this.cameras.hero.position.y) * 0.05;
        }

        // About scene animations
        if (this.aboutProfile) {
            this.aboutProfile.rotation.y += 0.01;
            this.aboutProfile.scale.setScalar(1 + Math.sin(time) * 0.1);
        }

        // Projects scene animations
        if (this.projectCubes) {
            this.projectCubes.forEach((cube, index) => {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.008;
                cube.position.y += Math.sin(time + index * 0.5) * 0.001;
            });
        }

        // Skills scene animations
        if (this.skillNodes) {
            this.skillNodes.forEach((node, index) => {
                node.position.z = Math.sin(time + index * 0.3) * 0.1;
                node.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.1);
            });
        }

        // Contact scene animations
        if (this.contactWaves) {
            this.contactWaves.forEach((wave, index) => {
                wave.rotation.z += 0.005 + index * 0.001;
                wave.material.opacity = 0.1 + Math.sin(time + index * 0.5) * 0.05;
            });
        }

        if (this.contactHub) {
            this.contactHub.scale.setScalar(1 + Math.sin(time * 3) * 0.2);
        }
    }

    render() {
        Object.keys(this.renderers).forEach(key => {
            if (this.renderers[key] && this.scenes[key] && this.cameras[key]) {
                this.renderers[key].render(this.scenes[key], this.cameras[key]);
            }
        });
    }

    onWindowResize() {
        if (typeof THREE === 'undefined') return;

        // Update hero scene
        if (this.cameras.hero && this.renderers.hero) {
            this.cameras.hero.aspect = window.innerWidth / window.innerHeight;
            this.cameras.hero.updateProjectionMatrix();
            this.renderers.hero.setSize(window.innerWidth, window.innerHeight);
        }

        // Update other scenes
        Object.keys(this.renderers).forEach(key => {
            if (key !== 'hero' && this.cameras[key] && this.renderers[key]) {
                const canvas = this.renderers[key].domElement;
                if (canvas && canvas.parentElement) {
                    const rect = canvas.parentElement.getBoundingClientRect();
                    this.cameras[key].aspect = rect.width / rect.height;
                    this.cameras[key].updateProjectionMatrix();
                    this.renderers[key].setSize(rect.width, rect.height);
                }
            }
        });
    }

    handleScroll() {
        const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < windowHeight && rect.bottom > 0;
                
                if (isVisible && this.currentSection !== section) {
                    this.currentSection = section;
                    this.updateActiveNavItem(section);
                }
            }
        });
    }

    updateActiveNavItem(section) {
        const navItems = document.querySelectorAll('.nav-item-3d');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === section) {
                item.classList.add('active');
            }
        });
    }

    initScrollAnimations() {
        if (typeof gsap === 'undefined') return;

        // GSAP ScrollTrigger animations
        gsap.utils.toArray('.section-3d').forEach(section => {
            gsap.fromTo(section.querySelector('.section-title-3d'), 
                { 
                    y: 100, 
                    opacity: 0 
                }, 
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Hero title animation
        gsap.fromTo('.hero-title-3d .title-line', 
            { 
                y: 100, 
                opacity: 0 
            }, 
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out",
                delay: 0.5
            }
        );
    }

    startAnimations() {
        if (typeof gsap === 'undefined') {
            // Fallback CSS animations
            const heroElements = document.querySelectorAll('.hero-tagline-3d, .hero-subtitle-3d, .hero-actions');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('fade-in');
                }, (index + 1) * 200);
            });
            return;
        }

        // Trigger hero animations
        gsap.fromTo('.hero-tagline-3d, .hero-subtitle-3d', 
            { 
                y: 50, 
                opacity: 0 
            }, 
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                delay: 1
            }
        );

        gsap.fromTo('.hero-actions', 
            { 
                y: 50, 
                opacity: 0 
            }, 
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: 1.5
            }
        );
    }

    loadProjects() {
        const projectsGrid = document.getElementById('projectsGrid3D');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        this.portfolioData.projects.forEach(project => {
            const projectCard = this.createProjectCard3D(project);
            projectsGrid.appendChild(projectCard);
        });
    }

    createProjectCard3D(project) {
        const card = document.createElement('div');
        card.className = 'project-card-3d';
        card.setAttribute('data-project-id', project.id);

        card.innerHTML = `
            <div class="project-image-3d">
                ${project.featured ? '<div class="featured-badge-3d">FEATURED</div>' : ''}
                <div class="project-overlay">
                    <span style="color: #00d4ff; font-weight: bold;">EXPLORE PROJECT</span>
                </div>
            </div>
            <div class="project-content-3d">
                <h3 class="project-title-3d">${project.title}</h3>
                <p class="project-description-3d">${project.shortDescription}</p>
                <div class="project-tech-3d">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="tech-tag-3d">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            this.openProjectModal3D(project);
        });

        return card;
    }

    loadSkills() {
        const skillCategories = [
            { containerId: 'skills3D', skills: this.portfolioData.skills['3d_graphics'] },
            { containerId: 'skillsWeb', skills: this.portfolioData.skills.web_development },
            { containerId: 'skillsCreative', skills: this.portfolioData.skills.creative_tools },
            { containerId: 'skillsSpecial', skills: this.portfolioData.skills.specializations }
        ];

        skillCategories.forEach(category => {
            this.loadSkillCategory3D(category.containerId, category.skills);
        });

        // Animate skill bars when visible
        if (typeof gsap !== 'undefined') {
            gsap.utils.toArray('.skill-progress-3d').forEach(bar => {
                gsap.fromTo(bar, 
                    { width: '0%' }, 
                    {
                        width: bar.getAttribute('data-level') + '%',
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: bar,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }
    }

    loadSkillCategory3D(containerId, skills) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item-3d';
            
            skillItem.innerHTML = `
                <div class="skill-name-3d">${skill.icon} ${skill.name}</div>
                <div class="skill-level-3d">${skill.level}%</div>
                <div class="skill-bar-3d">
                    <div class="skill-progress-3d" data-level="${skill.level}"></div>
                </div>
            `;
            
            container.appendChild(skillItem);
        });
    }

    initContactForm() {
        const form = document.getElementById('contactForm3D');
        if (!form) return;

        // Floating label effect
        const inputs = form.querySelectorAll('.form-input-3d');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactSubmit(form);
        });
    }

    handleContactSubmit(form) {
        const submitBtn = form.querySelector('.submit-btn-3d');
        const originalText = submitBtn.querySelector('.btn-text').textContent;
        
        // Animate button
        if (typeof gsap !== 'undefined') {
            gsap.to(submitBtn, { scale: 0.95, duration: 0.1 });
            gsap.to(submitBtn, { scale: 1, duration: 0.1, delay: 0.1 });
        }
        
        submitBtn.querySelector('.btn-text').textContent = 'SENDING...';
        submitBtn.disabled = true;

        // Simulate sending
        setTimeout(() => {
            submitBtn.querySelector('.btn-text').textContent = 'MESSAGE SENT!';
            submitBtn.style.background = 'linear-gradient(135deg, #00ff00, #00d4ff)';
            
            setTimeout(() => {
                form.reset();
                submitBtn.querySelector('.btn-text').textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    }

    initModal() {
        const modal = document.getElementById('projectModal3D');
        const closeBtn = document.getElementById('modalClose3D');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeProjectModal3D();
            });
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-overlay-3d')) {
                    this.closeProjectModal3D();
                }
            });
        }

        // ESC key to close modal
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                this.closeProjectModal3D();
            }
        });
    }

    openProjectModal3D(project) {
        const modal = document.getElementById('projectModal3D');
        const modalBody = document.getElementById('modalBody3D');
        
        if (!modal || !modalBody) return;

        modalBody.innerHTML = `
            <div style="margin-bottom: 2rem;">
                <div style="height: 300px; background: linear-gradient(45deg, #001122, #002244); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
                    <span style="color: #00d4ff; font-size: 2rem;">${project.title}</span>
                </div>
                <h2 style="color: #00d4ff; font-size: 2.5rem; margin-bottom: 1rem;">${project.title}</h2>
                <p style="color: rgba(255,255,255,0.8); font-size: 1.1rem; line-height: 1.7; margin-bottom: 2rem;">${project.fullDescription}</p>
                
                <div style="margin-bottom: 2rem;">
                    <h3 style="color: #ff0080; margin-bottom: 1rem;">Technologies Used:</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.technologies.map(tech => `<span class="tech-tag-3d">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem;">
                    <a href="${project.githubUrl}" target="_blank" class="cta-btn-3d" style="flex: 1; text-align: center; padding: 1rem; text-decoration: none;">
                        <span class="btn-text">VIEW CODE</span>
                    </a>
                    <a href="${project.liveUrl}" target="_blank" class="contact-btn-3d" style="flex: 1; text-align: center; padding: 1rem; text-decoration: none;">
                        <span class="btn-text">LIVE DEMO</span>
                    </a>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
        requestAnimationFrame(() => {
            modal.classList.add('active');
        });
    }

    closeProjectModal3D() {
        const modal = document.getElementById('projectModal3D');
        if (!modal) return;

        modal.classList.remove('active');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

// Initialize the 3D Portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded, initializing 3D Portfolio...');
    new Portfolio3D();
});

// Handle page load
window.addEventListener('load', () => {
    console.log('Window loaded, 3D Portfolio should be ready!');
});
