Animation
    gsap.to(".container", { duration: 1.5, opacity: 1, scale: 1, ease: "bounce.out" });

    function acceptLove() {
        let yesBtn = document.getElementById("yesBtn");
        let rect = yesBtn.getBoundingClientRect();
        let bigHeart = document.getElementById("bigHeart");
        let flashEffect = document.getElementById("flashEffect");
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;
        let heartCount = 30;
    
        
        for (let i = 0; i < heartCount; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "🩷";
            heart.style.left = `${rect.left + rect.width / 2}px`;
            heart.style.top = `${rect.top + rect.height / 2}px`;
            document.body.appendChild(heart);
    
            let randomX = Math.random() * 400 - 200;
            let randomY = Math.random() * 400 - 200;
    
            
            gsap.to(heart, {
                x: randomX,
                y: randomY,
                opacity: 1,
                scale: 1.2,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    
                    gsap.to(heart, {
                        x: centerX - (rect.left + rect.width / 2),
                        y: centerY - (rect.top + rect.height / 2),
                        scale: 1.5,
                        duration: 1.5,
                        ease: "power2.in",
                        onComplete: () => heart.remove()
                    });
                }
            });
        }
    
        
        setTimeout(() => {
            gsap.to(bigHeart, { opacity: 1, scale: 3, duration: 1, ease: "power2.out" });
        }, 2000);
    
        
        setTimeout(() => {
            gsap.to(flashEffect, { opacity: 1, duration: 1.3, ease: "power1.inOut", onComplete: () => {
                gsap.to(flashEffect, { opacity: 0, duration: 0.3 });
            }});
        }, 2800);
    
        
        setTimeout(() => {
            gsap.to(bigHeart, {
                scale: 100,
                duration: .8,
                ease: "power2.in",
                onComplete: () => {
                    document.body.innerHTML = `
                        <div class="background"></div>
                        <div class="message">
                            <img src="./1.png" alt="img">
                            You are officially mine! 🩷
                        </div>
                    `;
    
                    document.querySelector(".message").style.display = "flex";
                    
                    setTimeout(() => {
                        gsap.to(".background", { opacity: 1, duration: 2, ease: "power2.out" });
                        createFloatingHearts();
                    }, 100);
                }
            });
        }, 3000);
    }
    
    function moveNo() {
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 200 - 100;
        gsap.to("#noBtn", { duration: 0.3, x: x, y: y });
    }
    
    
    function createFloatingHearts() {
        const bg = document.querySelector(".background");
        
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart-float");
            heart.innerHTML = "🩷";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = Math.random() * 100 + "vh";
            heart.style.animationDuration = (Math.random() * 3 + 3) + "s"; 
    
            bg.appendChild(heart);
        }
    }
    

    function moveNo() {
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 200 - 100;
        gsap.to("#noBtn", { duration: 0.3, x: x, y: y });
    }

    
function createFloatingHearts() {
    const bg = document.querySelector(".background");
    
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart-float");
        heart.innerHTML = "🩷";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s"; 

        bg.appendChild(heart);
    }
}






