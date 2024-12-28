{/* <script> */}
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    
        // GSAP Animation for text
        gsap.utils.toArray(".animate-text").forEach((text) => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 90%", // Start the animation when the top of the text is 80% from the top of the viewport

                    toggleActions: "play none none reverse", // Play on enter, reverse on leave
                },
                duration: 1,
                opacity: 0,
                y: 50, // Move from down to up
                ease: "power2.out"
            });
        });
    // </script>