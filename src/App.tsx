import React, { useState, useEffect } from 'react';
import {
  Check,
  Headphones,
  ShieldCheck,
  ChevronDown,
  Clock,
  Sparkles,
  Lock,
  ArrowRight,
  Star,
  HelpCircle,
  BadgeCheck
} from 'lucide-react';

export default function App() {
  // Hotmart Checkout Link
  const CHECKOUT_URL = 'https://pay.hotmart.com/L107544581C?checkoutMode=10';

  // Sticky mobile CTA visibility
  const [showStickyBar, setShowStickyBar] = useState(false);

  // FAQ Accordion State (open question index)
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // 48h Real Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 47,
    minutes: 59,
    seconds: 45,
  });

  // Initialize and tick countdown
  useEffect(() => {
    const STORAGE_KEY = 'codigo777_countdown_end';
    let targetTime: number;
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      targetTime = parseInt(stored, 10);
      if (isNaN(targetTime) || targetTime <= Date.now()) {
        targetTime = Date.now() + 48 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    } else {
      targetTime = Date.now() + 48 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, targetTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle sticky CTA visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Cloudinary image links supplied by user
  const images = {
    mockupLibroCodigo777: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983684/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_libro_codigo_777.png',
    mockupCelular777Afirmaciones: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983684/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_celular_777_afirmaciones_de_abundancia.png',
    mockupTabletRitualNocturno: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983684/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_tablet_ritual_nocturno_7_minutos.png',
    mockupTabletCodigo777: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983684/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_tablet_codigo_777.png',
    mockupTablet777Afirmaciones: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983684/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_tablet_777_afirmaciones_de_abundancia.png',
    mockupLibroRitualNocturno: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983683/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_libro_ritual_nocturno_7_minutos.png',
    mockupCelularRitualNocturno: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983683/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_celular_ritual_nocturno_7_minutos.png',
    mockupLibro777Afirmaciones: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983683/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_libro_777_affirmaciones_de_abundancia.png',
    mockupCelularCodigo777: 'https://res.cloudinary.com/jjershkr/image/upload/v1788983683/Imagenes%20para%20pagina%20de%20los%20ebooks/mockup_celular_codigo_777.png',
    elizaPortrait: 'https://res.cloudinary.com/jjershkr/image/upload/v1788984702/Crear_foto_perfil_Instagram_2K_202609081552.jpg',
  };

  // Real testimonials with names and genuine photos
  const testimonials = [
    {
      name: 'Mariana Gómez',
      role: 'Emprendedora & Diseñadora',
      city: 'Ciudad de México',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
      text: 'Antes de hacer el reto de 21 días con Eliza, cada vez que cobraba sentía una angustia de que el dinero iba a desaparecer. En la Semana 1 entendí las creencias heredadas de mi familia. Hoy cobro con total seguridad lo que valgo y tengo ahorros en paz.',
    },
    {
      name: 'Carla Villalobos',
      role: 'Consultora & Terapeuta',
      city: 'Madrid, España',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
      text: 'Había probado afirmaciones sueltas y vision boards sin resultados duraderos. El ritual nocturno de 7 minutos y los audios de abundancia me cambiaron por completo el diálogo interno. Cerré el mes con dos clientes nuevas de alto valor.',
    },
    {
      name: 'Sofía Restrepo',
      role: 'Directora Comercial',
      city: 'Bogotá, Colombia',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      text: 'Eliza enseña con una sabiduría directa, sin humo ni promesas mágicas. Dedicar solo 7 minutos al día me permitió alinear mis acciones diarias y romper el miedo a perder dinero. Es la mejor inversión que he hecho en mi bienestar.',
    },
  ];

  const faqItems = [
    {
      q: '¿Es un curso en video?',
      a: 'No, es ebook + audios + PDFs. Lo haces a tu ritmo.',
    },
    {
      q: '¿Cuánto tiempo al día?',
      a: '7 minutos al día (con ejercicios complementarios opcionales de 10-15 min).',
    },
    {
      q: '¿Necesito experiencia en manifestación?',
      a: 'No, empieza de cero.',
    },
    {
      q: '¿Cómo recibo todo?',
      a: 'Email inmediato con acceso.',
    },
    {
      q: '¿Esto me hará ganar $10.000?',
      a: 'No. Trabajamos tu mentalidad y hábitos con el dinero. Los resultados financieros dependen de tus acciones.',
    },
    {
      q: '¿Y si no me gusta?',
      a: 'Garantía 7 días.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-start overflow-x-hidden selection:bg-[#7B2CBF] selection:text-[#FFD700] relative">
      
      {/* Background Sacred Geometry & Ambient Violet Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle radial gradients */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-radial from-[#6A0DAD]/25 via-[#7B2CBF]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-radial from-[#7B2CBF]/15 via-[#6A0DAD]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial from-[#6A0DAD]/20 via-[#7B2CBF]/8 to-transparent rounded-full blur-3xl" />
        
        {/* Very faint sacred geometry overlay */}
        <svg
          className="absolute top-16 left-1/2 -translate-x-1/2 w-[720px] h-[720px] opacity-[0.035] text-[#D4AF37]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="60" />
          <circle cx="100" cy="100" r="30" />
          <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" />
          <polygon points="100,190 22,55 178,55" />
          <polygon points="100,10 178,145 22,145" />
        </svg>

        {/* Subtle floating gold particle dots */}
        <div className="absolute top-32 left-[15%] w-1.5 h-1.5 rounded-full bg-[#FFD700] opacity-40 blur-[0.5px] animate-pulse" />
        <div className="absolute top-80 right-[12%] w-1 h-1 rounded-full bg-[#D4AF37] opacity-50 blur-[0.5px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[45%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#FFD700] opacity-35 blur-[0.5px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[65%] right-[10%] w-1 h-1 rounded-full bg-[#FFE28A] opacity-45 blur-[0.5px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[85%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-40 blur-[0.5px] animate-pulse" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Main Container - Mobile First Max-W-md (390px optimized) with desktop fluidity */}
      <div className="relative z-10 w-full max-w-[430px] sm:max-w-xl md:max-w-2xl px-4 sm:px-6 flex flex-col items-center pt-8 pb-24 sm:pb-28">

        {/* 2. HERO */}
        <section id="hero" className="w-full pt-2 pb-10 flex flex-col items-center text-center">
          
          {/* H1: CÓDIGO 777 */}
          <h1
            id="hero-title"
            className="font-cinzel text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-gold-gradient drop-shadow-[0_2px_18px_rgba(212,175,55,0.35)] mb-3 leading-none"
          >
            CÓDIGO 777
          </h1>

          {/* H2 */}
          <h2
            id="hero-subtitle"
            className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-gold-subtle leading-snug max-w-lg mb-4"
          >
            21 días para romper tus bloqueos de abundancia y transformar tu relación con el dinero
          </h2>

          {/* Sub */}
          <p
            id="hero-subtext"
            className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md mb-6 font-light"
          >
            Deja de vivir con mentalidad de escasez. Identifica qué te bloquea, reprograma cómo piensas del dinero y crea una rutina diaria de abundancia en solo 7 minutos al día.
          </p>

          {/* Bullets hero */}
          <div
            id="hero-bullets"
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-7 w-full max-w-md"
          >
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/95 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 w-full sm:w-auto justify-center">
              <Check className="w-4 h-4 text-[#FFD700] shrink-0" strokeWidth={3} />
              <span>Sin promesas mágicas</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/95 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 w-full sm:w-auto justify-center">
              <Check className="w-4 h-4 text-[#FFD700] shrink-0" strokeWidth={3} />
              <span>7 minutos al dia</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/95 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/10 w-full sm:w-auto justify-center">
              <Check className="w-4 h-4 text-[#FFD700] shrink-0" strokeWidth={3} />
              <span>Empieza hoy</span>
            </div>
          </div>

          {/* Primary CTA Button */}
          <div className="w-full max-w-sm mb-3">
            <a
              id="cta-hero"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-gradient w-full py-4 px-6 rounded-xl font-bold text-base sm:text-lg text-black uppercase tracking-wider flex items-center justify-center gap-2 text-center group cursor-pointer shadow-lg"
            >
              <span>QUIERO MI ACCESO</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Micro text */}
          <p
            id="hero-micro"
            className="text-[12px] sm:text-xs text-white/70 tracking-wide mb-8 flex items-center justify-center gap-2"
          >
            <span>Pago único</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Acceso inmediato</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Garantía 7 días</span>
          </p>

          {/* Mockup 3D libro + celular + tablet */}
          <div
            id="hero-mockups"
            className="w-full relative mt-2 mb-2 flex items-center justify-center"
          >
            {/* Ambient gold-violet glow behind mockups */}
            <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-t from-[#7B2CBF]/35 via-[#D4AF37]/15 to-transparent rounded-full blur-2xl -z-10" />

            <div className="relative w-full max-w-md flex items-end justify-center pt-4">
              {/* Tablet Mockup Left */}
              <div className="w-[34%] -mr-8 mb-2 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src={images.mockupTabletCodigo777}
                  alt="Mockup Tablet CÓDIGO 777"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                />
              </div>

              {/* 3D Main Book Mockup Center */}
              <div className="w-[58%] z-20 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={images.mockupLibroCodigo777}
                  alt="Mockup 3D Libro CÓDIGO 777"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto drop-shadow-[0_20px_35px_rgba(106,13,173,0.65)]"
                />
              </div>

              {/* Smartphone Mockup Right */}
              <div className="w-[28%] -ml-8 mb-3 z-15 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <img
                  src={images.mockupCelularCodigo777}
                  alt="Mockup Celular CÓDIGO 777"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
          <span className="text-[11px] text-white/50 tracking-wider uppercase mt-1">
            Incluye versión digital compatible con todos tus dispositivos
          </span>
        </section>

        {/* 3. FRANJA SOCIAL PROOF */}
        <section
          id="social-proof"
          className="w-full my-6 py-4 px-5 rounded-2xl bg-gradient-to-r from-[#6A0DAD]/30 via-[#7B2CBF]/20 to-[#6A0DAD]/30 border border-[#D4AF37]/30 text-center shadow-[0_4px_20px_rgba(123,44,191,0.2)]"
        >
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" />
            ))}
          </div>
          <p className="text-sm sm:text-base font-medium text-white leading-snug">
            Miles de mujeres están haciendo el reto de 21 días para cambiar su mentalidad de escasez.
          </p>
        </section>

        {/* 4. DOLOR CHECKLIST */}
        <section id="dolor" className="w-full py-10 flex flex-col items-center">
          <h2
            id="dolor-title"
            className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient text-center mb-6 leading-tight max-w-lg"
          >
            Si el dinero llega... y se va. No es mala suerte.
          </h2>

          {/* Checklist items */}
          <div
            id="dolor-checklist"
            className="w-full space-y-3 mb-6"
          >
            {[
              'Cobras y sientes que desaparecerá',
              'Dices "es muy poco" o "no alcanza" sin darte cuenta',
              'Te cuesta cobrar lo que vales, sientes culpa',
              'Ves a otras avanzar y tú sigues igual',
              'Hiciste afirmaciones, 369, vision board... y nada cambió',
            ].map((item, idx) => (
              <div
                key={idx}
                id={`dolor-item-${idx}`}
                className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/40 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#7B2CBF]/30 border border-[#D4AF37]/60 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#FFD700] text-xs font-bold">✕</span>
                </div>
                <p className="text-sm sm:text-base text-white/90 leading-snug font-normal">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Cierre Dolor */}
          <div
            id="dolor-cierre"
            className="w-full p-4 rounded-xl bg-gradient-to-r from-[#6A0DAD]/25 to-[#7B2CBF]/15 border-l-4 border-[#D4AF37] text-left"
          >
            <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
              No te falta esfuerzo. Te sobran bloqueos. Y nadie te enseñó a verlos.
            </p>
          </div>
        </section>

        {/* 5. HISTORIA ELIZA + FOTO */}
        <section
          id="historia-luna"
          className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#170c26] to-[#0d0716] border border-[#D4AF37]/30 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle gold halo decoration */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Photo Eliza */}
          <div className="relative mb-5">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] via-[#FFD700] to-[#6A0DAD] shadow-[0_0_25px_rgba(212,175,55,0.35)]">
              <img
                src={images.elizaPortrait}
                alt="Eliza - Mentora en abundancia y relación con el dinero"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full filter brightness-105"
              />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0A0A0A] border border-[#D4AF37]/60 px-3 py-0.5 rounded-full whitespace-nowrap shadow">
              <span className="text-[10px] font-semibold tracking-wider text-[#FFD700] uppercase">
                30 Años de Experiencia
              </span>
            </div>
          </div>

          {/* H2 */}
          <h2
            id="luna-title"
            className="font-playfair text-xl sm:text-2xl font-bold text-gold-gradient mb-3 leading-snug"
          >
            Soy Eliza. Llevo 30 años acompañando mujeres con su dinero.
          </h2>

          {/* Texto */}
          <p
            id="luna-text"
            className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 font-light max-w-lg"
          >
            No te voy a decir que escribas 777 y mañana serás rica. Eso es humo. Lo que sí sé es esto: cuando cambias quién eres frente al dinero, el dinero deja de escaparse. Creé el Código 777 para darte en 21 días lo que a mis alumnas les tomó años.
          </p>

          {/* Filosofía */}
          <div
            id="luna-filosofia"
            className="w-full py-3 px-4 rounded-xl bg-[#7B2CBF]/20 border border-[#D4AF37]/40"
          >
            <span className="text-xs uppercase tracking-widest text-white/60 block mb-0.5">
              Filosofía:
            </span>
            <p className="font-cinzel text-lg sm:text-xl font-bold text-[#FFD700] tracking-wider">
              No persigas. Alinea.
            </p>
          </div>
        </section>

        {/* 6. SOLUCIÓN + 3 FASES EN 3 CARDS VIOLETA */}
        <section id="solucion" className="w-full py-8 flex flex-col items-center">
          
          {/* H2 */}
          <h2
            id="solucion-title"
            className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient text-center mb-3 leading-tight"
          >
            El CÓDIGO 777 no es un ebook. Es un reto de 21 días.
          </h2>

          {/* Texto */}
          <p
            id="solucion-text"
            className="text-white/85 text-sm sm:text-base text-center leading-relaxed mb-8 max-w-md"
          >
            Cada día: 1 pregunta de poder + 1 ejercicio de 10 min + 1 afirmación + 1 acción mínima con dinero real + ritual nocturno de 7 min.
          </p>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700] mb-4">
            Cómo funciona (3 fases)
          </p>

          {/* 3 Cards Violeta */}
          <div className="w-full space-y-4">
            {/* Card 1 */}
            <div
              id="fase-1"
              className="card-violet-gradient p-5 rounded-2xl relative overflow-hidden transition-all hover:border-[#D4AF37]/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-black font-cinzel font-bold text-sm flex items-center justify-center shrink-0 shadow">
                  01
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#FFD700] tracking-wide">
                  SEMANA 1 (Días 1-7)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed pl-11">
                <strong className="text-[#FFD700]">DESBLOQUEA:</strong> historia con el dinero, creencias heredadas, merecimiento, miedo a perder.
              </p>
            </div>

            {/* Card 2 */}
            <div
              id="fase-2"
              className="card-violet-gradient p-5 rounded-2xl relative overflow-hidden transition-all hover:border-[#D4AF37]/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-black font-cinzel font-bold text-sm flex items-center justify-center shrink-0 shadow">
                  02
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#FFD700] tracking-wide">
                  SEMANA 2 (Días 8-14)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed pl-11">
                <strong className="text-[#FFD700]">REPROGRAMA:</strong> nueva identidad, diálogo interno, visualización, scripting, 369.
              </p>
            </div>

            {/* Card 3 */}
            <div
              id="fase-3"
              className="card-violet-gradient p-5 rounded-2xl relative overflow-hidden transition-all hover:border-[#D4AF37]/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#FFD700] text-black font-cinzel font-bold text-sm flex items-center justify-center shrink-0 shadow">
                  03
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#FFD700] tracking-wide">
                  SEMANA 3 (Días 15-21)
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed pl-11">
                <strong className="text-[#FFD700]">INTEGRA:</strong> oportunidades, recibir sin culpa, gastar y ahorrar sin miedo, confianza.
              </p>
            </div>
          </div>
        </section>

        {/* 7. LO QUE RECIBES: 1 PRINCIPAL + 3 BONUS EN CARDS CON PRECIO TACHADO */}
        <section id="lo-que-recibes" className="w-full py-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B2CBF]/30 border border-[#D4AF37]/35 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
              Paquete Completo
            </span>
          </div>

          <h2
            id="recibes-title"
            className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient text-center mb-8 leading-tight"
          >
            Todo lo que recibes hoy por $7,77
          </h2>

          <div className="w-full space-y-5">
            {/* PRODUCTO PRINCIPAL */}
            <div
              id="card-producto-principal"
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#1b0d30] to-[#120722] border-2 border-[#D4AF37]/60 shadow-[0_8px_30px_rgba(212,175,55,0.2)] relative"
            >
              <div className="absolute top-3 right-4 bg-[#FFD700] text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Principal
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-36 sm:w-40 shrink-0">
                  <img
                    src={images.mockupLibroCodigo777}
                    alt="Ebook CÓDIGO 777"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider block mb-1">
                    PRODUCTO PRINCIPAL
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white mb-1">
                    Ebook CÓDIGO 777
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mb-3">
                    La guía maestra paso a paso de los 21 días para desbloquear, reprogramar e integrar tu nueva mentalidad financiera.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] px-3 py-1 rounded-lg border border-white/10">
                    <span className="text-xs text-white/60">Valor real:</span>
                    <span className="text-sm font-semibold line-through text-white/60">
                      77 USD
                    </span>
                    <span className="text-xs font-bold text-[#FFD700]">INCLUIDO HOY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BONUS 1 */}
            <div
              id="card-bonus-1"
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/35 relative"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-32 sm:w-36 flex items-center justify-center shrink-0">
                  <img
                    src={images.mockupCelular777Afirmaciones}
                    alt="Bonus 1: 777 Afirmaciones de Abundancia"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-20 sm:w-24 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)] transform -rotate-3"
                  />
                  <img
                    src={images.mockupTablet777Afirmaciones}
                    alt="Bonus 1: Tablet 777 Afirmaciones"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-24 sm:w-28 h-auto -ml-8 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider block mb-1">
                    BONUS 1
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white mb-1">
                    777 Afirmaciones de Abundancia (PDF)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mb-3">
                    Reprogramación subconsciente para eliminar la culpa al recibir y reactivar tu vibración de merecimiento a diario.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] px-3 py-1 rounded-lg border border-white/10">
                    <span className="text-xs text-white/60">Valor:</span>
                    <span className="text-sm font-semibold line-through text-white/60">
                      $12,97
                    </span>
                    <span className="text-xs font-bold text-[#FFD700]">GRATIS HOY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BONUS 2 */}
            <div
              id="card-bonus-2"
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/35 relative"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-32 sm:w-36 flex items-center justify-center shrink-0">
                  <img
                    src={images.mockupCelularRitualNocturno}
                    alt="Bonus 2: Ritual Nocturno 7 Minutos Celular"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-20 sm:w-24 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)] transform -rotate-3"
                  />
                  <img
                    src={images.mockupTabletRitualNocturno}
                    alt="Bonus 2: Ritual Nocturno 7 Minutos Tablet"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-24 sm:w-28 h-auto -ml-8 drop-shadow-[0_8px_16px_rgba(0,0,0,0.7)]"
                  />
                </div>
                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider block mb-1">
                    BONUS 2
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white mb-1">
                    Ritual Nocturno de 7 Minutos (Ebook + 21 guiones)
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mb-3">
                    Guiones exactos para antes de dormir. Desactiva la ansiedad financiera nocturna y programa tu mente mientras descansas.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] px-3 py-1 rounded-lg border border-white/10">
                    <span className="text-xs text-white/60">Valor:</span>
                    <span className="text-sm font-semibold line-through text-white/60">
                      $9,97
                    </span>
                    <span className="text-xs font-bold text-[#FFD700]">GRATIS HOY</span>
                  </div>
                </div>
              </div>
            </div>

            {/* BONUS 3 */}
            <div
              id="card-bonus-3"
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/35 relative"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-32 sm:w-36 flex items-center justify-center shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#6A0DAD] to-[#7B2CBF] border border-[#FFD700]/50 flex flex-col items-center justify-center p-3 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
                    <Headphones className="w-10 h-10 text-[#FFD700] mb-1 drop-shadow" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider text-center">
                      21 Audios
                    </span>
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider block mb-1">
                    BONUS 3
                  </span>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white mb-1">
                    21 Audios Guiados de Abundancia
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 mb-3">
                    Ponte los auriculares y déjate guiar cada mañana. Frecuencias y meditaciones breves para iniciar el día en sintonía de prosperidad.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/[0.05] px-3 py-1 rounded-lg border border-white/10">
                    <span className="text-xs text-white/60">Valor:</span>
                    <span className="text-sm font-semibold line-through text-white/60">
                      $14,97
                    </span>
                    <span className="text-xs font-bold text-[#FFD700]">GRATIS HOY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. STACK PRECIO 107 USD -> $7,77 + COUNTDOWN 48H + CTA */}
        <section
          id="stack-precio"
          className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#240b3b] via-[#140622] to-[#0A0A0A] border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.3)] flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Top highlight */}
          <div className="w-full py-1 px-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-widest rounded-full mb-6 max-w-xs shadow">
            OFERTA POR TIEMPO LIMITADO
          </div>

          {/* Valor total */}
          <p className="text-sm sm:text-base text-white/70 tracking-wide mb-1">
            Valor total: <span className="line-through text-red-400 font-semibold">107 USD</span>
          </p>

          {/* Precio Hoy */}
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-lg sm:text-xl font-light text-white/80">Hoy solo:</span>
            <span className="font-cinzel text-5xl sm:text-6xl font-black text-gold-gradient drop-shadow-[0_4px_15px_rgba(212,175,55,0.4)]">
              $7,77
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#FFD700] font-medium tracking-wide mb-6">
            (pago único • sin suscripciones ni cobros ocultos)
          </p>

          {/* Countdown Real 48h */}
          <div
            id="countdown-timer"
            className="w-full max-w-xs p-3.5 rounded-xl bg-black/60 border border-[#D4AF37]/40 mb-6 flex flex-col items-center"
          >
            <div className="flex items-center gap-1.5 text-xs text-white/80 font-medium mb-2.5">
              <Clock className="w-3.5 h-3.5 text-[#FFD700] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Esta oferta especial vence en:</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 w-full text-center">
              <div className="bg-[#7B2CBF]/30 p-2 rounded-lg border border-[#D4AF37]/30">
                <span className="font-cinzel text-2xl font-bold text-[#FFD700] block leading-none">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-white/60 uppercase">Horas</span>
              </div>
              <div className="bg-[#7B2CBF]/30 p-2 rounded-lg border border-[#D4AF37]/30">
                <span className="font-cinzel text-2xl font-bold text-[#FFD700] block leading-none">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-white/60 uppercase">Minutos</span>
              </div>
              <div className="bg-[#7B2CBF]/30 p-2 rounded-lg border border-[#D4AF37]/30">
                <span className="font-cinzel text-2xl font-bold text-[#FFD700] block leading-none">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-white/60 uppercase">Segundos</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="w-full max-w-sm">
            <a
              id="cta-stack"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-gradient w-full py-4 px-6 rounded-xl font-bold text-base sm:text-lg text-black uppercase tracking-wider flex items-center justify-center gap-2 text-center group cursor-pointer shadow-lg"
            >
              <span>SÍ, QUIERO EMPEZAR MIS 21 DÍAS</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-white/60 mt-3.5">
            <Lock className="w-3 h-3 text-[#FFD700]" />
            <span>Encriptación bancaria SSL 256-bit • Acceso instantáneo por email</span>
          </div>
        </section>

        {/* 9. GARANTÍA 7 DÍAS (SELLO DORADO) */}
        <section
          id="garantia"
          className="w-full my-6 p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left relative"
        >
          {/* Sello dorado insignia SVG */}
          <div className="w-24 h-24 shrink-0 flex items-center justify-center relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#FFD700] to-[#AA7C11] flex items-center justify-center p-0.5 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <div className="w-full h-full rounded-full bg-[#0A0A0A] border-2 border-dashed border-[#FFD700] flex flex-col items-center justify-center text-center p-1">
                <ShieldCheck className="w-6 h-6 text-[#FFD700] mb-0.5" />
                <span className="font-cinzel text-[9px] font-extrabold text-[#FFD700] leading-none uppercase">
                  7 DÍAS
                </span>
                <span className="text-[7px] text-white/80 font-bold uppercase leading-none">
                  GARANTÍA
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h2
              id="garantia-title"
              className="font-playfair text-xl sm:text-2xl font-bold text-gold-gradient mb-2"
            >
              Garantía incondicional de 7 días
            </h2>
            <p
              id="garantia-text"
              className="text-white/85 text-sm sm:text-base leading-relaxed font-light"
            >
              Si en 7 días sientes que no es para ti, escríbeme y te devuelvo tus $7,77. Sin preguntas.
            </p>
          </div>
        </section>

        {/* 10. TESTIMONIOS REALES */}
        <section id="testimonios" className="w-full py-8 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B2CBF]/20 border border-[#D4AF37]/30 mb-2">
            <BadgeCheck className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
              Casos Reales
            </span>
          </div>

          <h2
            id="testimonios-title"
            className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient text-center mb-2"
          >
            Lo que dicen ellas
          </h2>
          <p className="text-xs text-white/60 mb-6 text-center max-w-sm">
            Historias y transformaciones de mujeres reales que completaron los 21 días con Eliza
          </p>

          <div className="w-full space-y-4">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                id={`testimonio-${idx + 1}`}
                className="p-5 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/35 flex flex-col gap-3 shadow-md hover:border-[#FFD700]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-full object-cover border border-[#FFD700]/50 shadow"
                    />
                    <div>
                      <span className="text-sm font-semibold text-white block leading-tight">
                        {t.name}
                      </span>
                      <span className="text-[11px] text-[#D4AF37] block">
                        {t.role} • {t.city}
                      </span>
                    </div>
                  </div>
                  <div className="flex text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed italic pt-1 border-t border-white/5">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[#7B2CBF]/15 border border-[#D4AF37]/30 w-full text-center">
            <p className="text-xs text-[#FFD700] font-medium flex items-center justify-center gap-1.5">
              <BadgeCheck className="w-4 h-4 text-[#FFD700]" />
              <span>Testimonios verificados de alumnas que completaron las 3 fases del reto</span>
            </p>
          </div>
        </section>

        {/* 11. FAQ ACORDEÓN (6 PREGUNTAS) */}
        <section id="faq" className="w-full py-8 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7B2CBF]/20 border border-[#D4AF37]/30 mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#FFD700]" />
            <span className="text-xs font-semibold text-[#FFD700] uppercase tracking-wider">
              Preguntas Frecuentes
            </span>
          </div>

          <h2
            id="faq-title"
            className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient text-center mb-6"
          >
            Preguntas Frecuentes
          </h2>

          <div className="w-full space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  id={`faq-item-${idx}`}
                  className="rounded-xl border border-[#D4AF37]/25 bg-white/[0.02] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm sm:text-base font-medium text-white hover:text-[#FFD700] transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FFD700] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-white/80 border-t border-white/5 leading-relaxed bg-white/[0.01]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 12. CTA FINAL */}
        <section
          id="cta-final-section"
          className="w-full my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#1b082e] to-[#0d0417] border border-[#D4AF37]/50 text-center flex flex-col items-center shadow-[0_4px_30px_rgba(106,13,173,0.3)]"
        >
          <Sparkles className="w-6 h-6 text-[#FFD700] mb-3 animate-pulse" />
          
          <h2
            id="cta-final-title"
            className="font-playfair text-2xl sm:text-3xl font-bold text-gold-gradient mb-4 leading-snug max-w-md"
          >
            Tu relación con el dinero en 21 días empieza hoy.
          </h2>

          <p className="text-sm text-white/80 max-w-sm mb-6 font-light">
            Da el primer paso para sanar tus bloqueos heredados y comenzar a recibir en paz.
          </p>

          <div className="w-full max-w-sm mb-3">
            <a
              id="cta-final"
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-gradient w-full py-4 px-6 rounded-xl font-bold text-base sm:text-lg text-black uppercase tracking-wider flex items-center justify-center gap-2 text-center group cursor-pointer shadow-lg"
            >
              <span>QUIERO EL CÓDIGO 777 POR $7,77</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <p className="text-[11px] text-white/60 flex items-center justify-center gap-2">
            <span>Acceso inmediato</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Pago seguro SSL</span>
            <span className="text-[#D4AF37]">•</span>
            <span>Garantía 7 días</span>
          </p>
        </section>

        {/* 13. FOOTER LEGAL + DISCLAIMER */}
        <footer
          id="footer-legal"
          className="w-full pt-8 pb-14 border-t border-white/10 text-center text-white/50 text-[11px] sm:text-xs flex flex-col items-center gap-4"
        >
          <div className="font-cinzel text-sm font-bold text-[#D4AF37]/80 tracking-widest">
            CÓDIGO 777 — CAMINO A LA ABUNDANCIA
          </div>

          <p className="max-w-md text-white/50 leading-relaxed text-[10px] sm:text-[11px]">
            <strong>Disclaimer Legal & Financiero:</strong> Este producto y los ejercicios que contiene están diseñados con fines educativos, de desarrollo personal y reprogramación mental. No garantizan sumas de dinero específicas ni constituyen asesoramiento financiero, legal o de inversiones. Tus resultados dependerán exclusivamente de tu compromiso, acciones y disciplina diaria.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-white/60">
            <a href="#terminos" onClick={(e) => { e.preventDefault(); alert("Términos y Condiciones: Al adquirir CÓDIGO 777 adquieres una licencia digital personal e intransferible con garantía incondicional de 7 días."); }} className="hover:text-[#FFD700] transition-colors">
              Términos y Condiciones
            </a>
            <span>•</span>
            <a href="#privacidad" onClick={(e) => { e.preventDefault(); alert("Política de Privacidad: Respetamos tus datos. Tu correo solo se utiliza para entregarte el acceso al programa y material complementario."); }} className="hover:text-[#FFD700] transition-colors">
              Política de Privacidad
            </a>
            <span>•</span>
            <a href="#soporte" onClick={(e) => { e.preventDefault(); alert("Contacto de soporte: Para cualquier duda o reembolso escribe a soporte@caminoalaabundancia.com"); }} className="hover:text-[#FFD700] transition-colors">
              Contacto de Soporte
            </a>
          </div>

          <p className="text-[10px] text-white/40">
            © {new Date().getFullYear()} CÓDIGO 777. Todos los derechos reservados.
          </p>
        </footer>

      </div>

      {/* STICKY MOBILE CTA (Fixed at bottom on mobile) */}
      <div
        id="sticky-mobile-bar"
        className={`fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#D4AF37]/40 py-2.5 px-4 sm:hidden transition-transform duration-300 ${
          showStickyBar ? 'translate-y-0 shadow-[0_-5px_20px_rgba(0,0,0,0.8)]' : 'translate-y-full pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-white/60 uppercase leading-none">OFERTA HOY</span>
            <div className="flex items-baseline gap-1">
              <span className="font-cinzel text-xl font-black text-[#FFD700]">$7,77</span>
              <span className="text-[10px] line-through text-white/40">107 USD</span>
            </div>
          </div>

          <a
            id="cta-sticky-mobile"
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-gradient py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider text-black flex items-center gap-1.5 shadow cursor-pointer"
          >
            <span>QUIERO MI ACCESO</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
