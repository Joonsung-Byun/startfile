const ph = document.querySelector('#primaryHeader')

const btn = document.querySelector('button')

const nav = document.querySelector('#primaryNav')
console.log(nav)

let isOpen = false; //오픈인가요? false입니다

btn.addEventListener('click', () => {
    if (isOpen) {
        nav.style.transition = 'transform 0.3s ease';
        nav.style.transform = `translateX(0%)`;
    } else {
        nav.style.transform = ''; // 이 부분은 transform 스타일을 초기화하여 이전 상태로 돌아갑니다.
    }
    isOpen = !isOpen;
});

