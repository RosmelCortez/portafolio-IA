"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Terminal,
  Database,
  Globe,
  ExternalLink,
  Mail,
  ChevronDown,
  Sparkles,
  Layers,
  Send,
  CheckCircle2,
  Server,
  Layout,
  GitBranch,
  ArrowUpRight,
  Filter,
  Briefcase,
  User,
  MessageSquare,
  Loader2,
} from "lucide-react";

// Registro seguro de ScrollTrigger en entorno del navegador
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Iconos vectoriales limpios para marcas profesionales
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Estado para filtrado interactivo de proyectos
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("Todos");

  // Estado del formulario de contacto
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    asunto: "Oportunidad Laboral",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSentSuccess(true);
      setFormData({ name: "", email: "", asunto: "Oportunidad Laboral", message: "" });
      setTimeout(() => setSentSuccess(false), 7000);
    }, 1200);
  };

  // LOS 9 PROYECTOS REALES DE ROSMEL CORTEZ CON IMÁGENES REPRESENTATIVAS DE ALTA RESOLUCIÓN
  const proyectos = [
    {
      id: 1,
      titulo: "Clon de Starlink",
      categoria: "Frontend",
      descripcion:
        "Recreación responsive y moderna de la página oficial de Starlink con navegación fluida, estructura semántica y maquetación avanzada para todas las resoluciones.",
      tecnologias: ["HTML5", "CSS3", "Flexbox", "GitHub Pages"],
      imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/ejercicio-starlin/",
      repositorio: "https://github.com/RosmelCortez/ejercicio-starlin.git",
    },
    {
      id: 2,
      titulo: "Formulario Interactivo",
      categoria: "Frontend",
      descripcion:
        "Módulo de formulario con validación dinámica en tiempo real de entradas de datos, diseño limpio y adaptable estilizado con Tailwind CSS.",
      tecnologias: ["JavaScript", "Tailwind CSS", "HTML5", "Validaciones"],
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/ejercicio-formulario/",
      repositorio: "https://github.com/RosmelCortez/ejercicio-formulario.git",
    },
    {
      id: 3,
      titulo: "Juego Piedra, Papel o Tijera",
      categoria: "IA & APIs",
      descripcion:
        "Juego interactivo programado con JavaScript vanilla. Incluye lógica de toma de decisiones para la computadora, marcador de puntajes y animaciones de victoria.",
      tecnologias: ["JavaScript (ES6+)", "DOM Manipulation", "CSS3", "GitHub Pages"],
      imagen: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/jugarPiedraPapelTijera/",
      repositorio: "https://github.com/RosmelCortez/jugarPiedraPapelTijera.git",
    },
    {
      id: 4,
      titulo: "Sistema Web con Autenticación & API Rick and Morty",
      categoria: "IA & APIs",
      descripcion:
        "Aplicación web integral que implementa inicio de sesión/registro seguro, control de sesiones en almacenamiento local y consumo asíncrono de la API REST oficial de Rick & Morty con filtros dinámicos.",
      tecnologias: ["JavaScript", "REST APIs", "Autenticación", "LocalStorage"],
      imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/Ejercicio-Sistema-web-con-autenticaci-n-y-API-de-Rick-and-Morty/",
      repositorio: "https://github.com/RosmelCortez/Ejercicio-Sistema-web-con-autenticaci-n-y-API-de-Rick-and-Morty.git",
    },
    {
      id: 5,
      titulo: "Clon de YouTube",
      categoria: "Frontend",
      descripcion:
        "Recreación visual de la interfaz de YouTube con barra de navegación superior, menú lateral retráctil, feed de videos en cuadrícula y diseño adaptado a móviles.",
      tecnologias: ["HTML5", "CSS3 / Grid", "JavaScript", "GitHub Pages"],
      imagen: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/clon-youtube/",
      repositorio: "https://github.com/RosmelCortez/clon-youtube.git",
    },
    {
      id: 6,
      titulo: "Página Cinex Mejorada",
      categoria: "Frontend",
      descripcion:
        "Rediseño y optimización del portal de cartelera cinematográfica Cinex, con interfaz atractiva, listado dinámico de películas y horarios interactivos.",
      tecnologias: ["HTML5 Semántico", "CSS3 Moderno", "JavaScript", "GitHub Pages"],
      imagen: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/cinex-mejorada/",
      repositorio: "https://github.com/RosmelCortez/cinex-mejorada.git",
    },
    {
      id: 7,
      titulo: "Sistema de Inventario JS",
      categoria: "Full-Stack",
      descripcion:
        "Panel web administrativo para control y gestión de productos en inventario con operaciones completas de CRUD, cálculo de stock y persistencia en LocalStorage.",
      tecnologias: ["JavaScript (ES6+)", "CRUD", "LocalStorage", "GitHub Pages"],
      imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/ejercicio-inventarioJS/",
      repositorio: "https://github.com/RosmelCortez/ejercicio-inventarioJS.git",
    },
    {
      id: 8,
      titulo: "Landing Page Los Chamos Cerrajeros",
      categoria: "Full-Stack",
      descripcion:
        "Sitio web comercial para servicios de cerrajería profesional con llamadas a la acción directas para emergencias 24/7, formulario de contacto y catálogo de servicios.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imagen: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "http://loschamoscerrajeros.com/",
      repositorio: "https://github.com/RosmelCortez/loschamos-cerrajeros.git",
    },
    {
      id: 9,
      titulo: "Landing Page Tu Estilista Canino",
      categoria: "Full-Stack",
      descripcion:
        "Plataforma digital para estética y peluquería canina con catálogo de planes de aseo, galería fotográfica, testimonios de clientes y botón directo para agendar citas.",
      tecnologias: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      imagen: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80",
      enlaceGithubPages: "https://rosmelcortez.github.io/Tu-Estilista-Canino/",
      repositorio: "https://github.com/RosmelCortez/Tu-Estilista-Canino.git",
    },
  ];

  // Filtro de proyectos dinámico
  const proyectosFiltrados = useMemo(() => {
    if (categoriaSeleccionada === "Todos") return proyectos;
    return proyectos.filter((p) => p.categoria === categoriaSeleccionada);
  }, [categoriaSeleccionada, proyectos]);

  const categoriasFiltro = ["Todos", "Full-Stack", "Frontend", "IA & APIs"];

  // Conocimientos técnicos organizados estilo Cyberpunk
  const categoriasConocimientos = [
    {
      titulo: "Frontend Engineering",
      subtitulo: "CLIENT_SIDE // UI & UX",
      icono: <Layout className="w-5 h-5 text-[#00FF87]" />,
      descripcion: "Creación de interfaces web hiperreactivas, accesibles y fluidas con los más altos estándares visuales.",
      habilidades: [
        { nombre: "HTML5 Semántico", tag: "CORE" },
        { nombre: "CSS3 / Sass / Grid", tag: "STYLING" },
        { nombre: "JavaScript (ES6+)", tag: "LANG" },
        { nombre: "React.js", tag: "LIB" },
        { nombre: "Next.js (App Router)", tag: "FRAMEWORK" },
        { nombre: "Tailwind CSS", tag: "UTILITY" },
      ],
    },
    {
      titulo: "Backend & Bases de Datos",
      subtitulo: "SERVER_SIDE // ARCHITECTURE",
      icono: <Server className="w-5 h-5 text-emerald-400" />,
      descripcion: "Construcción de lógica de negocio robusta, APIs RESTful y administración estructurada de datos.",
      habilidades: [
        { nombre: "Node.js", tag: "RUNTIME" },
        { nombre: "Express.js", tag: "SERVER" },
        { nombre: "RESTful APIs", tag: "PROTOCOL" },
        { nombre: "SQL / PostgreSQL", tag: "RDBMS" },
        { nombre: "Bases de Datos Relacionales", tag: "STORAGE" },
        { nombre: "Autenticación & JWT", tag: "SECURITY" },
      ],
    },
    {
      titulo: "Herramientas, DevOps & IA",
      subtitulo: "WORKFLOW // SUPPLY_CHAIN",
      icono: <GitBranch className="w-5 h-5 text-[#00FF87]" />,
      descripcion: "Gestión de paquetes segura, control de versiones y flujos de desarrollo asistidos por Inteligencia Artificial.",
      habilidades: [
        { nombre: "Git & GitHub", tag: "VCS" },
        { nombre: "GitHub Pages", tag: "HOSTING" },
        { nombre: "pnpm (Gestor Seguro)", tag: "PACKAGE_MGR" },
        { nombre: "Inteligencia Artificial (IA)", tag: "PROMPTS" },
        { nombre: "Visual Studio Code", tag: "IDE" },
        { nombre: "GSAP Motion", tag: "ANIMATION" },
      ],
    },
  ];

  // Animaciones fluidas con GSAP y ScrollTrigger (con resguardo para no ocultar nada)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // 1. Animación suave de aparición para el Hero
      gsap.fromTo(
        ".gsap-fade-in",
        { opacity: 0.2, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: "power2.out",
          clearProps: "all",
        }
      );

      // 2. Animación suave con ScrollTrigger para los títulos de sección
      gsap.utils.toArray<HTMLElement>(".gsap-section-header").forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 25,
          opacity: 0.2,
          duration: 0.7,
          ease: "power2.out",
          clearProps: "all",
        });
      });

      // 3. Entrada progresiva de las tarjetas de Conocimientos al hacer scroll
      gsap.from(".gsap-skill-card", {
        scrollTrigger: {
          trigger: "#conocimientos",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 35,
        opacity: 0.2,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "all",
      });

      // 4. Entrada progresiva de las tarjetas de Proyectos al hacer scroll
      gsap.from(".gsap-project-card", {
        scrollTrigger: {
          trigger: "#proyectos",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 35,
        opacity: 0.2,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col bg-[#0A0E0C] text-[#E2E8F0] relative cyber-grid selection:bg-[#00FF87] selection:text-[#0A0E0C]"
    >
      {/* Resplandores ambientales estilo Cyberpunk / Neon Green */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-[#00FF87]/10 blur-[160px] rounded-full"></div>
        <div className="absolute top-[35%] -left-32 w-[500px] h-[500px] bg-[#10B981]/8 blur-[160px] rounded-full"></div>
        <div className="absolute top-[70%] -right-32 w-[550px] h-[500px] bg-[#00FF87]/8 blur-[170px] rounded-full"></div>
      </div>

      {/* =========================================================
          1. HEADER OBLIGATORIO
          Rosmel Cortez y profesión (Programador Web Full-Stack)
          ========================================================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0E0C]/90 border-b border-[#1A2922] transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <a href="#intro" className="group block focus:outline-none">
              <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#00FF87] transition-colors flex items-center gap-2 font-mono">
                <span className="text-[#00FF87]">&gt;</span> Rosmel Cortez
              </h1>
              <p className="text-xs sm:text-sm font-semibold font-mono text-[#00FF87] flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87]"></span>
                Programador Web Full-Stack
              </p>
            </a>
          </div>

          <div className="flex items-center gap-6">
            {/* Indicador animado 'Disponible para trabajar' */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111A16] border border-[#00FF87]/40 text-[#00FF87] text-xs font-mono font-semibold shadow-[0_0_15px_-3px_rgba(0,255,135,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF87] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF87] shadow-[0_0_6px_#00FF87]"></span>
              </span>
              SYS.STATUS: DISPONIBLE
            </div>

            <nav className="hidden md:flex items-center gap-2 text-sm font-mono text-slate-300">
              <a
                href="#intro"
                className="px-3 py-1.5 rounded-lg border border-transparent hover:border-[#00FF87]/40 hover:text-[#00FF87] hover:bg-[#111A16] hover:shadow-[0_0_12px_rgba(0,255,135,0.2)] transition-all duration-200"
              >
                [// Intro]
              </a>
              <a
                href="#conocimientos"
                className="px-3 py-1.5 rounded-lg border border-transparent hover:border-[#00FF87]/40 hover:text-[#00FF87] hover:bg-[#111A16] hover:shadow-[0_0_12px_rgba(0,255,135,0.2)] transition-all duration-200"
              >
                [// Stack]
              </a>
              <a
                href="#proyectos"
                className="px-3 py-1.5 rounded-lg border border-transparent hover:border-[#00FF87]/40 hover:text-[#00FF87] hover:bg-[#111A16] hover:shadow-[0_0_12px_rgba(0,255,135,0.2)] transition-all duration-200"
              >
                [// Proyectos ({proyectos.length})]
              </a>
              <a
                href="#contacto"
                className="ml-2 px-4 py-2 rounded-lg bg-[#00FF87] text-[#0A0E0C] font-mono font-bold hover:bg-[#00e575] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_-3px_rgba(0,255,135,0.6)] hover:shadow-[0_0_28px_rgba(0,255,135,0.9)] cursor-pointer"
              >
                Contáctame
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* =========================================================
            2. INTRO SOBRE TU PERSONA (HERO SECTION)
            Quién eres, qué te motiva y qué proyectos te gusta construir
            ========================================================= */}
        <section id="intro" className="relative py-20 sm:py-28 border-b border-[#1A2922]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            {/* Badge de presentación */}
            <div className="gsap-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FF87]/30 bg-[#111A16] text-[#00FF87] text-xs sm:text-sm font-mono font-medium mb-8 backdrop-blur-md shadow-[0_0_18px_-3px_rgba(0,255,135,0.25)]">
              <Sparkles className="w-4 h-4 text-[#00FF87]" />
              FULL-STACK_DEV // AI_POWERED_WORKFLOW
            </div>

            <h2 className="gsap-fade-in text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hola, soy{" "}
              <span className="relative inline-block text-white">
                <span className="bg-gradient-to-r from-[#00FF87] via-emerald-300 to-[#00FF87] bg-clip-text text-transparent neon-glow-text">
                  Rosmel Cortez
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00FF87] shadow-[0_0_10px_#00FF87]"></span>
              </span>
            </h2>

            {/* Badge móvil 'Disponible para trabajar' */}
            <div className="sm:hidden mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111A16] border border-[#00FF87]/40 text-[#00FF87] text-xs font-mono font-semibold shadow-[0_0_15px_-3px_rgba(0,255,135,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF87] opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF87]"></span>
                </span>
                SYS.STATUS: DISPONIBLE
              </span>
            </div>

            <div className="gsap-fade-in space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                Soy <strong>Programador Web Full-Stack</strong> enfocado en construir arquitecturas web sólidas, interfaces intuitivas y plataformas modernas de alto impacto.
              </p>
              <p>
                Me motiva el aprendizaje continuo, resolver problemas complejos con código limpio y aprovechar las ventajas de la <strong>Inteligencia Artificial</strong> para optimizar procesos de desarrollo, pruebas y refactorización.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                Disfruto crear plataformas dinámicas con <strong>Next.js</strong> y <strong>React</strong>, sistemas de comercio electrónico, dashboards analíticos y servicios backend que brinden una experiencia de usuario sobresaliente y segura.
              </p>
            </div>

            {/* Terminal interactiva de presentación estilo Cyberpunk */}
            <div className="gsap-fade-in mt-10 max-w-xl mx-auto rounded-xl border border-[#1D2E26] bg-[#111A16] text-left p-4 shadow-[0_0_30px_-5px_rgba(0,255,135,0.15)] font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1A2922] text-slate-500 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87]/80"></span>
                <span className="ml-2 text-[11px] text-[#00FF87]/70">rosmel-cortez@fullstack-dev: ~</span>
              </div>
              <p className="text-[#00FF87]">$ cat profile.json</p>
              <p className="text-slate-400 mt-1">
                &#123; <br />
                &nbsp;&nbsp;<span className="text-[#00FF87]">&quot;name&quot;</span>: &quot;Rosmel Cortez&quot;,<br />
                &nbsp;&nbsp;<span className="text-[#00FF87]">&quot;role&quot;</span>: &quot;Programador Web Full-Stack&quot;,<br />
                &nbsp;&nbsp;<span className="text-[#00FF87]">&quot;email&quot;</span>: &quot;rosmelac28@gmail.com&quot;,<br />
                &nbsp;&nbsp;<span className="text-[#00FF87]">&quot;packageManager&quot;</span>: &quot;pnpm (Strict Safe Mode)&quot;,<br />
                &nbsp;&nbsp;<span className="text-[#00FF87]">&quot;projectsCount&quot;</span>: 9,<br />
                &nbsp;&nbsp;<span className="text-[#00FF87]">&quot;stack&quot;</span>: [&quot;Next.js&quot;, &quot;React&quot;, &quot;Node.js&quot;, &quot;SQL&quot;, &quot;IA&quot;]<br />
                &#125;
              </p>
            </div>

            {/* Llamados a la acción */}
            <div className="gsap-fade-in mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#proyectos"
                className="group px-6 py-3.5 rounded-xl bg-[#00FF87] hover:bg-[#00e575] text-[#0A0E0C] font-mono font-bold transition-all duration-300 shadow-[0_0_25px_-3px_rgba(0,255,135,0.6)] hover:shadow-[0_0_35px_rgba(0,255,135,0.9)] hover:-translate-y-1 hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4 group-hover:scale-110 transition-transform text-[#0A0E0C]" />
                Ver mis 9 proyectos
              </a>
              <a
                href="#contacto"
                className="px-6 py-3.5 rounded-xl border border-[#00FF87]/40 hover:border-[#00FF87] bg-[#111A16] hover:bg-[#15231D] text-[#00FF87] font-mono font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-105 shadow-[0_0_20px_-5px_rgba(0,255,135,0.2)] flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#00FF87]" />
                Contáctame
              </a>
            </div>

            <div className="mt-14 flex justify-center text-slate-600">
              <a href="#conocimientos" className="hover:text-[#00FF87] transition-colors p-2" aria-label="Ir a conocimientos técnicos">
                <ChevronDown className="w-6 h-6 animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================
            3. CONOCIMIENTOS TÉCNICOS (STACK)
            Lenguajes, frameworks y herramientas que manejas
            ========================================================= */}
        <section id="conocimientos" className="py-24 bg-[#0A0E0C]/90 border-b border-[#1A2922]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gsap-section-header text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#00FF87] uppercase flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4" /> // TECH_STACK & COMPETENCIES
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
                Conocimientos Técnicos
              </p>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Lenguajes, librerías, bases de datos y herramientas que empleo a diario para diseñar y desplegar software full-stack.
              </p>
            </div>

            {/* Tarjetas de habilidades Cyberpunk con microinteracciones de escala y resplandor */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categoriasConocimientos.map((cat, idx) => (
                <div
                  key={idx}
                  className="gsap-skill-card group relative rounded-2xl border border-[#1A2922] bg-[#111A16] p-8 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:border-[#00FF87] hover:shadow-[0_0_35px_-5px_rgba(0,255,135,0.35)] flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3.5 rounded-xl bg-[#0A0E0C] border border-[#1A2922] group-hover:border-[#00FF87]/50 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(0,255,135,0.2)]">
                        {cat.icono}
                      </div>
                      <span className="text-[11px] font-mono text-[#00FF87]/70">
                        {cat.subtitulo}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-[#00FF87] transition-colors">
                      {cat.titulo}
                    </h3>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">{cat.descripcion}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1A2922]">
                    {cat.habilidades.map((hab, habIdx) => (
                      <span
                        key={habIdx}
                        className="group/badge px-2.5 py-1.5 rounded-lg bg-[#0A0E0C] border border-[#1A2922] font-mono text-xs text-slate-300 hover:text-white hover:border-[#00FF87] hover:bg-[#15231D] hover:shadow-[0_0_12px_rgba(0,255,135,0.4)] hover:scale-105 transition-all duration-200 cursor-default flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]/70 group-hover/badge:bg-[#00FF87] group-hover/badge:scale-125 transition-all"></span>
                        {hab.nombre}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. SECCIÓN DE PROYECTOS (LOS 9 PROYECTOS REALES DE ROSMEL)
            Nombre, descripción corta, imagen/captura y enlace GitHub Pages
            ========================================================= */}
        <section id="proyectos" className="py-24 border-b border-[#1A2922]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gsap-section-header text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#00FF87] uppercase flex items-center justify-center gap-2">
                <Code2 className="w-4 h-4" /> // REAL_PORTFOLIO_PROJECTS
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
                Mis Proyectos del Curso ({proyectos.length})
              </p>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Proyectos reales desarrollados durante el curso, desplegados con sus respectivos enlaces funcionales en <strong>GitHub Pages</strong> y código fuente en GitHub.
              </p>
            </div>

            {/* Barra de Filtros Interactivos estilo Cyberpunk */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#00FF87] mr-1 hidden sm:flex">
                <Filter className="w-3.5 h-3.5 text-[#00FF87]" /> FILTRO:
              </div>
              {categoriasFiltro.map((cat) => {
                const isActive = categoriaSeleccionada === cat;
                const count = cat === "Todos" ? proyectos.length : proyectos.filter((p) => p.categoria === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoriaSeleccionada(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 hover:scale-105 ${
                      isActive
                        ? "bg-[#00FF87] text-[#0A0E0C] shadow-[0_0_20px_rgba(0,255,135,0.7)] border border-[#00FF87] scale-105 font-bold"
                        : "bg-[#111A16] text-slate-400 hover:text-[#00FF87] hover:bg-[#15231D] border border-[#1A2922] hover:border-[#00FF87]/50"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${isActive ? "bg-[#0A0E0C] text-[#00FF87]" : "bg-[#0A0E0C] text-slate-400"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Grid con los 9 Proyectos Reales con efectos Hover y GSAP */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectosFiltrados.map((proy) => (
                <article
                  key={proy.id}
                  className="gsap-project-card group relative flex flex-col rounded-2xl border border-[#1A2922] bg-[#111A16] overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:-translate-y-2 hover:border-[#00FF87] hover:shadow-[0_0_40px_-5px_rgba(0,255,135,0.45)] cursor-pointer"
                >
                  {/* Línea neón superior con resplandor al hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                  {/* Imagen / Captura representativa del proyecto */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#0A0E0C]">
                    <img
                      src={proy.imagen}
                      alt={`Captura del proyecto ${proy.titulo}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111A16] via-[#111A16]/30 to-transparent"></div>

                    {/* Badge de Categoría */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#0A0E0C]/90 text-[#00FF87] border border-[#00FF87]/40 backdrop-blur-md shadow-md">
                        {proy.categoria}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0A0E0C]/80 text-[#00FF87]/80 border border-[#1A2922]">
                        #{String(proy.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Contenido descriptivo del proyecto */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proy.tecnologias.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded font-mono text-[10px] font-semibold bg-[#0A0E0C] text-[#00FF87] border border-[#00FF87]/20 group-hover:border-[#00FF87]/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold font-mono text-white mb-2 group-hover:text-[#00FF87] transition-colors flex items-center justify-between">
                        {proy.titulo}
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-[#00FF87]" />
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {proy.descripcion}
                      </p>
                    </div>

                    {/* Enlace OBLIGATORIO a GitHub Pages y repositorio */}
                    <div className="pt-4 border-t border-[#1A2922] flex items-center justify-between">
                      <a
                        href={proy.enlaceGithubPages}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-semibold text-[#00FF87] hover:text-white hover:underline transition-colors py-1 group/link"
                      >
                        <Globe className="w-4 h-4 text-[#00FF87] group-hover/link:animate-spin" style={{ animationDuration: "8s" }} />
                        Ver en GitHub Pages
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      <a
                        href={proy.repositorio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#00FF87] hover:scale-110 p-1.5 rounded-lg hover:bg-[#0A0E0C] transition-all"
                        title="Ver Código Fuente en GitHub"
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {proyectosFiltrados.length === 0 && (
              <div className="text-center py-12 text-slate-500 font-mono text-sm">
                No hay proyectos en esta categoría por el momento.
              </div>
            )}
          </div>
        </section>

        {/* =========================================================
            5. SECCIÓN DE CONTACTO
            Medios para contactarte: Correo Real (rosmelac28@gmail.com), LinkedIn, GitHub y Formulario
            ========================================================= */}
        <section id="contacto" className="py-24 bg-[#0A0E0C]/90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gsap-section-header text-center mb-12">
              <h2 className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-[#00FF87] uppercase flex items-center justify-center gap-2">
                <Terminal className="w-4 h-4" /> // CONNECT_CHANNEL
              </h2>
              <p className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white font-mono">
                Sección de Contacto
              </p>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                ¿Tienes una propuesta laboral, proyecto en mente o te gustaría colaborar? Contáctame a través de estos canales:
              </p>
            </div>

            {/* Tarjetas de contacto con estilo Cyberpunk Neón */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
              <a
                href="mailto:rosmelac28@gmail.com"
                className="group relative flex flex-col items-center p-6 rounded-2xl border border-[#1A2922] bg-[#111A16] hover:border-[#00FF87] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_35px_-5px_rgba(0,255,135,0.4)] transition-all duration-300 text-center"
              >
                <div className="p-3.5 rounded-full bg-[#0A0E0C] text-[#00FF87] group-hover:scale-110 group-hover:bg-[#00FF87] group-hover:text-[#0A0E0C] transition-all duration-300 mb-3 border border-[#1A2922] group-hover:border-[#00FF87]">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold font-mono text-white mb-1 group-hover:text-[#00FF87] transition-colors">
                  Correo Electrónico
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors break-all">
                  rosmelac28@gmail.com
                </span>
              </a>

              <a
                href="https://linkedin.com/in/rosmelcortez"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center p-6 rounded-2xl border border-[#1A2922] bg-[#111A16] hover:border-[#00FF87] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_35px_-5px_rgba(0,255,135,0.4)] transition-all duration-300 text-center"
              >
                <div className="p-3.5 rounded-full bg-[#0A0E0C] text-[#00FF87] group-hover:scale-110 group-hover:bg-[#00FF87] group-hover:text-[#0A0E0C] transition-all duration-300 mb-3 border border-[#1A2922] group-hover:border-[#00FF87]">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold font-mono text-white mb-1 group-hover:text-[#00FF87] transition-colors">
                  LinkedIn
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                  /in/rosmelcortez
                </span>
              </a>

              <a
                href="https://github.com/RosmelCortez"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center p-6 rounded-2xl border border-[#1A2922] bg-[#111A16] hover:border-[#00FF87] hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_35px_-5px_rgba(0,255,135,0.4)] transition-all duration-300 text-center"
              >
                <div className="p-3.5 rounded-full bg-[#0A0E0C] text-[#00FF87] group-hover:scale-110 group-hover:bg-[#00FF87] group-hover:text-[#0A0E0C] transition-all duration-300 mb-3 border border-[#1A2922] group-hover:border-[#00FF87]">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold font-mono text-white mb-1 group-hover:text-[#00FF87] transition-colors">
                  GitHub
                </span>
                <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                  @RosmelCortez
                </span>
              </a>
            </div>

            {/* Formulario de Contacto Mejorado */}
            <div className="relative rounded-3xl border border-[#1A2922] bg-[#111A16] p-8 sm:p-10 shadow-2xl overflow-hidden hover:border-[#00FF87]/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF87]/5 blur-3xl pointer-events-none rounded-full"></div>

              <div className="mb-6 flex items-center justify-between border-b border-[#1A2922] pb-4">
                <div>
                  <h3 className="text-xl font-bold font-mono text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#00FF87]" />
                    Enviar Mensaje Directo
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    [DESTINATION: rosmelac28@gmail.com // RESPONSE_TIME: &lt; 24H]
                  </p>
                </div>
              </div>

              {sentSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#11241C] border border-[#00FF87]/50 text-[#00FF87] text-sm flex items-center gap-3 shadow-[0_0_20px_-3px_rgba(0,255,135,0.4)]">
                  <CheckCircle2 className="w-6 h-6 text-[#00FF87] shrink-0" />
                  <div>
                    <p className="font-mono font-semibold">¡Mensaje transmitido con éxito!</p>
                    <p className="text-xs font-mono text-emerald-300/80">Gracias por contactarme. Te responderé a la brevedad.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#00FF87]" /> Tu Nombre
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E0C] border border-[#1A2922] text-white placeholder-slate-600 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] font-mono transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#00FF87]" /> Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tunombre@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E0C] border border-[#1A2922] text-white placeholder-slate-600 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] font-mono transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#00FF87]" /> Motivo del contacto
                  </label>
                  <select
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E0C] border border-[#1A2922] text-white focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] font-mono transition-all text-sm cursor-pointer"
                  >
                    <option value="Oportunidad Laboral">Oportunidad Laboral / Contratación</option>
                    <option value="Proyecto Freelance">Desarrollo de Proyecto Web / Freelance</option>
                    <option value="Consulta General">Consulta General / Colaboración</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-300 mb-1.5">
                    Mensaje o descripción del proyecto
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe los detalles de tu consulta, proyecto o vacante..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E0C] border border-[#1A2922] text-white placeholder-slate-600 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] font-mono transition-all text-sm resize-y"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <p className="text-xs font-mono text-slate-500">
                    [PRIVACY_POLICY: DATOS_PROTEGIDOS]
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#00FF87] hover:bg-[#00e575] text-[#0A0E0C] font-mono font-bold transition-all duration-300 shadow-[0_0_20px_rgba(0,255,135,0.6)] hover:shadow-[0_0_30px_rgba(0,255,135,0.9)] hover:scale-105 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#0A0E0C]" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#0A0E0C]" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================
          PIE DE PÁGINA
          ========================================================= */}
      <footer className="border-t border-[#1A2922] py-8 bg-[#0A0E0C] text-center text-xs font-mono text-slate-500 relative z-10">
        <p>© 2026 Rosmel Cortez · Programador Web Full-Stack</p>
        <p className="mt-1">
          Stack: Next.js + GSAP | Gestor exclusivo: <span className="text-[#00FF87]">pnpm</span>
        </p>
      </footer>
    </div>
  );
}
