document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // 设置自动轮播间隔（毫秒）
    const autoSlideInterval = 1500;
    let autoSlideTimer;
    
    // 初始化轮播图
    function initCarousel() {
        updateSlides();
        startAutoSlide();
        
        // 添加事件监听
        prevBtn.addEventListener('click', showPrevSlide);
        nextBtn.addEventListener('click', showNextSlide);
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlides();
                resetAutoSlide();
            });
        });
        
        // 当鼠标悬停在轮播图上时，暂停自动轮播
        carousel.addEventListener('mouseenter', pauseAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
    
    // 显示上一张幻灯片
    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlides();
        resetAutoSlide();
    }
    
    // 显示下一张幻灯片
    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlides();
        resetAutoSlide();
    }
    
    // 更新幻灯片和指示器的状态
    function updateSlides() {
        // 更新幻灯片
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // 更新指示器
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // 开始自动轮播
    function startAutoSlide() {
        autoSlideTimer = setInterval(showNextSlide, autoSlideInterval);
    }
    
    // 暂停自动轮播
    function pauseAutoSlide() {
        clearInterval(autoSlideTimer);
    }
    
    // 重置自动轮播（用户交互后）
    function resetAutoSlide() {
        pauseAutoSlide();
        startAutoSlide();
    }
    
    // 初始化轮播图
    initCarousel();
    
    // 赞助模态框功能
    const donateBtn = document.getElementById('donateBtn');
    const headerDonateBtn = document.getElementById('headerDonateBtn');
    const donateModal = document.getElementById('donateModal');
    const howToPlayBtn = document.getElementById('howToPlayBtn');
    const howToPlayModal = document.getElementById('howToPlayModal');
    const closeModals = document.querySelectorAll('.close-modal');
    
    // 打开赞助模态框
    function openDonateModal() {
        donateModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    
    // 打开怎么玩模态框
    function openHowToPlayModal() {
        howToPlayModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    
    // 关闭模态框
    function closeModal() {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
        });
        
        setTimeout(() => {
            document.body.style.overflow = ''; // 恢复背景滚动
        }, 300);
    }
    
    // 点击模态框外部区域关闭
    function handleModalClick(e) {
        if (e.target === this) {
            closeModal();
        }
    }
    
    // 按ESC键关闭模态框
    function handleEscKey(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }
    
    // 添加事件监听
    if (donateBtn) {
        donateBtn.addEventListener('click', openDonateModal);
    }
    
    if (headerDonateBtn) {
        headerDonateBtn.addEventListener('click', openDonateModal);
    }
    
    if (howToPlayBtn) {
        howToPlayBtn.addEventListener('click', openHowToPlayModal);
    }
    
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', handleModalClick);
    });
    
    document.addEventListener('keydown', handleEscKey);
}); 