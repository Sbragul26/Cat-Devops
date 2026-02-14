import { Home, Wrench, Hammer, Settings, Code } from "lucide-react";
import { useEffect, useRef } from "react";

export default function UnderDevelopment() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const toolsRef = useRef(null);
  const buttonRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressFillRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const gsap = window.gsap;
      
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, toolsRef.current, buttonRef.current, progressBarRef.current, footerRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(progressFillRef.current, {
        width: "0%"
      });

      // Create main timeline
      const tl = gsap.timeline();

      // Animate elements in sequence
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5")
      .to(toolsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .to(progressBarRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
      .to(progressFillRef.current, {
        width: "67%",
        duration: 2,
        ease: "power2.inOut"
      }, "-=0.2")
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=1")
      .to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3");

      // Floating animation for tools
      gsap.to(".tool-icon", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

      // Rotate settings icon continuously
      gsap.to(".settings-icon", {
        rotation: 360,
        duration: 4,
        ease: "none",
        repeat: -1
      });

      // Pulse animation for progress text
      gsap.to(".progress-text", {
        scale: 1.05,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Button hover animations
      const button = buttonRef.current;
      if (button) {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="max-w-6xl font-roboto mx-auto py-6 px-4 sm:px-6 bg-white rounded-lg shadow-sm min-h-screen flex flex-col justify-center items-center"
    >
      {/* Main Title */}
<h1
  ref={titleRef}
  className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 text-center flex items-center justify-center gap-2"
>
  <Code className="text-green-600 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
  <span>Under Development</span>
</h1>


      <div className="flex flex-col gap-8 sm:gap-12 text-center">
        <div className="space-y-8">
          {/* Subtitle */}
          <div ref={subtitleRef}>
            <p className="text-gray-600 text-xl sm:text-2xl mb-4">
              We're building something amazing!
            </p>
            <p className="text-gray-600 text-lg sm:text-xl font-saira">
            Crafting every detail to showcase my skills and projects perfectly.
            </p>
          </div>

          {/* Animated Tools */}
          <div ref={toolsRef} className="flex justify-center gap-6 my-8">
            <Wrench size={40} className="tool-icon text-blue-600" />
            <Hammer size={40} className="tool-icon text-orange-600" />
            <Settings size={40} className="tool-icon settings-icon text-green-600" />
          </div>

          {/* Progress Bar */}
          <div ref={progressBarRef} className="w-full max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="progress-text text-sm font-bold text-blue-600">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                ref={progressFillRef}
                className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
              ></div>
            </div>
          </div>

          {/* Estimated Completion */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Coming Soon</h3>
            <p className="text-gray-600">
              I'm putting the finishing touches on my portfolio. Check back soon!
            </p>
          </div>

          {/* Return Home Button */}
          <div className="flex flex-col gap-2 items-center">
            <p className="font-bold text-xl">Meanwhile, visit:</p>
            <button
              ref={buttonRef}
              onClick={() => window.location.href = "/"}
              className="p-3 px-6 font-special text-center text-sm bg-black border border-zinc-200 text-white rounded-md hover:bg-gray-50 hover:text-black transition-colors flex items-center justify-center gap-2 transform hover:scale-105 cursor-pointer"
            >
              <Home size={20} />
              Home()
            </button>
          </div>
        </div>

        {/* Footer section */}
        <div ref={footerRef} className="flex flex-col gap-4 mt-6 w-full">
          <div className="w-full border-2 border-gray-200"></div>
          <div className="text-black text-sm sm:text-base">
            <span>Copyright © 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}