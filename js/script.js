* Fidelity Income Tax - Main JavaScript File
 * Handles mobile menu, smooth scrolling, form validation, and interactive features
 */

// ==================== MOBILE MENU TOGGLE ====================
/**
 * Toggles the mobile navigation menu visibility
 * Used on responsive design for small screens
 */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

// ==================== CLOSE MENU ON LINK CLICK ====================
/**
 * Automatically closes mobile menu when a navigation link is clicked
 * Improves user experience on mobile devices
 */
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("#navMenu a");
  const navMenu = document.getElementById("navMenu");
  
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      if (navMenu && window.innerWidth <= 900) {
        navMenu.classList.remove("active");
      }
    });
  });
  
  // ==================== SMOOTH SCROLLING ====================
  /**
   * Implements smooth scrolling for anchor links
   * Enhances navigation experience
   */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      
      // Skip if it's just "#" or empty
      if (targetId === "#" || targetId === "") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
  
  // ==================== FORM VALIDATION ====================
  /**
   * Adds client-side form validation for contact forms
   * Improves user experience before submission
   */
  const contactForms = document.querySelectorAll("form");
  contactForms.forEach(form => {
    form.addEventListener("submit", function(e) {
      const requiredFields = form.querySelectorAll("[required]");
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = "#e74c3c";
          
          // Add error message if not exists
          let errorMsg = field.parentNode.querySelector(".error-message");
          if (!errorMsg) {
            errorMsg = document.createElement("small");
            errorMsg.className = "error-message";
            errorMsg.style.color = "#e74c3c";
            errorMsg.style.fontSize = "0.7rem";
            errorMsg.style.marginTop = "0.25rem";
            field.parentNode.insertBefore(errorMsg, field.nextSibling);
          }
          errorMsg.textContent = "This field is required";
        } else {
          field.style.borderColor = "#cfdfe8";
          const errorMsg = field.parentNode.querySelector(".error-message");
          if (errorMsg) {
            errorMsg.remove();
          }
        }
        
        // Email validation
        if (field.type === "email" && field.value.trim()) {
          const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            isValid = false;
            field.style.borderColor = "#e74c3c";
            let errorMsg = field.parentNode.querySelector(".error-message");
            if (!errorMsg) {
              errorMsg = document.createElement("small");
              errorMsg.className = "error-message";
              errorMsg.style.color = "#e74c3c";
              errorMsg.style.fontSize = "0.7rem";
              field.parentNode.insertBefore(errorMsg, field.nextSibling);
            }
            errorMsg.textContent = "Please enter a valid email address";
          }
        }
        
        // Phone validation (optional but if provided, validate format)
        if (field.type === "tel" && field.value.trim()) {
          const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
          if (!phoneRegex.test(field.value)) {
            isValid = false;
            field.style.borderColor = "#e74c3c";
            let errorMsg = field.parentNode.querySelector(".error-message");
            if (!errorMsg) {
              errorMsg = document.createElement("small");
              errorMsg.className = "error-message";
              errorMsg.style.color = "#e74c3c";
              errorMsg.style.fontSize = "0.7rem";
              field.parentNode.insertBefore(errorMsg, field.nextSibling);
            }
            errorMsg.textContent = "Please enter a valid phone number";
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        // Scroll to first error
        const firstError = form.querySelector("[style*='border-color: rgb(231, 76, 60)']");
        if (firstError) {
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    });
    
    // Clear error styling on input
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      input.addEventListener("input", function() {
        this.style.borderColor = "#cfdfe8";
        const errorMsg = this.parentNode.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }
      });
    });
  });
  
  // ==================== FILE UPLOAD VALIDATION ====================
  /**
   * Validates file uploads on appointments page
   * Checks file size and type
   */
  const fileInputs = document.querySelectorAll("input[type='file']");
  fileInputs.forEach(fileInput => {
    fileInput.addEventListener("change", function() {
      const files = this.files;
      const maxSize = 20 * 1024 * 1024; // 20MB
      let isValid = true;
      
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileSize = file.size;
        const fileName = file.name;
        const fileExt = fileName.split(".").pop().toLowerCase();
        const allowedExts = ["pdf", "jpg", "jpeg", "png", "doc", "docx"];
        
        if (!allowedExts.includes(fileExt)) {
          isValid = false;
          alert(`File "${fileName}" has an invalid format. Allowed formats: PDF, JPG, PNG, DOC, DOCX`);
          this.value = "";
          break;
        }
        
        if (fileSize > maxSize) {
          isValid = false;
          alert(`File "${fileName}" exceeds 20MB limit. Please compress or split the file.`);
          this.value = "";
          break;
        }
      }
      
      if (isValid && files.length > 0) {
        // Show success indicator
        const fileLabel = this.parentNode.querySelector(".file-valid");
        if (!fileLabel) {
          const successMsg = document.createElement("small");
          successMsg.className = "file-valid";
          successMsg.style.color = "#2c7a4d";
          successMsg.style.marginTop = "0.25rem";
          successMsg.innerHTML = "✓ File(s) selected successfully";
          this.parentNode.appendChild(successMsg);
          
          setTimeout(() => {
            successMsg.remove();
          }, 3000);
        }
      }
    });
  });
  
  // ==================== ADD SECURITY HEADER TO FORMS ====================
  /**
   * Adds hidden security token to forms for CSRF protection simulation
   */
  const allForms = document.querySelectorAll("form");
  allForms.forEach(form => {
    // Add a timestamp to prevent caching issues
    const timestamp = Date.now();
    const timestampInput = document.createElement("input");
    timestampInput.type = "hidden";
    timestampInput.name = "_timestamp";
    timestampInput.value = timestamp;
    form.appendChild(timestampInput);
    
    // Add a honeypot field to catch bots (hidden from real users)
    const honeypot = document.createElement("input");
    honeypot.type = "text";
    honeypot.name = "_honey";
    honeypot.style.display = "none";
    honeypot.setAttribute("autocomplete", "off");
    form.appendChild(honeypot);
  });
  
  // ==================== BACK TO TOP BUTTON ====================
  /**
   * Creates and manages a "Back to Top" button for better navigation
   */
  const backToTopBtn = document.createElement("button");
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.className = "back-to-top";
  backToTopBtn.setAttribute("aria-label", "Back to top");
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #2c7a4d;
    color: white;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: 0.2s;
    z-index: 999;
  `;
  
  backToTopBtn.addEventListener("mouseenter", () => {
    backToTopBtn.style.background = "#1f5e3a";
    backToTopBtn.style.transform = "translateY(-2px)";
  });
  
  backToTopBtn.addEventListener("mouseleave", () => {
    backToTopBtn.style.background = "#2c7a4d";
    backToTopBtn.style.transform = "translateY(0)";
  });
  
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  document.body.appendChild(backToTopBtn);
  
  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  
  // ==================== ANIMATE ON SCROLL ====================
  /**
   * Adds fade-in animation to elements when they come into view
   * Improves visual engagement
   */
  const animatedElements = document.querySelectorAll(".service-card, .review-card, .accountant-container");
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
  
  // ==================== PHONE NUMBER FORMATTING ====================
  /**
   * Auto-formats phone number inputs for better UX
   */
  const phoneInputs = document.querySelectorAll("input[type='tel']");
  phoneInputs.forEach(input => {
    input.addEventListener("input", function(e) {
      let value = this.value.replace(/\D/g, "");
      if (value.length >= 10) {
        value = value.slice(0, 10);
        const formatted = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        this.value = formatted;
      }
    });
  });
  
  // ==================== GOOGLE ANALYTICS PLACEHOLDER ====================
  /**
   * Initialize analytics if tracking ID is provided
   * Uncomment and add your GA4 measurement ID to enable
   */
  /*
  if (window.location.hostname !== "localhost") {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }
  */
  
  // ==================== CONSOLE SECURITY MESSAGE ====================
  /**
   * Display security notice in console to deter malicious activity
   */
  console.log("%c🔒 Fidelity Income Tax - Secure Site", "color: #2c7a4d; font-size: 16px; font-weight: bold;");
  console.log("%cThis is a secure website. Unauthorized access attempts are logged.", "color: #0a2f44; font-size: 12px;");
});

// ==================== WINDOW LOAD HANDLER ====================
/**
 * Ensures all resources are loaded before additional processing
 */
window.addEventListener("load", function() {
  // Add loading complete class to body
  document.body.classList.add("loaded");
  
  // Preload important images for better performance
  const images = document.querySelectorAll("img[loading='lazy']");
  if ("loading" in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    console.log("Native lazy loading supported");
  } else {
    // Fallback for older browsers
    const lazyLoadScript = document.createElement("script");
    lazyLoadScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    document.body.appendChild(lazyLoadScript);
  }
});

// ==================== FORM RESET HANDLER ====================
/**
 * Clear form errors when resetting
 */
const resetButtons = document.querySelectorAll("input[type='reset'], button[type='reset']");
resetButtons.forEach(btn => {
  btn.addEventListener("click", function() {
    const form = this.closest("form");
    if (form) {
      setTimeout(() => {
        const errorMessages = form.querySelectorAll(".error-message");
        errorMessages.forEach(msg => msg.remove());
        
        const inputs = form.querySelectorAll("input, textarea");
        inputs.forEach(input => {
          input.style.borderColor = "#cfdfe8";
        });
      }, 10);
    }
  });
});
