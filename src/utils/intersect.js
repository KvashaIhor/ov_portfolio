function updateIntersection() {
    const background = document.querySelector('.hero__photographer');
    const text = document.querySelector('.button');
    const whiteText = document.getElementById('white-button');
    
    const bgRect = background.getBoundingClientRect();
    const textRect = text.getBoundingClientRect();
    
    
    const left = Math.max(textRect.left, bgRect.left) - textRect.left;
    const right = Math.min(textRect.right, bgRect.right) - textRect.left;
    const top = Math.max(textRect.top, bgRect.top) - textRect.top;
    const bottom = Math.min(textRect.bottom, bgRect.bottom) - textRect.top;
    
    
    if (left < right && top < bottom) {
        whiteText.style.clipPath = `polygon(${left}px ${top}px, ${right}px ${top}px, ${right}px ${bottom}px, ${left}px ${bottom}px)`;
        whiteText.style.opacity = '1';
    } else {
        whiteText.style.opacity = '0';
    }
}