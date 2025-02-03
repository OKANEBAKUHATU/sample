document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const intervalTime = 3000; // 3秒ごとに切り替え

function showSlide(index) {
    // スライドを移動
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}vw)`;

    // アクティブなクラスを更新
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// 自動スライド
function startSlideShow() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, intervalTime);
}

// ドットをクリックしたら対応するスライドを表示
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(currentIndex);
    });
});

// スライドショー開始
startSlideShow();
