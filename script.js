document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    
    // 初始化轮播图
    function initCarousel() {
        // 复制所有幻灯片并添加到末尾，用于无缝循环
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            carouselContainer.appendChild(clone);
        });
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
    function openDonateModal(e) {
        e.preventDefault();
        donateModal.style.display = 'flex';
        // 触发重绘
        donateModal.offsetHeight;
        donateModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    
    // 打开怎么玩模态框
    function openHowToPlayModal(e) {
        e.preventDefault();
        howToPlayModal.style.display = 'flex';
        // 触发重绘
        howToPlayModal.offsetHeight;
        howToPlayModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
    
    // 关闭模态框
    function closeModal() {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
            
            // 等待动画完成后隐藏模态框
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = ''; // 恢复背景滚动
            }, 300);
        });
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