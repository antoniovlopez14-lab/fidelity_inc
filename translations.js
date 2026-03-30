/**
 * Fidelity Income Tax - Translation File
 * Handles bilingual support (English/Spanish) for all pages including appointments
 */

// ==================== TRANSLATION DICTIONARY ====================
const translations = {
  en: {
    // ========== NAVIGATION ==========
    services: "Services",
    accountant: "Accountant",
    appointments: "Appointments",
    reviews: "Reviews",
    contact: "Contact",
    
    // ========== HERO SECTION ==========
    heroTitle: "Personal & Business Tax Specialists",
    heroText: "Professional tax preparation and planning service for individuals and businesses in Arlington, TX.",
    schedule: "Schedule Appointment",
    secureBadge: "IRS Registered | Secure & Confidential",
    
    // ========== SERVICES SECTION ==========
    servicesTitle: "Our Services",
    service1: "Personal Tax Preparation",
    service2: "Business Tax Services",
    service3: "Tax Planning & Risk Management",
    service4: "Bookkeeping",
    service1Description: "Maximize refunds, minimize stress with expert filing.",
    service2Description: "Corporate, LLC, partnership filings and compliance.",
    service3Description: "Strategic advice to lower liability and protect assets.",
    service4Description: "Accurate records year-round for better decisions.",
    
    // ========== ACCOUNTANT SECTION ==========
    meet: "Meet Dr. Michael Fidelis, PH.D., MST",
    bio: "Experienced tax professional helping individuals and businesses navigate complex tax laws with integrity and precision.",
    publication: "Publication",
    // ========== BOOK SECTION ==========
    book: "Book",
    featuredPublication: "Featured Publication",
    bookTitle: "Tax Practitioners' Perceptions Regarding Fraudulent Earned Income Tax Credit Claims",
    bookAuthor: "By Dr. Michael Fidelis, PH.D., MST",
    bookDescription1: "This groundbreaking research examines tax practitioners' perspectives on detecting and preventing fraudulent Earned Income Tax Credit (EITC) claims. With decades of experience in tax preparation and forensic accounting, Dr. Fidelis provides invaluable insights into:",
    bookFeature1: "Common red flags in EITC claims",
    bookFeature2: "Legal and ethical responsibilities of tax preparers",
    bookFeature3: "Best practices for fraud prevention",
    bookFeature4: "Case studies and real-world applications",
    bookDescription2: "Essential reading for tax professionals, accountants, and anyone interested in maintaining integrity in tax preparation.",
    bookRating: "5.0 out of 5 stars",
    buyAmazon: "Buy on Amazon",
    askAuthor: "Ask the Author",
    endorsement: "\"A must-read for every tax professional. Dr. Fidelis brings unparalleled expertise to this critical topic.\"",
    endorser: "Journal of Tax Practice & Research",
    // ========== REVIEWS SECTION ==========
    reviewsTitle: "Client Reviews",
    
    // ========== CONTACT SECTION ==========
    contactTitle: "Contact Us",
    send: "Send Secure Message",
    
    // ========== APPOINTMENT PAGE ==========
    appointmentSubtitle: "Schedule Your Appointment",
    backHome: "Back to Home",
    scheduleTitle: "Schedule an Appointment",
    scheduleDescription: "Select an available time slot below. All appointments are confirmed via email within 24 hours.",
    uploadTitle: "Upload Required Documents",
    secureUploadTitle: "Secure & Encrypted Transfer",
    secureUploadText: "Your W-2, 1099, ID, and prior returns are protected with 256-bit SSL encryption.",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    uploadLabel: "Upload Documents",
    fileHint: "Accepted files: PDF, JPG, PNG, DOC (Max 20MB per file)",
    recommendedDocs: "📄 Recommended: W-2 forms, 1099 forms, Photo ID, Prior year returns",
    confirmText: "I confirm that the documents I'm uploading are accurate and belong to me.",
    submitButton: "Submit Documents Securely",
    security1: "HIPAA-compliant security standards",
    security2: "Never share your data with third parties",
    footerText: "Confidential & Secure Tax Services",
    returnHome: "Return to Homepage",
    callUs: "Call Us",
    
    // ========== FOOTER ==========
    footerRights: "All Rights Reserved",
    footerPhone: "Call Us"
  },
  
  es: {
    // ========== NAVIGATION ==========
    services: "Servicios",
    accountant: "Contador",
    appointments: "Citas",
    reviews: "Reseñas",
    contact: "Contacto",
    
    // ========== HERO SECTION ==========
    heroTitle: "Especialistas en Impuestos Personales y de Negocios",
    heroText: "Servicio profesional de preparación y planificación de impuestos para individuos y empresas en Arlington, TX.",
    schedule: "Programar Cita",
    secureBadge: "Registrado ante el IRS | Seguro y Confidencial",
    
    // ========== SERVICES SECTION ==========
    servicesTitle: "Nuestros Servicios",
    service1: "Preparación de Impuestos Personales",
    service2: "Servicios de Impuestos para Negocios",
    service3: "Planificación de Impuestos y Gestión de Riesgos",
    service4: "Contabilidad",
    service1Description: "Maximice reembolsos, minimice el estrés con presentación experta.",
    service2Description: "Presentaciones y cumplimiento para corporaciones, LLC, sociedades.",
    service3Description: "Asesoramiento estratégico para reducir la responsabilidad y proteger activos.",
    service4Description: "Registros precisos durante todo el año para mejores decisiones.",
    
    // ========== ACCOUNTANT SECTION ==========
    meet: "Conozca al Dr. Michael Fidelis, PH.D., MST",
    bio: "Profesional de impuestos con experiencia ayudando a individuos y empresas a navegar leyes tributarias complejas con integridad y precisión.",
    publication: "Publicación",
    
    // ========== REVIEWS SECTION ==========
    reviewsTitle: "Reseñas de Clientes",
    
    // ========== CONTACT SECTION ==========
    contactTitle: "Contáctenos",
    send: "Enviar Mensaje Seguro",
    
    // ========== APPOINTMENT PAGE ==========
    appointmentSubtitle: "Programe su Cita",
    backHome: "Volver al Inicio",
    scheduleTitle: "Programar una Cita",
    scheduleDescription: "Seleccione un horario disponible a continuación. Todas las citas se confirman por correo electrónico dentro de 24 horas.",
    uploadTitle: "Subir Documentos Requeridos",
    secureUploadTitle: "Transferencia Segura y Encriptada",
    secureUploadText: "Sus formularios W-2, 1099, identificación y declaraciones anteriores están protegidos con encriptación SSL de 256 bits.",
    fullNameLabel: "Nombre Completo",
    fullNamePlaceholder: "Ingrese su nombre completo",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "su@email.com",
    uploadLabel: "Subir Documentos",
    fileHint: "Archivos aceptados: PDF, JPG, PNG, DOC (Máx 20MB por archivo)",
    recommendedDocs: "📄 Recomendado: Formularios W-2, formularios 1099, Identificación con foto, Declaraciones de años anteriores",
    confirmText: "Confirmo que los documentos que estoy subiendo son precisos y me pertenecen.",
    submitButton: "Enviar Documentos de Forma Segura",
    security1: "Estándares de seguridad compatibles con HIPAA",
    security2: "Nunca compartimos sus datos con terceros",
    footerText: "Servicios de Impuestos Confidenciales y Seguros",
    returnHome: "Volver a la Página Principal",
    callUs: "Llámenos",


    // ========== Book SECTION ==========
    
    book: "Libro",
    featuredPublication: "Publicación Destacada",
    bookTitle: "Percepciones de los Profesionales Tributarios sobre Reclamaciones Fraudulentas del Crédito Tributario por Ingreso del Trabajo",
    bookAuthor: "Por Dr. Michael Fidelis, PH.D., MST",
    bookDescription1: "Esta investigación innovadora examina las perspectivas de los profesionales tributarios sobre la detección y prevención de reclamaciones fraudulentas del Crédito Tributario por Ingreso del Trabajo (EITC). Con décadas de experiencia en preparación de impuestos y contabilidad forense, el Dr. Fidelis proporciona información invaluable sobre:",
    bookFeature1: "Señales de alerta comunes en reclamaciones de EITC",
    bookFeature2: "Responsabilidades legales y éticas de los preparadores de impuestos",
    bookFeature3: "Mejores prácticas para la prevención de fraude",
    bookFeature4: "Estudios de caso y aplicaciones prácticas",
    bookDescription2: "Lectura esencial para profesionales tributarios, contadores y cualquier persona interesada en mantener la integridad en la preparación de impuestos.",
    bookRating: "5.0 de 5 estrellas",
    buyAmazon: "Comprar en Amazon",
    askAuthor: "Preguntar al Autor",
    endorsement: "\"Una lectura obligada para todo profesional tributario. El Dr. Fidelis aporta una experiencia incomparable a este tema crítico.\"",
    endorser: "Journal of Tax Practice & Research",
        
    // ========== FOOTER ==========
    footerRights: "Todos los Derechos Reservados",
    footerPhone: "Llámenos"
  }
};

// ==================== LANGUAGE STATE ====================
let currentLang = "en";

// ==================== TOGGLE LANGUAGE FUNCTION ====================
/**
 * Switches between English and Spanish translations
 * Updates all elements with data-translate attribute
 * Also updates placeholder text for inputs
 */
function toggleLanguage() {
  // Switch language
  currentLang = currentLang === "en" ? "es" : "en";
  
  // Store preference in localStorage for persistence across pages
  localStorage.setItem("preferredLanguage", currentLang);
  
  // Update all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  // Update placeholder text for inputs with data-translate-placeholder
  document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
  
  // Update HTML lang attribute for accessibility
  document.documentElement.lang = currentLang;
  
  // Update language button text (optional visual feedback)
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.innerHTML = currentLang === "en" ? "🌐 EN / ES" : "🌐 ES / EN";
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
  
  // Optional: Add visual feedback for translation
  console.log(`Language switched to: ${currentLang === "en" ? "English" : "Español"}`);
}

// ==================== AUTO-DETECT PREFERRED LANGUAGE ====================
/**
 * Detects user's browser language or previously saved preference
 */
function detectPreferredLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem("preferredLanguage");
  if (savedLang && (savedLang === "en" || savedLang === "es")) {
    if (savedLang !== currentLang) {
      toggleLanguage();
    }
    return;
  }
  
  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang && browserLang.startsWith("es")) {
    if (currentLang !== "es") {
      toggleLanguage();
    }
  }
}

// ==================== INITIALIZE TRANSLATIONS ====================
/**
 * Sets up translations on page load
 */
document.addEventListener("DOMContentLoaded", function() {
  // Apply translations to all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  // Apply placeholder translations
  document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[currentLang][key]) {
      el.placeholder = translations[currentLang][key];
    }
  });
  
  // Detect and apply preferred language
  detectPreferredLanguage();
  
  // Set HTML lang attribute
  document.documentElement.lang = currentLang;
  
  // Update language button text
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.innerHTML = currentLang === "en" ? "🌐 EN / ES" : "🌐 ES / EN";
  });
});

// ==================== EXPORT FOR MODULE USE (if needed) ====================
if (typeof module !== "undefined" && module.exports) {
  module.exports = { translations, toggleLanguage, currentLang };
}