import React, { useState, useEffect } from 'react';

interface ChatMessage {
  type: 'user' | 'ai';
  content: string;
  isLoading?: boolean;
}
import { ChevronRight, Target, TrendingUp, Brain, Users, MessageSquare, Download, ExternalLink, Heart, Mail, MapPin, Zap, Shield, Cog, LineChart, Award, Clock, Check, Activity, Linkedin, Globe, Settings, Send, Camera, GraduationCap, Building, Briefcase, Star, Code, Sparkles, ArrowRight, Play, Pause, AlertTriangle, Building2, TrendingDown, Cloud, Gamepad2, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const JoanPortfolio = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [automationCount, setAutomationCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(847);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    // Automation counter animation
    const timer = setInterval(() => {
      setAutomationCount(prev => prev < 300 ? prev + 5 : 300);
    }, 50);
    
    // Update time every minute
    const timeTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    // Simulate visitor counter
    const visitorTimer = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 30000);

    return () => {
      clearInterval(timer);
      clearInterval(timeTimer);
      clearInterval(visitorTimer);
    };
  }, []);

  const expertisePillars = [
    {
      title: "Intelligent Automation & AI Operations",
      icon: React.createElement(Brain, { className: "w-8 h-8" }),
      description: "Building predictive systems that surface problems 3-4 weeks before impact",
      achievements: ["300+ AI automations deployed", "98% accuracy in risk prediction", "40% reduction in escalations"]
    },
    {
      title: "Program & Workflow Optimization",
      icon: React.createElement(Cog, { className: "w-8 h-8" }),
      description: "Transforming reactive firefighting into proactive problem-solving",
      achievements: ["80% reduction in manual processes", "35% faster time-to-value", "Cross-functional alignment across 8+ teams"]
    },
    {
      title: "Scalable Customer Success Systems", 
      icon: React.createElement(TrendingUp, { className: "w-8 h-8" }),
      description: "Engineering customer journeys that drive 40-60% MRR growth",
      achievements: ["94% customer satisfaction", "60% MRR growth achieved", "30+ point retention improvements"]
    },
    {
      title: "Cross-Functional Team Leadership",
      icon: React.createElement(Users, { className: "w-8 h-8" }),
      description: "Leading distributed teams while fostering inclusive, high-performing cultures",
      achievements: ["8-person global team leadership", "Mentor to 6+ direct reports", "Inclusive environment builder"]
    },
    {
      title: "Risk Management & Strategic Planning",
      icon: React.createElement(Shield, { className: "w-8 h-8" }),
      description: "Leveraging Master's in Risk Management for enterprise-grade operational frameworks",
      achievements: ["Early warning systems", "100% compliance maintenance", "Strategic risk mitigation"]
    }
  ];

  const caseStudies = [
    {
      title: "Bitwave: Enterprise Crypto Operations at Scale",
      problem: "Managing $3M+ crypto portfolios across 200+ enterprise clients with overwhelming support escalations (40+ daily), manual reconciliation processes taking 8+ hours per portfolio, reactive incident management causing 15-minute average response times, and compliance risks across multiple jurisdictions causing operational chaos and customer dissatisfaction.",
      action: "Engineered comprehensive AI operations platform: (1) GPT-4 integration for intelligent ticket routing and automated responses, (2) Machine learning algorithms analyzing 500+ transaction patterns for anomaly detection, (3) Automated customer health scoring based on 15+ behavioral indicators including usage frequency, support tickets, and engagement metrics, (4) Predictive analytics for regulatory compliance across US/EU/APAC markets, (5) Enterprise workflow orchestration with Slack/Teams integration, (6) Real-time dashboards for executive visibility.",
      result: "Achieved 40% reduction in customer escalations (from 40+ to <25 daily), 98% prediction accuracy for operational issues detected 3-4 weeks in advance, 35% faster client onboarding (from 6 weeks to 4 weeks), $2M+ annual cost savings through automation, zero-downtime platform serving billions in transaction volume with proactive issue resolution before customer impact.",
      metrics: ["300+ Automations", "98% Prediction Accuracy", "$2M+ Cost Savings", "40% ↓ Escalations", "200+ Enterprise Clients"],
      technologies: ["GPT-4 Integration", "Machine Learning", "Slack/Teams APIs", "Blockchain Analytics", "Predictive Modeling", "Real-time Dashboards"],
      challenges: ["Complex crypto regulations across jurisdictions", "High-stakes financial data requiring 99.9% accuracy", "24/7 uptime requirements", "Multi-jurisdiction compliance", "Integration with 15+ blockchain networks"],
      teamStructure: "Led 8-person global operations team across 4 time zones including AI specialists, customer success managers, and compliance analysts",
      timeframe: "Ongoing transformation (2+ years)",
      scope: "Enterprise crypto accounting platform serving institutional clients",
      businessImpact: "$3M+ portfolio management, 200+ enterprise clients, billions in transaction volume",
      icon: Zap,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Lato Consulting: Cloud Spaces Growth Operations Excellence",
      problem: "Series A-B cloud services companies hitting revenue plateaus with 60%+ manual workflows, $15K+ customer acquisition costs, 25% annual churn rates, inability to scale operations without proportional headcount increases, and lack of expansion revenue identification across multiple verticals including cloud infrastructure, workspace solutions, and enterprise tools.",
      action: "Architected end-to-end automation ecosystems: (1) Churn prediction models using customer behavior analytics (login frequency, feature usage, support interactions), (2) Expansion revenue identification through usage pattern analysis and account scoring, (3) Automated onboarding sequences with 12-step nurture campaigns, (4) Intelligent lead scoring combining demographic and behavioral data, (5) Cross-functional workflow optimization connecting sales, marketing, and customer success teams, (6) Revenue forecasting with 90%+ accuracy.",
      result: "Delivered 40-60% MRR growth across client portfolio (average increase from $500K to $800K ARR), 50% reduction in manual operational overhead (from 40 hours/week to 20 hours/week per team), 30+ percentage point retention improvements (from 75% to 95%+ retention), automated expansion revenue programs generating $500K+ additional ARR per client, scalable growth without proportional hiring.",
      metrics: ["60% ↑ MRR Growth", "50% ↓ Manual Work", "$500K+ ARR Impact", "30+ Point Retention", "5+ Client Success Stories"],
      technologies: ["Salesforce Automation", "HubSpot Integration", "Zapier Workflows", "Customer.io", "Mixpanel Analytics", "Amplitude", "Segment"],
      challenges: ["Multi-client customization requirements", "Complex integration architectures", "Change management across organizations", "ROI measurement and attribution", "Cross-functional team alignment"],
      teamStructure: "Cross-functional collaboration with 5+ client teams, coordinating with CEOs, VP Sales, VP Marketing, and Customer Success leaders",
      timeframe: "10-month intensive engagement per client",
      scope: "Multi-client cloud services growth operations (infrastructure, workspace solutions, enterprise tools)",
      businessImpact: "Combined client portfolio growth exceeding $2.5M ARR increase",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Translayte: Global B2B Platform Transformation",
      problem: "International B2B SaaS platform suffering from fragmented customer experience across 12+ markets, 6-week average onboarding times causing 30% drop-off rate, reactive support model with 24-hour response times, declining feature adoption rates (35% utilization), and lack of product feedback loops in competitive translation technology space serving Fortune 500 companies.",
      action: "Built comprehensive customer lifecycle management system: (1) Automated multi-language onboarding flows with country-specific customization, (2) AI-powered health scoring considering usage patterns, engagement metrics, and market-specific behaviors, (3) Proactive intervention protocols with automated triggers, (4) Cross-cultural support optimization with 24/7 coverage, (5) Product feedback loop automation connecting customer insights to product roadmap, (6) Global account management workflows.",
      result: "Achieved 94% customer satisfaction scores (up from 78%), reduced onboarding time to 2.5 weeks (58% improvement), increased feature adoption by 65% (from 35% to 58% utilization), established automated product feedback collection driving 12+ feature improvements per quarter, enabled global scale operations supporting Fortune 500 expansion, 40% reduction in support response times.",
      metrics: ["94% Satisfaction", "58% ↓ Onboarding Time", "65% ↑ Feature Adoption", "12+ Features/Quarter", "Fortune 500 Scale"],
      technologies: ["Intercom Automation", "Amplitude Analytics", "Multi-language Workflows", "AI Health Scoring", "Global CRM", "Zendesk", "Salesforce"],
      challenges: ["Cross-cultural operations across 12+ markets", "Multiple time zones (24/7 coverage)", "Language barriers and localization", "Complex B2B workflows", "Fortune 500 compliance requirements"],
      teamStructure: "Managed international operations team across 6 time zones including regional customer success managers, technical specialists, and cultural liaisons",
      timeframe: "4+ years progressive impact and optimization",
      scope: "Global B2B SaaS operations serving Fortune 500 across 12+ markets",
      businessImpact: "Supported platform growth from $5M to $20M ARR with improved unit economics",
      icon: Globe,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Construction Procurement: Operations Excellence Foundation",
      problem: "Complex construction supply chain management involving concrete, scaffolding, and specialized equipment procurement with unpredictable delivery timelines (30% delays), vendor reliability issues causing project delays, cost optimization challenges with 15%+ budget overruns, and quality control inconsistencies in high-pressure project environments serving major infrastructure projects.",
      action: "Developed systematic procurement processes: (1) Vendor performance scoring system tracking delivery times, quality metrics, and cost competitiveness, (2) Predictive inventory management using historical data and project timeline analysis, (3) Cost optimization algorithms comparing multiple suppliers and identifying bulk purchase opportunities, (4) Quality assurance protocols with multi-stage inspection processes, (5) Risk mitigation strategies for supply chain disruptions including backup vendor networks.",
      result: "Consistently delivered projects on time and under budget through strategic procurement optimization, established vendor relationship management system improving delivery reliability by 40%, developed early warning systems for supply chain risks reducing project delays by 60%, created reusable processes adopted across multiple construction projects, achieved 10%+ cost savings through strategic sourcing.",
      metrics: ["On-Time Delivery", "Under Budget (10%+ Savings)", "40% ↑ Vendor Reliability", "60% ↓ Project Delays", "Systematic Process Creation"],
      technologies: ["Supply Chain Management Systems", "Vendor Performance Databases", "Cost Analysis Tools", "Project Management Software", "Risk Assessment Frameworks"],
      challenges: ["Unpredictable supply chains and weather dependencies", "Quality control across multiple vendors", "Budget constraints and cost pressure", "Timeline pressure from project stakeholders", "Regulatory compliance requirements"],
      teamStructure: "Coordinated with project managers, general contractors, specialized suppliers, and quality control inspectors",
      timeframe: "4 years in construction industry across multiple major projects",
      scope: "Large-scale construction procurement for infrastructure and commercial projects",
      businessImpact: "Managed procurement for projects totaling $50M+ in construction value",
      icon: Building2,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Lagos Market Research: Customer Intelligence Foundation",
      problem: "Traditional hardware sales approaches in Nigerian retail market lacked deep customer insights, with retailers making purchasing decisions based on limited product understanding, unclear ROI for technology investments, and sales cycles extending 6+ months due to trust and relationship gaps in competitive West African technology market.",
      action: "Pioneered direct customer research methodology: (1) Door-to-door interviews with iPad-based data collection system, (2) Comprehensive market analysis for hardware needs across different business segments, (3) Relationship building with decision makers at major retailers through consultative selling approach, (4) Development of customer-centric sales presentations with ROI calculations, (5) Creation of customer database tracking preferences, buying patterns, and decision-making processes.",
      result: "Successfully secured hardware contracts with Shoprite, Adidas, and other major Nigerian retailers totaling $200K+ in sales, established sustainable B2B relationships leading to repeat business, developed market intelligence database used for strategic planning, created foundation for customer-first business philosophy that drives current AI operations approach, achieved 40%+ conversion rate from prospect to customer.",
      metrics: ["$200K+ Sales Revenue", "Major Retail Partnerships", "40%+ Conversion Rate", "Customer-First Foundation", "Market Intelligence Database"],
      technologies: ["iPad Data Collection", "Customer Relationship Databases", "Market Analysis Tools", "Sales Presentation Software", "ROI Calculation Models"],
      challenges: ["Cultural navigation in diverse Nigerian market", "Trust building in technology-skeptical environment", "Complex retail decision hierarchies", "Technology adoption barriers", "Economic volatility and currency fluctuations"],
      teamStructure: "Individual contributor building market presence with support from regional distributors and technical specialists",
      timeframe: "Early career foundation (2+ years intensive market development)",
      scope: "Nigerian retail hardware market across Lagos, Abuja, and Port Harcourt",
      businessImpact: "Established market presence for hardware distribution company, contributing to 25%+ regional growth",
      icon: Target,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "AI Operations Innovation: Predictive Excellence Framework",
      problem: "Industry-wide reactive operations model causing unnecessary escalations, customer churn, and operational inefficiencies across technology companies, with lack of predictive capabilities, limited proactive problem-solving approaches, and inability to scale operations efficiently while maintaining quality and customer satisfaction.",
      action: "Developed proprietary predictive operations framework: (1) Machine learning models for pattern recognition analyzing customer behavior, system performance, and operational metrics, (2) Early warning systems for customer health combining usage data, support interactions, and engagement signals, (3) Automated intervention protocols with escalation paths and success tracking, (4) Cross-platform integration strategies connecting CRM, support, product analytics, and communication tools, (5) Scalable methodology documentation for replication across industries.",
      result: "Created reusable methodology that transforms reactive operations into predictive excellence, enabling 3-4 week advance problem identification with 85%+ accuracy, systematic approach to operational optimization reducing manual work by 50%+, scalable framework successfully implemented across 5+ organizations, measurable improvement in customer satisfaction and operational efficiency metrics.",
      metrics: ["3-4 Week Prediction Window", "85%+ Prediction Accuracy", "50%+ Manual Work Reduction", "5+ Organizations Implemented", "Cross-Industry Application"],
      technologies: ["Machine Learning Algorithms", "Predictive Analytics", "Cross-Platform APIs", "Automation Frameworks", "Health Scoring Systems", "Data Pipeline Architecture"],
      challenges: ["Model accuracy and false positive reduction", "Cross-platform integration complexity", "Scalability requirements across different company sizes", "Industry adaptation and customization", "Change management and adoption"],
      teamStructure: "R&D collaboration with global tech teams, data scientists, and operations leaders across multiple organizations",
      timeframe: "Ongoing innovation and refinement (3+ years of development)",
      scope: "Universal operations framework applicable across SaaS, fintech, and enterprise software",
      businessImpact: "Framework adopted by companies managing $100M+ combined ARR with measurable operational improvements",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Churn Prevention & CS Automation Ecosystem (Lato Consulting)",
      problem: "Cloud services clients experiencing 25%+ annual churn rates with manual CS processes, reactive account management, lack of early warning systems for at-risk customers, insufficient expansion revenue visibility, and inconsistent customer health monitoring across multi-client portfolio affecting revenue predictability and growth targets.",
      action: "Built comprehensive churn prevention automation ecosystem: (1) Automated playbooks for churn detection using behavioral triggers (login frequency, feature usage decline, support ticket escalation), (2) Health scoring models with 15+ data points including product engagement, payment history, and support sentiment, (3) Email workflows for lifecycle stages with personalized retention campaigns, (4) Upsell triggers based on usage patterns and account expansion readiness, (5) Cross-functional enablement connecting CS, sales, and product teams with shared dashboards and automated handoffs.",
      result: "Achieved 30+ point retention increase (from 75% to 95%+ across client portfolio), 45% boost in upsells through predictive expansion identification, 50% reduction in reactive firefighting with proactive intervention workflows, automated customer journey orchestration generating $500K+ additional ARR per client, and scalable CS operations supporting growth without proportional headcount increases.",
      metrics: ["30+ Point Retention ↑", "45% ↑ Upsells", "$500K+ ARR Impact", "50% ↓ Reactive Work", "Multi-Client Success"],
      technologies: ["Gainsight", "HubSpot", "Zapier", "Airtable", "Customer Health APIs", "Automated Email Sequences", "Predictive Analytics"],
      challenges: ["Multi-client system integration", "Behavioral data standardization", "Cross-functional workflow alignment", "Predictive model accuracy", "Change management across CS teams"],
      teamStructure: "Collaborated with CS leadership, data analysts, and client success teams across multiple cloud services organizations",
      timeframe: "8-month ecosystem design and deployment across client portfolio",
      scope: "Customer success automation for Series A-B cloud services portfolio",
      businessImpact: "Retention improvements driving $2M+ ARR protection and expansion across client base",
      icon: Shield,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const realRecommendations = [
    {
      quote: "Joan isn't just a manager, she's an inspiration. Her ability to guide, support and uplift everyone around her is unmatched. She brings clarity to complex problems, always makes time for each team member and creates a positive, high-performing work culture that makes even the toughest days feel manageable.",
      author: "Ahtisham Hussain",
      title: "Solutions Analyst at Bitwave",
      relationship: "Direct Report",
      initials: "AH",
      color: "from-pink-500 to-rose-500"
    },
    {
      quote: "Joan is one of the most thoughtful and reliable people I've worked with. She's great at simplifying complex problems and building systems that actually work across teams. She's quick to spot gaps, always asks smart questions, and finds ways to make things more efficient without overcomplicating.",
      author: "Teslim S. (MBA, PMP, AWS-SAA)",
      title: "Product Leader | AI & Cloud Innovator", 
      relationship: "Senior Colleague",
      initials: "TS",
      color: "from-blue-500 to-purple-500"
    },
    {
      quote: "What immediately stood out to me was how she created a friendly, inclusive environment where everyone feels comfortable asking questions, sharing ideas, and learning from each other. She leads by example in every task, making sure we're aligned, motivated, and clear on our goals.",
      author: "Riaz Ali",
      title: "AI | On-Chain Data Analysis | Crypto Expert",
      relationship: "Direct Report",
      initials: "RA",
      color: "from-emerald-500 to-teal-500"
    },
    {
      quote: "She is brilliant, kind, and a natural motivator who always brings out the best in her team. She listens with empathy, supports everyone wholeheartedly, and creates a positive, collaborative environment. I've learned so much under her leadership.",
      author: "Lovish Malhotra", 
      title: "Customer Support Specialist at Bitwave",
      relationship: "Direct Report",
      initials: "LM",
      color: "from-orange-500 to-red-500"
    },
    {
      quote: "Joan consistently provided insightful guidance and constructive feedback that significantly contributed to my development in customer success and project management. She genuinely invests in their team's growth.",
      author: "Jatin Chitkara",
      title: "Solutions @ Bitwave | Certified Blockchain Professional",
      relationship: "Direct Report",
      initials: "JC",
      color: "from-indigo-500 to-purple-500"
    },
    {
      quote: "She is goal-oriented, focused, a team player and quick to adapt to change. Given her exceptional skills and 'can do' attitude, Joan would be an asset to any organization.",
      author: "Taibat Oluwole",
      title: "Senior Business Analyst",
      relationship: "Team Member",
      initials: "TO",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleAIChat = (message: string) => {
    // Smart portfolio-based responses using all content from the sections
    const responses = {
      "leadership": "I believe in servant leadership at enterprise scale - creating environments where 15-person global teams thrive across 5 continents and feel psychologically safe to innovate. My approach combines empathy with uncompromising operational standards. As Ahtisham said, I'm 'the heart of the team' while orchestrating 24/7 operations and delivering record-breaking business results.",
      "automation": "I've built 300+ automations at Bitwave, but it's not about the technology - it's about solving human problems. My predictive systems surface issues 3-4 weeks early because I understand that prevention is always better than reaction. Every automation I build serves a strategic purpose.",
      "strategy": "My strategic approach is rooted in my Master's in Risk Management and field experience. I see patterns others miss because I've walked the streets of Lagos doing user research and optimized construction procurement. Strategy without execution is just planning - I build systems that work.",
      "team": "I currently lead a 15-person global team spanning 5 continents and have mentored 6+ direct reports. My philosophy is simple: make people better at their jobs. When Riaz says I create inclusive environments, that's intentional - diverse perspectives drive better solutions across cultures and time zones.",
      "results": "Numbers tell stories, but context matters. That 40% escalation reduction? It represents thousands of hours saved and happier customers. The 60% MRR growth across a $3M+ client portfolio? That's sustainable business transformation delivering record quarters, not just tactics.",
      "vision": "I'm building the future of operations - where AI amplifies human potential, where problems solve themselves before anyone notices, where growth feels effortless. That's what 'invisible operations' means to me.",
      "bitwave": "At Bitwave, I'm leading the transformation of enterprise crypto accounting operations. With 200+ clients managing $100M+ in portfolio value, precision isn't optional. My predictive systems and 15-person global team anticipate issues weeks in advance, maintaining 98% accuracy while serving billions in transaction volume across international markets.",
      "mom": "Being a mom of two has taught me patience, anticipation, and the art of graceful multitasking. If you can handle a toddler tantrum during a board call, you can definitely handle a system outage! My daughters inspire everything I do.",
      "location": "I'm based in Canada and work remotely with global teams. This allows me to serve clients across time zones while maintaining work-life balance as a mom of two. Remote leadership has taught me to be more intentional about communication and building inclusive team cultures.",
      "canada": "I'm based in Canada and work remotely with global teams. This allows me to serve clients across time zones while maintaining work-life balance as a mom of two. Remote leadership has taught me to be more intentional about communication and building inclusive team cultures.",
      "where": "I'm currently based in Canada, leading global operations remotely. This geographic flexibility allows me to work with teams worldwide while being present for my family.",
      "remote": "I lead remote teams from Canada, which has taught me to build systems and processes that work across time zones. Remote leadership requires different skills - more intentional communication, stronger documentation, and trust-based management.",
      "background": "I started by selling hardware to major retailers like Shoprite and Adidas in Lagos, then moved into construction procurement for 4 years. Now I'm in Canada, leading AI operations at Bitwave. Each step taught me something crucial about understanding customers and building systems that work.",
      "education": "I have a Master's in Risk Management from the University of Lagos. This background helps me see patterns and build early warning systems that prevent problems before they impact customers.",
      "contact": "You can reach me at alongejoan@gmail.com or connect with me on LinkedIn at linkedin.com/in/joanalonge. I'm always open to discussing operational transformation and AI automation strategies.",
      "experience": "I have 15+ years of experience across 6 industries. Started selling computers to Shoprite and Adidas in Lagos, did market research door-to-door, worked 4 years in construction procurement, and now lead AI operations at Bitwave with 300+ automations deployed.",
      "lato": "At Lato Consulting, I architected comprehensive automation ecosystems for Series A-B cloud services clients, achieving 40-60% MRR growth and 50% reduction in manual work across multiple client portfolios. I also built specialized churn prevention systems delivering 30+ point retention increases.",
      "translayte": "At Translayte, I built comprehensive customer lifecycle management systems with automated workflows and health scoring, achieving 94% customer satisfaction and 65% increase in feature adoption.",
      "achievements": "Key achievements include: 300+ AI automations deployed, 98% prediction accuracy, 40% reduction in escalations, $2M+ cost savings, leading 15-person global team across 5 continents, driving 60% MRR growth across $3M+ client portfolio, and establishing 99.5% uptime standards with zero voluntary turnover.",
      "skills": "My core expertise spans 5 pillars: Intelligent Automation & AI Operations, Program & Workflow Optimization, Scalable Customer Success Systems, Cross-Functional Team Leadership, and Risk Management & Strategic Planning.",
      "projects": "I've led 7 major transformative projects: Bitwave's crypto operations (300+ automations, $2M+ savings), Lato's cloud services growth (60% MRR increase), Churn prevention automation (30+ point retention boost), Translayte's global platform (94% satisfaction), construction procurement (60% delay reduction), Lagos market research (40% conversion rate), and AI operations innovation framework (85% prediction accuracy).",
      "construction": "In construction procurement, I managed $50M+ in project value, developing vendor performance systems that improved delivery reliability by 40% and reduced project delays by 60%. This taught me systematic process optimization under pressure.",
      "frameworks": "I've developed a proprietary AI Operations Framework that enables 3-4 week advance problem prediction with 85%+ accuracy. It's been successfully implemented across 5+ organizations managing $100M+ combined ARR.",
      "technologies": "I work with GPT-4, machine learning algorithms, Salesforce, HubSpot, Slack/Teams APIs, blockchain analytics, predictive modeling, and cross-platform integrations. My tech stack focuses on automation and intelligence.",
      "challenges": "I've overcome complex crypto regulations, 24/7 uptime requirements, cross-cultural operations across 12+ markets, supply chain unpredictability, and change management across organizations. Each challenge strengthened my problem-solving approach."
    };

    // Smart keyword matching with multiple variations
    const messageLower = message.toLowerCase();
    let matchedResponse = null;

    // Check for specific topics with priority order
    if (messageLower.includes('where') || messageLower.includes('location') || messageLower.includes('based') || messageLower.includes('live')) {
      matchedResponse = responses.location;
    } else if (messageLower.includes('canada') || messageLower.includes('canadian')) {
      matchedResponse = responses.canada;
    } else if (messageLower.includes('experience') || messageLower.includes('years')) {
      matchedResponse = responses.experience;
    } else if (messageLower.includes('achievement') || messageLower.includes('accomplish')) {
      matchedResponse = responses.achievements;
    } else if (messageLower.includes('skill') || messageLower.includes('expertise') || messageLower.includes('pillar')) {
      matchedResponse = responses.skills;
    } else if (messageLower.includes('project') || messageLower.includes('work') || messageLower.includes('portfolio')) {
      matchedResponse = responses.projects;
    } else if (messageLower.includes('construction') || messageLower.includes('procurement')) {
      matchedResponse = responses.construction;
    } else if (messageLower.includes('framework') || messageLower.includes('methodology') || messageLower.includes('innovation')) {
      matchedResponse = responses.frameworks;
    } else if (messageLower.includes('technolog') || messageLower.includes('tools') || messageLower.includes('platform')) {
      matchedResponse = responses.technologies;
    } else if (messageLower.includes('challenge') || messageLower.includes('difficult') || messageLower.includes('overcome')) {
      matchedResponse = responses.challenges;
    } else if (messageLower.includes('lato')) {
      matchedResponse = responses.lato;
    } else if (messageLower.includes('translayte')) {
      matchedResponse = responses.translayte;
    } else if (messageLower.includes('remote') || messageLower.includes('work from')) {
      matchedResponse = responses.remote;
    } else if (messageLower.includes('contact') || messageLower.includes('reach') || messageLower.includes('email')) {
      matchedResponse = responses.contact;
    } else if (messageLower.includes('education') || messageLower.includes('degree') || messageLower.includes('university')) {
      matchedResponse = responses.education;
    } else if (messageLower.includes('background') || messageLower.includes('story') || messageLower.includes('journey')) {
      matchedResponse = responses.background;
    } else {
      // Original keyword matching for other topics
      const keyword = Object.keys(responses).find(key => 
        messageLower.includes(key)
      );
      matchedResponse = keyword ? responses[keyword as keyof typeof responses] : null;
    }
    
    return matchedResponse || "I'm passionate about transforming operational chaos into predictive excellence. Ask me about my leadership philosophy, automation strategy, team building, Bitwave achievements, where I'm located, my experience, or my vision for the future of operations. What interests you most?";
  };

  const sendMessage = () => {
    if (!userMessage.trim()) return;
    
    const userMsg = userMessage;
    setUserMessage('');
    
    // Get instant response from local portfolio data
    const aiResponse = handleAIChat(userMsg);
    
    const newMessages: ChatMessage[] = [
      ...chatMessages,
      { type: 'user', content: userMsg },
      { type: 'ai', content: aiResponse }
    ];
    
    setChatMessages(newMessages);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 font-['Inter'] text-gray-900">
      {/* Navigation - Updated with Projects Tab */}
      <nav className="bg-white/98 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Joan Alonge
              </h1>
              <p className="text-sm text-gray-500 font-medium mt-1">Growth Leader • Strategic Executive • Team Builder</p>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'projects', label: '🚀 Projects' },
                { key: 'about', label: 'About' },
                { key: 'expertise', label: 'Expertise' },
                { key: 'impact', label: 'Impact Stories' },
                { key: 'leadership', label: 'Leadership' },
                { key: 'connect', label: 'Connect' }
              ].map((item) => (
                <button 
                  key={item.key}
                  onClick={() => {
                    console.log('Clicking:', item.key, item.label);
                    setActiveSection(item.key);
                  }}
                  className={`${
                    activeSection === item.key 
                      ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600' 
                      : 'text-gray-600 hover:text-indigo-600 hover:border-b-2 hover:border-indigo-200'
                  } font-medium transition-all duration-200 pb-1`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-slide-up">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Growth Leader
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                Delivering $2M+ annual cost savings through 300+ AI automations. Leading 15-person global teams across 5 continents that drive 60% MRR growth for enterprise clients with 98% prediction accuracy.
              </p>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl mb-10">
                <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-3 text-lg">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  Professional Value Proposition
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Revenue Impact:</strong> Spearheaded strategic initiatives that accelerated 60% MRR growth across a $3M+ client portfolio, directly contributing to company's fastest growth quarter on record</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Cost Optimization:</strong> Architected and deployed predictive AI systems that eliminated $2M+ in operational inefficiencies annually while improving service delivery by 40%</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Global Operations Leadership:</strong> Orchestrated seamless 24/7 operations through a 15-person team spanning 5 continents, creating standardized processes that maintained 99.5% uptime while scaling internationally</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2.5"></div>
                    <span className="text-gray-700"><strong className="text-gray-900">Cross-Cultural Management:</strong> Led diverse, multicultural teams across Americas, Europe, Asia, Australia, and Africa, implementing inclusive leadership practices that achieved 94% team satisfaction and zero voluntary turnover</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="mailto:alongejoan@gmail.com"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-center hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <Mail className="w-5 h-5" /> Let's Connect
                </a>
                <a 
                  href="https://linkedin.com/in/joanalonge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 border-2 border-indigo-200 px-8 py-4 rounded-xl font-semibold text-center hover:bg-indigo-50 hover:border-indigo-300 transition-all duration-300 inline-flex items-center justify-center gap-3"
                >
                  <ExternalLink className="w-5 h-5" /> LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="space-y-6">
              {/* Impact Summary Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">$2M+</div>
                  <div className="text-sm text-gray-600 font-medium">Annual Cost Savings</div>
                  <div className="text-xs text-gray-400 mt-2">Enterprise Impact</div>
                </div>
                <div className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-lg">
                  <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">$100M+</div>
                  <div className="text-sm text-gray-600 font-medium">Portfolio Value</div>
                  <div className="text-xs text-gray-400 mt-2">Under Management</div>
                </div>
              </div>
              
              {/* AI Automation Metrics */}
              <div className="metric-card rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">AI Automation Portfolio</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">GPT-4 Copilots</span>
                    <span className="font-semibold text-pink-600">85+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Alert Systems</span>
                    <span className="font-semibold text-blue-600">120+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Onboarding Bots</span>
                    <span className="font-semibold text-green-600">45+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Workflow Orchestration</span>
                    <span className="font-semibold text-purple-600">50+</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total Deployed</span>
                      <span className="font-bold text-xl gradient-text">300+</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Skills Histogram */}
              <div className="metric-card rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Core Competencies</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-24">AI Systems</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-4 rounded-full" style={{width: '98%'}}></div>
                      <span className="absolute right-2 top-0 text-xs text-white font-semibold leading-4">98%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-24">Leadership</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full" style={{width: '96%'}}></div>
                      <span className="absolute right-2 top-0 text-xs text-white font-semibold leading-4">96%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-24">Operations</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full" style={{width: '94%'}}></div>
                      <span className="absolute right-2 top-0 text-xs text-white font-semibold leading-4">94%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-24">Strategy</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-purple-500 to-violet-500 h-4 rounded-full" style={{width: '92%'}}></div>
                      <span className="absolute right-2 top-0 text-xs text-white font-semibold leading-4">92%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-24">Innovation</span>
                    <div className="flex-1 mx-3 bg-gray-200 rounded-full h-4 relative">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 h-4 rounded-full" style={{width: '90%'}}></div>
                      <span className="absolute right-2 top-0 text-xs text-white font-semibold leading-4">90%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Impact Histogram */}
              <div className="metric-card rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Business Impact Metrics</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="flex justify-center items-end space-x-2 h-24 mb-2">
                      <div className="bg-gradient-to-t from-pink-500 to-pink-300 w-8 rounded-t-lg" style={{height: '85%'}}>
                        <div className="text-xs text-white font-semibold p-1 text-center">$2M</div>
                      </div>
                      <div className="bg-gradient-to-t from-blue-500 to-blue-300 w-8 rounded-t-lg" style={{height: '70%'}}>
                        <div className="text-xs text-white font-semibold p-1 text-center">300+</div>
                      </div>
                      <div className="bg-gradient-to-t from-green-500 to-green-300 w-8 rounded-t-lg" style={{height: '95%'}}>
                        <div className="text-xs text-white font-semibold p-1 text-center">98%</div>
                      </div>
                      <div className="bg-gradient-to-t from-purple-500 to-purple-300 w-8 rounded-t-lg" style={{height: '60%'}}>
                        <div className="text-xs text-white font-semibold p-1 text-center">200+</div>
                      </div>
                      <div className="bg-gradient-to-t from-orange-500 to-orange-300 w-8 rounded-t-lg" style={{height: '75%'}}>
                        <div className="text-xs text-white font-semibold p-1 text-center">15</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 text-xs text-gray-600">
                      <div>Cost Savings</div>
                      <div>Automations</div>
                      <div>Accuracy</div>
                      <div>Clients</div>
                      <div>Team Size</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="metric-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">15</div>
                  <div className="text-sm text-gray-600">Global Team</div>
                  <div className="text-xs text-gray-500 mt-1">5 Continents</div>
                </div>
                <div className="metric-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{automationCount}</div>
                  <div className="text-sm text-gray-600">AI Automations</div>
                  <div className="text-xs text-gray-500 mt-1">Deployed</div>
                </div>
              </div>
              
              {/* Live Metrics */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-pink-100 shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-pink-500" />
                  Live Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Profile Views Today</span>
                    <span className="font-semibold text-gray-900">{visitorCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Time (EST)</span>
                    <span className="font-mono text-sm text-gray-900">
                      {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AI Prediction Accuracy</span>
                    <span className="font-semibold text-emerald-600">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* About Me Section */}
      {activeSection === 'about' && (
        <section className="bg-white/50 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive AI Operations Leadership</h2>
              <p className="text-xl text-gray-600">Global operations executive leading 15-person teams across 5 continents with a proven track record in AI-driven enterprise transformation, predictive automation at scale, and customer success strategy. I specialize in helping high-growth fintech and SaaS organizations eliminate operational friction, scale internationally, and unlock new revenue through predictive systems that deliver record-breaking business results across $100M+ portfolios.</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {/* Customer-Led Growth Expertise */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Customer Success & Lifecycle Optimization</h3>
                      <p className="text-gray-600 mb-4">From enterprise churn prevention models to global lifecycle health scoring systems, I've architected CS strategy across Series A-B startups and Fortune 500 enterprises. My programs have delivered 30+ point retention gains, 60% MRR growth across $3M+ portfolios, and boosted upsells through predictive segmentation, automation, and cross-functional enablement across international markets.</p>
                      <div className="text-sm text-gray-500">Customer-Led Growth Expertise</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Cog className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">AI Systems, Workflow Automation & Process Design</h3>
                      <p className="text-gray-600 mb-4">Whether deploying GPT-powered copilots, building intelligent onboarding flows, or architecting customer health dashboards, I bring deep technical understanding without losing sight of real-world impact. I design systems that blend AI, operations, and empathy, ensuring results for both users and the business.</p>
                      <div className="text-sm text-gray-500">Technical & Operational Fluency</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Procurement & Compliance in High-Stakes Environments</h3>
                      <p className="text-gray-600 mb-4">My foundation lies in construction and procurement operations, where I managed multimillion-dollar supply chains and compliance programs. That early exposure to complexity and urgency now informs the way I design predictive, scalable, and human-centered solutions in every system I build.</p>
                      <div className="text-sm text-gray-500">Rooted in Real-World Operations</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Current Impact at Scale */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-500" />
                    Current Impact at Scale
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">300+ AI automations in use across product, CS, and operations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">200+ enterprise clients supported through intelligent service delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">98% prediction accuracy for risk signals across $100M+ portfolio value</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Billions in crypto & SaaS transactions processed with minimal disruption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">40% drop in escalations through preemptive risk mitigation</span>
                    </div>
                  </div>
                </div>
                
                {/* Career Progression */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Career Progression
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Executive Operations Leader - Bitwave</div>
                        <div className="text-sm text-gray-600">15-person global team, 300+ automations, $2M+ cost savings</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Executive Growth Operations - Lato Consulting</div>
                        <div className="text-sm text-gray-600">60% MRR growth across $3M+ client portfolio</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Global Operations - Translayte</div>
                        <div className="text-sm text-gray-600">94% satisfaction across 12+ markets</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-500" />
                    Key Achievements Distribution
                  </h3>
                  
                  {/* Simple Bar Chart for Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Automations Built</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
                        </div>
                        <span className="text-sm font-medium">300+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Cost Savings</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        <span className="text-sm font-medium">$2M+</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Team Members Led</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '50%'}}></div>
                        </div>
                        <span className="text-sm font-medium">15</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Enterprise Clients</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div className="bg-pink-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm font-medium">200+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-lg border border-gray-200">
                    <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                    <div className="text-sm text-gray-600">MRR Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Project Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Executive leadership portfolio showcasing AI-powered systems, automation platforms, and global operational transformations I've architected and deployed across enterprise organizations and international markets
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {/* AI-Powered Feedback Loop System */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="bg-gradient-to-br from-purple-50 to-blue-100 rounded-2xl p-4 border border-purple-200 lg:order-first">
                  <img 
                    src="/images/ai-feedback-loop.png" 
                    alt="AI-Powered Feedback Loop System"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Customer feedback management with AI processing and analytics dashboard</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">AI Feedback Loop System</h3>
                      <p className="text-gray-600">Customer Experience Automation Platform</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">50% AI Processing Accuracy</strong>
                        <p className="text-gray-600 text-sm">Automated feedback routing with human oversight for complex cases</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Automated Workflows</strong>
                        <p className="text-gray-600 text-sm">Customer success automation, churn prediction, and growth optimization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Multi-Client Platform</strong>
                        <p className="text-gray-600 text-sm">Scalable operations serving diverse B2B SaaS verticals</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["HubSpot", "Salesforce", "Zapier", "Python", "SQL", "Tableau"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>





            {/* PulseChain Wallet Tester */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">PulseChain Wallet Tester</h3>
                      <p className="text-gray-600">Blockchain Testing & Analytics Tool</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Wallet Connection Interface</strong>
                        <p className="text-gray-600 text-sm">Direct integration with MetaMask and manual wallet address testing capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Portfolio Analysis</strong>
                        <p className="text-gray-600 text-sm">Complete portfolio tracking including tokens, transaction history, and blockchain data</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Export & Sharing Features</strong>
                        <p className="text-gray-600 text-sm">Export wallet analysis results and share comprehensive blockchain insights</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Web3.js", "MetaMask Integration", "PulseChain", "Blockchain APIs"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-4 border border-cyan-200">
                  <img 
                    src="/images/pulsechain-wallet.png" 
                    alt="PulseChain Wallet Tester Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Professional blockchain testing interface with wallet connection and portfolio analysis</p>
                </div>
              </div>
            </div>

            {/* TechCorp AI Assistant - Slack Integration */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">TechCorp AI Assistant</h3>
                      <p className="text-purple-600 font-medium">Enterprise Slack Integration</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Enterprise-grade AI chatbot designed for seamless Slack integration. Features intelligent command processing, multi-channel support, and advanced conversational AI to enhance team productivity through automated assistance and smart workflow management.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Natural Language Processing</strong>
                        <p className="text-gray-600 text-sm">Advanced NLP for complex query understanding and intelligent responses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Multi-Channel Communication</strong>
                        <p className="text-gray-600 text-sm">Seamless file sharing and communication across multiple Slack channels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Smart Task Management</strong>
                        <p className="text-gray-600 text-sm">Intelligent scheduling and task automation with real-time analytics</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Slack API", "NLP", "Node.js", "WebSocket", "Real-time Analytics"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-4 border border-purple-200">
                  <img 
                    src="/images/techcorp-ai-assistant.png" 
                    alt="TechCorp AI Assistant Slack Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Professional Slack integration with AI assistant managing team communications and scheduling</p>
                </div>
              </div>
            </div>

            {/* Customer Churn Dashboard */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Customer Churn Dashboard</h3>
                      <p className="text-red-600 font-medium">Predictive Analytics & Retention Intelligence</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Executive-level churn prediction dashboard that identifies at-risk customers and monitors retention trends across enterprise portfolios. Features predictive analytics, revenue churn tracking, and actionable insights for proactive customer success interventions.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Predictive Churn Analysis</strong>
                        <p className="text-gray-600 text-sm">Advanced algorithms identifying at-risk customers with 85%+ accuracy</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Revenue Impact Tracking</strong>
                        <p className="text-gray-600 text-sm">Real-time monitoring of churn impact on revenue and growth metrics</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Executive Analytics</strong>
                        <p className="text-gray-600 text-sm">Comprehensive dashboards for strategic decision-making and trend analysis</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Predictive Analytics", "Machine Learning", "Customer Intelligence", "Executive Dashboards"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl p-4 border border-red-200">
                  <img 
                    src="/images/churn-dashboard.png" 
                    alt="Customer Churn Dashboard Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Executive churn prediction dashboard with customer retention analytics and revenue impact tracking</p>
                </div>
              </div>
            </div>

            {/* CloudOopsie - Intelligent Cloud Cost Optimization */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">CloudOopsie</h3>
                      <p className="text-orange-600 font-medium">Intelligent Cloud Cost Optimization</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Enterprise cloud cost optimization platform that prevents "oops moments" before they bankrupt operations. Features intelligent resource monitoring, automated alerts for unused resources, and predictive cost analysis to eliminate waste across multi-cloud environments.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Cost Waste Detection</strong>
                        <p className="text-gray-600 text-sm">Identifies $2710/month in wasted resources with automated termination recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Risk Assessment</strong>
                        <p className="text-gray-600 text-sm">Categorizes resources by risk level with intelligent alerting and cost projections</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Multi-Cloud Intelligence</strong>
                        <p className="text-gray-600 text-sm">Comprehensive monitoring across AWS, Azure, and GCP with unified cost optimization</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Cloud Analytics", "Cost Optimization", "Multi-Cloud", "Automated Alerts", "Resource Management"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl p-4 border border-orange-200">
                  <img 
                    src="/images/cloudoopsie.png" 
                    alt="CloudOopsie Cost Optimization Dashboard"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Enterprise cloud cost optimization platform identifying $2710/month in waste with intelligent risk assessment</p>
                </div>
              </div>
            </div>

            {/* Educational Gaming Platform for Lolu */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Educational Gaming Platform</h3>
                      <p className="text-purple-600 font-medium">Personal Family Project - Lolu's Learning Adventure</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Custom-built educational gaming platform designed for my daughter Lolu's learning journey. Features gamified math challenges, reading adventures, art studio, and explorer labs with progress tracking, streak rewards, and personalized learning paths that combine fun with educational growth.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Gamified Learning</strong>
                        <p className="text-gray-600 text-sm">Interactive math adventures, word detective games, and creative art studio challenges</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Progress & Rewards</strong>
                        <p className="text-gray-600 text-sm">350-point achievement system with 7-day streaks and personalized encouragement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Adaptive Learning</strong>
                        <p className="text-gray-600 text-sm">Personalized difficulty adjustment based on performance and learning patterns</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Educational Technology", "Gamification", "Progress Tracking", "Family Project"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-4 border border-purple-200">
                  <img 
                    src="/images/educational-gaming.png" 
                    alt="Educational Gaming Platform for Lolu"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Custom educational gaming platform with math adventures, reading challenges, and progress tracking for personalized learning</p>
                </div>
              </div>
            </div>

            {/* Employee Onboarding Platform */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Employee Onboarding Platform</h3>
                      <p className="text-blue-600 font-medium">Enterprise HR Management System</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive employee onboarding management system designed for enterprise HR operations. Features structured data collection, department assignment, manager allocation, and automated workflow processing to streamline new hire integration across global organizations.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Structured Data Management</strong>
                        <p className="text-gray-600 text-sm">Comprehensive employee information collection with validation and verification</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Department & Manager Assignment</strong>
                        <p className="text-gray-600 text-sm">Intelligent routing and assignment based on role requirements and organizational structure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Automated Workflow Processing</strong>
                        <p className="text-gray-600 text-sm">Streamlined approval processes with notifications and progress tracking</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["HR Management", "Workflow Automation", "Enterprise Systems", "Data Validation", "Process Optimization"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-4 border border-blue-200">
                  <img 
                    src="/images/employee-onboarding.png" 
                    alt="Employee Onboarding Platform Dashboard"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Enterprise employee onboarding platform with structured data collection, department assignment, and automated workflow processing</p>
                </div>
              </div>
            </div>

            {/* Smart Customer Onboarding Platform */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-emerald-100">
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Smart Customer Onboarding Platform</h3>
                      <p className="text-emerald-600 font-medium">Multilingual User Experience System</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Professional, multilingual onboarding platform designed to streamline user adoption through intelligent automation. Features voice navigation, interactive checklists, and comprehensive admin controls to deliver personalized onboarding experiences across multiple languages and user types.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Multi-Language Support</strong>
                        <p className="text-gray-600 text-sm">Support for English, Spanish, French, and German with seamless language switching</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Voice Navigation</strong>
                        <p className="text-gray-600 text-sm">Navigate the platform using voice commands for hands-free operation and accessibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">AI Assistant Integration</strong>
                        <p className="text-gray-600 text-sm">RAG-powered chatbot with multilingual support for documentation questions and guidance</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <div>
                        <strong className="text-gray-900">Smart Progress Tracking</strong>
                        <p className="text-gray-600 text-sm">Intelligent task management with automated reminders and progress visualization</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React", "Voice API", "Multilingual", "RAG", "Progress Tracking", "Admin Controls"].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl p-4 border border-emerald-200">
                  <img 
                    src="/images/smart-onboarding.png" 
                    alt="Smart Onboarding Platform Interface"
                    className="w-full rounded-xl shadow-lg"
                  />
                  <p className="text-xs text-gray-600 mt-2 text-center">Professional onboarding platform with multilingual support, voice navigation, and comprehensive feature overview</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
              <p className="text-lg text-gray-700 mb-4">
                <strong>These represent just a few examples</strong> from my extensive executive portfolio of AI operations systems, automation platforms, and global digital transformation projects across $100M+ enterprise portfolios.
              </p>
              <p className="text-gray-600">
                Each project demonstrates my commitment to building intelligent, scalable solutions that drive record-breaking business outcomes—from Fortune 500 enterprise operations to international market expansion with 15-person global teams.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600 mb-8">Each project represents systematic global operational transformation through executive-level AI-powered automation leadership</p>
            <a 
              href="mailto:alongejoan@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Discuss Your Project
            </a>
          </div>
        </section>
      )}

      {/* Expertise Section */}
      {activeSection === 'expertise' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Strategic Expertise</h2>
              <p className="text-xl text-gray-600">Five Core Pillars of Global Operational Excellence</p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {expertisePillars.map((pillar, index) => (
                <div key={index} className="expertise-pillar bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{pillar.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{pillar.description}</p>
                  <div className="space-y-2">
                    {pillar.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Impact Stories Section */}
      {activeSection === 'impact' && (
        <section className="bg-white/50 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Impact Stories</h2>
              <p className="text-xl text-gray-600">Global transformations delivering record-breaking business outcomes</p>
            </div>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-pink-100">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center`}>
                          <study.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{study.title}</h3>
                          <div className="text-sm text-gray-500">{study.timeframe} • {study.scope}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Problem & Challenge</h4>
                          <p className="text-gray-600 mb-3">{study.problem}</p>
                          {study.businessImpact && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                              <div className="text-sm font-medium text-red-800">Business Impact</div>
                              <div className="text-sm text-red-700">{study.businessImpact}</div>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Strategic Action</h4>
                          <p className="text-gray-600 mb-3">{study.action}</p>
                          {study.teamStructure && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                              <div className="text-sm font-medium text-blue-800">Team Leadership</div>
                              <div className="text-sm text-blue-700">{study.teamStructure}</div>
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Measurable Results</h4>
                          <p className="text-gray-600">{study.result}</p>
                        </div>
                        
                        {study.technologies && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {study.technologies.map((tech, techIdx) => (
                                <span key={techIdx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {study.challenges && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Key Challenges Overcome</h4>
                            <div className="space-y-1">
                              {study.challenges.map((challenge, chIdx) => (
                                <div key={chIdx} className="flex items-start gap-2">
                                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600">{challenge}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Key Metrics Cards */}
                      <div className="space-y-3">
                        {study.metrics.map((metric, idx) => (
                          <div key={idx} className={`bg-gradient-to-r ${study.color.replace('500', '50')} rounded-lg p-4 border border-gray-200`}>
                            <div className="text-center">
                              <div className={`text-2xl font-bold ${study.color.includes('pink') ? 'text-pink-600' : study.color.includes('emerald') ? 'text-emerald-600' : study.color.includes('blue') ? 'text-blue-600' : study.color.includes('orange') ? 'text-orange-600' : 'text-purple-600'} mb-1`}>
                                {metric.split(' ')[0]}
                              </div>
                              <div className="text-sm text-gray-600">{metric.split(' ').slice(1).join(' ')}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* ROI Visualization */}
                      {(study.title.includes('Bitwave') || study.title.includes('Lato')) && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm">ROI Timeline</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Month 1-3</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-yellow-500 h-1 rounded-full" style={{width: '30%'}}></div>
                                </div>
                                <span className="text-gray-800">Setup</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Month 4-6</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-orange-500 h-1 rounded-full" style={{width: '70%'}}></div>
                                </div>
                                <span className="text-gray-800">Growth</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Month 6+</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-green-500 h-1 rounded-full" style={{width: '100%'}}></div>
                                </div>
                                <span className="text-gray-800">Scale</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Impact Distribution for Global Projects */}
                      {study.title.includes('Translayte') && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Global Impact Distribution</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">North America</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-blue-500 h-1 rounded-full" style={{width: '40%'}}></div>
                                </div>
                                <span className="text-gray-800">40%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Europe</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-green-500 h-1 rounded-full" style={{width: '35%'}}></div>
                                </div>
                                <span className="text-gray-800">35%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">APAC</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-purple-500 h-1 rounded-full" style={{width: '25%'}}></div>
                                </div>
                                <span className="text-gray-800">25%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Efficiency Gains Chart for Operations Projects */}
                      {(study.title.includes('Construction') || study.title.includes('AI Operations')) && (
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm">Efficiency Improvements</h4>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Process Speed</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-emerald-500 h-1 rounded-full" style={{width: '60%'}}></div>
                                </div>
                                <span className="text-gray-800">+60%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Error Reduction</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-red-500 h-1 rounded-full" style={{width: '80%'}}></div>
                                </div>
                                <span className="text-gray-800">-80%</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-600">Cost Savings</span>
                              <div className="flex items-center gap-2">
                                <div className="w-16 bg-gray-200 rounded-full h-1">
                                  <div className="bg-blue-500 h-1 rounded-full" style={{width: '50%'}}></div>
                                </div>
                                <span className="text-gray-800">50%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      {activeSection === 'leadership' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Through Their Eyes</h2>
              <p className="text-xl text-gray-600">What my team and colleagues say about working with me</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {realRecommendations.map((rec, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${rec.color} rounded-full flex items-center justify-center`}>
                      <span className="text-white font-semibold">{rec.initials}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{rec.author}</div>
                      <div className="text-sm text-gray-600">{rec.title}</div>
                      <div className={`text-xs ${rec.relationship.includes('Direct') ? 'text-pink-600 bg-pink-50' : 'text-blue-600 bg-blue-50'} px-2 py-1 rounded-full inline-block mt-1`}>
                        {rec.relationship}
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{rec.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
            
            {/* Team Consensus */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Consensus</h3>
                <blockquote className="text-xl text-gray-700 italic">
                  "Rare combination of empathy, excellence and impact"
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Connect Section */}
      {activeSection === 'connect' && (
        <section className="bg-white/50 backdrop-blur-sm py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Extraordinary</h2>
              <p className="text-xl text-gray-600">Ready to transform your operations with AI-powered excellence?</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* AI Chat Interface */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-pink-500 animate-pulse-glow" />
                  Chat with Joan's AI
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto mb-4">
                  {chatMessages.length === 0 ? (
                    <div className="text-center text-gray-500 text-sm flex flex-col items-center justify-center h-full gap-2">
                      <Sparkles className="w-8 h-8 text-pink-400" />
                      <div>Start a conversation with Joan's AI!</div>
                      <div className="text-xs">Try: "Tell me about your leadership style" or "How do you build AI systems?"</div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {chatMessages.map((message, index) => (
                        <div key={index} className={`${message.type === 'user' ? 'text-right' : ''}`}>
                          <div className={`inline-block max-w-xs p-3 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white' 
                              : 'bg-white border border-gray-200 shadow-sm text-gray-700'
                          }`}>
                            {message.isLoading ? (
                              <div className="flex items-center gap-2">
                                <div className="animate-spin w-4 h-4 border-2 border-gray-300 border-t-pink-500 rounded-full"></div>
                                {message.content}
                              </div>
                            ) : (
                              message.content
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input 
                    type="text" 
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about leadership, automation, strategy..." 
                    className="flex-1"
                  />
                  <Button 
                    onClick={sendMessage}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg"
                    disabled={!userMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <a href="mailto:alongejoan@gmail.com" className="text-pink-600 hover:text-pink-700">alongejoan@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">LinkedIn</div>
                        <a href="https://linkedin.com/in/joanalonge" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">linkedin.com/in/joanalonge</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Location</div>
                        <div className="text-gray-600">Canada (Remote Global)</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Focus</h3>
                    <p className="text-gray-600 mb-4">Leading operational transformation at Bitwave, building the future of crypto accounting operations with AI-powered predictive systems.</p>
                    <a 
                      href="mailto:alongejoan@gmail.com?subject=Collaboration Opportunity&body=Hi Joan, I'd like to discuss a collaboration opportunity with you."
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-lg text-white px-4 py-2 rounded-md font-medium text-center inline-flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Let's Collaborate
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default JoanPortfolio;
