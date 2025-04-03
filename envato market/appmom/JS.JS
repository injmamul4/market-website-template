document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".ul-2").classList.toggle("active");
});



    document.querySelectorAll(".faq-question").forEach(item => {
        item.addEventListener("click", () => {
            let answer = item.nextElementSibling;
            let isActive = item.classList.contains("active");

            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-question").forEach(qs => {
                qs.classList.remove("active");
                qs.querySelector("span").textContent = "+";
            });

            if (!isActive) {
                answer.style.display = "block";
                item.classList.add("active");
                item.querySelector("span").textContent = "-";
            }
        });
    });



    document.addEventListener("DOMContentLoaded", function () {
        function animateValue(element, start, end, duration) {
            let startTime = null;
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                let progress = timestamp - startTime;
                let current = Math.min(start + (progress / duration) * (end - start), end);
                element.textContent = Math.floor(current);
                if (current < end) {
                    requestAnimationFrame(step);
                }
            }
            requestAnimationFrame(step);
        }
        
        const counters = document.querySelectorAll(".rating-2 span");
        const values = [200, 100, 150, 50];
        
        counters.forEach((counter, index) => {
            animateValue(counter, 0, values[index], 2000);
        });
    });
    
