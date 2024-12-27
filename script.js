const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허@#$%^&*()";
const matrix = letters.split("");

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.onload = function() {
    const mewContainer = document.querySelector('.mew-container');
    setTimeout(() => {
        mewContainer.style.opacity = 1; // Thay đổi độ mờ thành 1 sau 2 giây
    }, 2000); // Thời gian chờ 2 giây
};


document.addEventListener("DOMContentLoaded", function() {
    const text = "ΑιGгΟk is an AI-assisted investment fund targeting a blend of large, mid, and small-cap AI opportunities. Powered by ΑιGгΟk’s proprietary dataset and algorithms, it combines human expertise with AI analysis to identify transformative projects across the AI landscape. As the fund evolves, it will transition to fully AI-driven strategies, delivering precision and real-time insights to shape the future of autonomous finance.";
    
    const textElement = document.getElementById("text");
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Thay đổi tốc độ đánh chữ tại đây
        }
    }

    type(); // Bắt đầu hiệu ứng đánh chữ
});