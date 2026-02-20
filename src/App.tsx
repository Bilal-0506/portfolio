import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Sparkles,
  Zap,
  Globe,
  Database,
  Layers,
  Cpu,
  Gamepad2,
  Trophy,
  FileCode,
  Atom,
  Server
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Scroll reveal component
function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const skills = [
    { name: 'React Native', icon: <Smartphone className="w-5 h-5" />, category: 'Mobile' },
    { name: 'React JS', icon: <Atom className="w-5 h-5" />, category: 'Frontend' },
    { name: 'Next.js', icon: <Server className="w-5 h-5" />, category: 'Framework' },
    { name: 'TypeScript', icon: <FileCode className="w-5 h-5" />, category: 'Language' },
    { name: 'JavaScript', icon: <Code2 className="w-5 h-5" />, category: 'Language' },
    { name: 'Expo', icon: <Zap className="w-5 h-5" />, category: 'Framework' },
    { name: 'Redux Toolkit', icon: <Layers className="w-5 h-5" />, category: 'State' },
    { name: 'Firebase', icon: <Database className="w-5 h-5" />, category: 'Backend' },
    { name: 'Stripe', icon: <CreditCardIcon className="w-5 h-5" />, category: 'Payment' },
    { name: 'Google Maps', icon: <MapPin className="w-5 h-5" />, category: 'API' },
    { name: 'AWS S3', icon: <CloudIcon className="w-5 h-5" />, category: 'Cloud' },
    { name: 'Socket.IO', icon: <Globe className="w-5 h-5" />, category: 'Real-time' },
    { name: 'Xcode', icon: <Cpu className="w-5 h-5" />, category: 'Tools' },
    { name: 'Android Studio', icon: <Smartphone className="w-5 h-5" />, category: 'Tools' },
    { name: 'Git', icon: <GitBranchIcon className="w-5 h-5" />, category: 'Tools' },
  ];

  const experiences = [
    {
      company: 'Txend Inc.',
      role: 'React Native Developer',
      period: 'May 2024 – Present',
      location: 'Remote',
      highlights: [
        'Collaborating with an international, cross-functional team to develop global-scale mobile products',
        'Implemented audio transcription pipeline with upload/stream, chunking, and sync functionality',
        'Integrated advanced text and media editing features for enhanced user interaction',
        'Developed high-quality voice recording and playback for iOS and Android',
        'Implemented user analytics tracking using Matomo and PostHog',
      ],
      tech: ['React Native', 'TypeScript', 'Audio Recorder', 'Matomo', 'PostHog'],
    },
    {
      company: 'TxDynamics',
      role: 'React Native Developer',
      period: 'Jan 2023 – May 2024',
      location: 'Remote',
      highlights: [
        'Delivered scalable and high-performance mobile applications',
        'Managed UI design implementation and integrated REST APIs',
        'Handled real-time communication using Socket.IO',
        'Monitored user activity through Geolocation and Google Maps integration',
        'Configured push notifications via Firebase Cloud Messaging',
        'Implemented social authentication and payment gateways',
      ],
      tech: ['React Native', 'React JS', 'Socket.IO', 'Google Maps', 'Stripe'],
    },
    {
      company: 'Dominion Inc.',
      role: 'React Native Developer',
      period: 'Nov 2021 – Jan 2023',
      location: 'Remote',
      highlights: [
        'Integrated native Android and iOS modules within React Native (Expo)',
        'Utilized WatermelonDB for offline data storage and synchronization',
        'Applied Turndown and Markdown for rich text content rendering',
        'Pixel-perfect prototyping according to market standards',
        'Implemented various navigation patterns',
      ],
      tech: ['React Native', 'Expo', 'WatermelonDB', 'Navigation', 'REST APIs'],
    },
  ];

  const projects = [
    {
      name: 'MEDWRITE',
      description: 'AI-powered clinical assistant that automates medical documentation. Helps health professionals generate discharge letters, patient summaries, and referrals in real-time.',
      features: [
        'Voice/text input with rich text editors',
        'WatermelonDB for offline storage',
        'Real-time sync with backend',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.ai.medwrite.ltd',
      icon: <Sparkles className="w-8 h-8" />,
      color: 'from-emerald-400 to-cyan-400',
    },
    {
      name: 'DriveBuddyz',
      description: 'Safe ride-sharing application with dedicated drivers for secure and reliable journeys. Features real-time tracking and effortless booking.',
      features: [
        'Real-time ride tracking',
        'Dedicated driver assignment',
        'Secure payment integration',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.drivebuddyz',
      icon: <MapPin className="w-8 h-8" />,
      color: 'from-blue-400 to-purple-400',
    },
    {
      name: 'Les Femmes',
      description: 'UAE\'s first designer resale app for women. Buy and sell luxury fashion with authentication, curation, and global shipping.',
      features: [
        'Item authentication system',
        'Real-time chat with buyers/sellers',
        'Global shipping and tracking',
      ],
      link: 'https://play.google.com/store/apps/details?id=com.lesfemmes',
      icon: <ShoppingBagIcon className="w-8 h-8" />,
      color: 'from-pink-400 to-rose-400',
    },
    {
      name: 'ProSearch',
      description: 'Platform connecting users with service providers. Facilitates seamless service purchases and empowers providers to sell expertise.',
      features: [
        'User-service provider matching',
        'Service listing and discovery',
        'Seamless transaction processing',
      ],
      link: 'https://apps.apple.com/us/app/prosearch/id6458977843',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'from-amber-400 to-orange-400',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Minhaj University',
      period: '2016 - 2021',
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      degree: 'Pre-Engineering',
      institution: 'Government Science College',
      period: '2014 - 2016',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const diplomas = ['Web Designing', 'MS Office', 'Computer Repairing'];

  const languages = [
    { name: 'English', level: 'Professional' },
    // { name: 'Urdu', level: 'Native' },
    // { name: 'Punjabi', level: 'Native' },
  ];

  const hobbies = [
    { name: 'Badminton', icon: <Trophy className="w-5 h-5" /> },
    { name: 'PC Gaming', icon: <Gamepad2 className="w-5 h-5" /> },
    { name: 'Table Tennis', icon: <Trophy className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              {/* <span className="font-bold text-lg hidden sm:block">MB</span> */}
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button 
              variant="default" 
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              onClick={() => window.open('mailto:bmajeed1995@gmail.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">5+ Years Experience</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">Muhammad Bilal</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            React Native Developer
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Building cross-platform mobile applications with <span className="text-cyan-400">React Native</span>, <span className="text-blue-400">React JS</span>, and <span className="text-purple-400">Next.js</span>. 
            Specialized in creating smooth, reliable user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 glow-sm"
              onClick={() => scrollToSection('projects')}
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/20 hover:bg-white/5"
              onClick={() => window.open('https://www.linkedin.com/in/bilal-majeed-13b425136/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Pakistan</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>bmajeed1995@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+92 302-4879017</span>
            </div>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <Badge variant="secondary" className="mb-4">About Me</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Passionate about creating <span className="text-gradient">exceptional mobile experiences</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                React Native Developer with 5 years of experience building and maintaining cross-platform 
                mobile applications using both Expo and bare workflows. Proficient in <span className="text-cyan-400">TypeScript</span>, <span className="text-blue-400">React JS</span>, and <span className="text-purple-400">Next.js</span>.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Skilled in integrating native modules, debugging complex issues, and optimizing app 
                performance across Android and iOS. Focused on writing clean, maintainable code.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl glass hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-gradient mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
                <div className="text-center p-4 rounded-xl glass hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-gradient mb-1">4+</div>
                  <div className="text-sm text-muted-foreground">Apps Built</div>
                </div>
                <div className="text-center p-4 rounded-xl glass hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-gradient mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Companies</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass rounded-3xl p-8">
                <h3 className="text-xl font-semibold mb-6">Languages & Hobbies</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {languages.map((lang) => (
                        <Badge key={lang.name} variant="secondary" className="px-3 py-1">
                          {lang.name} - {lang.level}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Hobbies</h4>
                    <div className="flex flex-wrap gap-3">
                      {hobbies.map((hobby) => (
                        <div key={hobby.name} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                          {hobby.icon}
                          <span className="text-sm">{hobby.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-3">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {diplomas.map((diploma) => (
                        <Badge key={diploma} variant="outline" className="border-cyan-500/30 text-cyan-400">
                          {diploma}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Expertise</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern mobile and web development technologies
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} delay={index * 50}>
                <Card className="h-full bg-card/50 border-border/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                      <div className="text-cyan-400">{skill.icon}</div>
                    </div>
                    <h3 className="font-semibold mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300} className="mt-12">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-6 text-center">Additional Expertise</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['In-App Purchases', 'Deep Linking', 'Audio Player', 'Background Service', 'i18n & RTL', 'Google Calendar API', 'WordPress', 'Reanimated', 'REST APIs'].map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Career</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional journey in mobile application development
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 150}>
                <Card className="glass border-border/50 overflow-hidden hover:border-cyan-500/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Briefcase className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.company}</h3>
                            <p className="text-cyan-400">{exp.role}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 ml-15">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>

                        <ul className="space-y-2 ml-15">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:w-64">
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs border-white/10">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mobile applications built with React Native
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ScrollReveal key={project.name} delay={index * 100}>
                <Card className="h-full glass border-border/50 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group flex flex-col">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className={`h-32 bg-gradient-to-br ${project.color} relative overflow-hidden flex-shrink-0`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center">
                          <div className="text-white">{project.icon}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {project.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Zap className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-white/20 hover:bg-white/5 mt-auto"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Store
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Background</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.degree} delay={index * 100}>
                <Card className="h-full glass border-border/50 hover:border-cyan-500/30 transition-all">
                  <CardContent className="p-6 h-full">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <div className="text-cyan-400">{edu.icon}</div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{edu.degree}</h3>
                        <p className="text-cyan-400 text-sm mb-1">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm">{edu.period}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <ScrollReveal>
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's work <span className="text-gradient">together</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                onClick={() => window.open('mailto:bmajeed1995@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 hover:bg-white/5"
                onClick={() => window.open('https://www.linkedin.com/in/bilal-majeed-13b425136/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 hover:bg-white/5"
                onClick={() => window.open('tel:+923024879017', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Me
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass rounded-2xl p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">bmajeed1995@gmail.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+92 302-4879017</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Pakistan</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">Muhammad Bilal</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Muhammad Bilal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => window.open('https://www.linkedin.com/in/bilal-majeed-13b425136/', '_blank')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => window.open('mailto:bmajeed1995@gmail.com', '_blank')}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Custom Icons
function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9c-1.7 0-3-1.3-3-3s1.3-3 3-3h.8c.5-2.3 2.5-4 4.9-4 2.7 0 4.9 2.2 4.9 4.9v.1c1.7 0 3 1.3 3 3s-1.3 3-3 3z" />
    </svg>
  );
}

function GitBranchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default App;