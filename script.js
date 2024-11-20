function scrollInfo() {
    const infoSection = document.querySelector('.title');
    const checkbox = document.querySelector('.checkbox');

    checkbox.checked = false;

    if (infoSection) {
        // Если элемент найден на текущей странице, прокручиваем к нему
        infoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Если элемент не найден, перенаправляем на index.html с добавлением хеша
        window.location.href = 'index.html#title';
    }
}

if (window.location.hash === '#title') {
    window.addEventListener('DOMContentLoaded', (event) => {
        const infoSection = document.querySelector('.title');
        if (infoSection) {
            // Прокручиваем до элемента
            infoSection.scrollIntoView({ behavior: 'smooth' });

            // Очищаем кеш URL
            history.replaceState(null, document.title, window.location.pathname);
        }
    });
}


function scrollToProjects() {
    const projectsSection = document.querySelector('.projects');
    const checkbox = document.querySelector('.checkbox');

    // Снимаем галочку с чекбокса
    checkbox.checked = false;

    if (projectsSection) {
        // Если элемент найден на текущей странице, прокручиваем к нему
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Если элемент не найден, перенаправляем на index.html с добавлением хеша
        window.location.href = 'index.html#projects';
    }
}

if (window.location.hash === '#projects') {
    window.addEventListener('DOMContentLoaded', (event) => {
        const projectsSection = document.querySelector('.projects');
        if (projectsSection) {
            // Прокручиваем до элемента
            projectsSection.scrollIntoView({ behavior: 'smooth' });

            // Очищаем кеш URL
            history.replaceState(null, document.title, window.location.pathname);
        }
    });
}

function scrollPrice () {
    const priceSection = document.querySelector('.predloz-container');
    const checkbox = document.querySelector('.checkbox');

    checkbox.checked = false;

    if (priceSection) {
        // Если элемент найден на текущей странице, прокручиваем к нему
        priceSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Если элемент не найден, перенаправляем на index.html с добавлением хеша
        window.location.href = 'index.html#predloz-container';
    }
}


if (window.location.hash === '#predloz-container') {
    window.addEventListener('DOMContentLoaded', (event) => {
        const priceSection = document.querySelector('.predloz-container');
        if (priceSection) {
            // Прокручиваем до элемента
            priceSection.scrollIntoView({ behavior: 'smooth' });

            // Очищаем кеш URL
            history.replaceState(null, document.title, window.location.pathname);
        }
    });
}


function scrollStage () {
    const StageSection = document.querySelector('.stages');
    const checkbox = document.querySelector('.checkbox');

    checkbox.checked = false;

    if (StageSection) {
        // Если элемент найден на текущей странице, прокручиваем к нему
        StageSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Если элемент не найден, перенаправляем на index.html с добавлением хеша
        window.location.href = 'index.html#predloz-container';
    }
}

if (window.location.hash === '#stages') {
    window.addEventListener('DOMContentLoaded', (event) => {
        const StageSection = document.querySelector('.stages');
        if (StageSection) {
            // Прокручиваем до элемента
            StageSection.scrollIntoView({ behavior: 'smooth' });

            // Очищаем кеш URL
            history.replaceState(null, document.title, window.location.pathname);
        }
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const promoVideo = document.getElementById('promo_video');
    const btnLeft = document.getElementById('btnscroll');
    const btnRight = document.getElementById('btnscroll2');

    if (btnLeft && btnRight) {
        btnLeft.addEventListener('click', function() {
            // Прокручиваем на 430px влево с плавным эффектом
            promoVideo.scrollTo({
                left: promoVideo.scrollLeft - 430,
                behavior: 'smooth'
            });
        });

        btnRight.addEventListener('click', function() {
            // Прокручиваем на 430px вправо с плавным эффектом
            promoVideo.scrollTo({
                left: promoVideo.scrollLeft + 430,
                behavior: 'smooth'
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const promoVideo = document.getElementById('project_container');
    const btnLeft = document.getElementById('btnscroll3');
    const btnRight = document.getElementById('btnscroll4');

    window.addEventListener('error', function(error) {
        console.error('Ошибка JavaScript:', error.message);
    });

    if (btnLeft && btnRight) {
        btnLeft.addEventListener('click', function() {
            // Прокручиваем на 430px влево с плавным эффектом
            promoVideo.scrollTo({
                left: promoVideo.scrollLeft - 430,
                behavior: 'smooth'
            });
        });

        btnRight.addEventListener('click', function() {
            // Прокручиваем на 430px вправо с плавным эффектом
            promoVideo.scrollTo({
                left: promoVideo.scrollLeft + 430,
                behavior: 'smooth'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const sliderImg = document.querySelector('.slider_img');

    if (sliderImg) {
        // Получаем ширину слайдера
        const sliderWidth = sliderImg.scrollWidth;
        // Вычисляем 5% от ширины
        const scrollAmount = sliderWidth * 0.05;

        // Прокручиваем влево на 5%
        sliderImg.scrollTo({
            right: sliderImg.scrolright - scrollAmount,
            behavior: 'smooth'
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Выбор элемента по его идентификатору
    const element = document.getElementById('header');

    // Проверка, что элемент существует
    if (element) {
        // Получение высоты элемента
        const elementHeight = element.offsetHeight;

        // Вывод высоты в консоль или использование переменной
        console.log('Высота элемента:', elementHeight);

        const element2 = document.getElementById('main');

        // Установка margin-top элемента
        if (element2) {
            element2.style.marginTop = (elementHeight) + 'px';
        } else {
            console.log('Элемент с ID "main" не найден');
        }
    } else {
        console.log('Элемент с ID "header" не найден');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Выбор элемента по его идентификатору
    const element = document.getElementById('header');

    // Проверка, что элемент существует
    if (element) {
        // Получение высоты элемента
        const elementHeight = element.offsetHeight;

        // Вывод высоты в консоль или использование переменной
        console.log('Высота элемента:', elementHeight);

        const element2 = document.getElementById('menu-items');

        // Установка margin-top элемента
        if (element2) {
            element2.style.top = (elementHeight) + 'px';
        } else {
            console.log('Элемент с ID "main" не найден');
        }
    } else {
        console.log('Элемент с ID "header" не найден');
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById("cursor");
    const amount = 20;
    const sineDots = Math.floor(amount * 0.3);
    const width = 26;
    const idleTimeout = 150;
    let lastFrame = 0;
    let mousePosition = {x: 0, y: 0};
    let dots = [];
    let timeoutID;
    let idle = false;
    let hoverButton;
    let hoverTL;

    class HoverButton {
        constructor(id) {
            this.hovered = false;
            this.animatingHover = false;
            this.forceOut = false;
            this.timing = 0.65;
            this.el = document.getElementById(id);
            this.bg = this.el.getElementsByClassName("bg")[0];
            this.el.addEventListener("mouseenter", this.onMouseEnter);
            this.el.addEventListener("mouseleave", this.onMouseLeave);
        }

        onMouseEnter = () => {
            this.hoverInAnim();
        };

        hoverInAnim = () => {
            if (!this.hovered) {
                this.hovered = true;
                this.animatingHover = true;
                this.forceOut = false;
                TweenMax.fromTo(
                    this.bg,
                    this.timing,
                    {x: "-112%"},
                    {
                        x: "-12%",
                        ease: Power3.easeOut,
                        onComplete: () => {
                            this.animatingHover = false;
                            if (this.forceOut) {
                                this.foceOut = false;
                                this.hoverOutAnim();
                            }
                        }
                    }
                );
            }
        };

        onMouseLeave = () => {
            if (!this.animatingHover) {
                this.hoverOutAnim();
            } else {
                this.forceOut = true;
            }
        };

        hoverOutAnim = () => {
            this.hovered = false;
            TweenMax.to(this.bg, this.timing, {
                x: "100%",
                ease: Power3.easeOut,
                onComplete: () => {
                }
            });
        };
    }

    class Dot {
        constructor(index = 0) {
            this.index = index;
            this.anglespeed = 0.05;
            this.x = 0;
            this.y = 0;
            this.scale = 1 - 0.05 * index;
            this.range = width / 2 - width / 2 * this.scale + 2;
            this.limit = width * 0.75 * this.scale;
            this.element = document.createElement("span");
            TweenMax.set(this.element, {scale: this.scale});
            cursor.appendChild(this.element);
        }

        lock() {
            this.lockX = this.x;
            this.lockY = this.y;
            this.angleX = Math.PI * 2 * Math.random();
            this.angleY = Math.PI * 2 * Math.random();
        }

        draw(delta) {
            if (!idle || this.index <= sineDots) {
                TweenMax.set(this.element, {x: this.x, y: this.y});
            } else {
                this.angleX += this.anglespeed;
                this.angleY += this.anglespeed;
                this.y = this.lockY + Math.sin(this.angleY) * this.range;
                this.x = this.lockX + Math.sin(this.angleX) * this.range;
                TweenMax.set(this.element, {x: this.x, y: this.y});
            }
        }
    }

    class Circle {
        constructor(id) {
            const el = document.getElementById(id);
            const parent = el.parentElement;
            parent.removeChild(el);
            const chars = el.innerText.split("");
            chars.push(" ");
            for (let i = 0; i < chars.length; i++) {
                const span = document.createElement("span");
                span.innerText = chars[i];
                span.className = `char${i + 1}`;
                parent.appendChild(span);
            }
        }
    }

    function init() {
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
        hoverButton = new HoverButton("button");
        // eslint-disable-next-line no-new
        new Circle("circle-content");
        lastFrame += new Date();
        buildDots();
        render();
    }

    /*function limit(value, min, max) {
        return Math.min(Math.max(min, value), max);
    }*/

    function startIdleTimer() {
        timeoutID = setTimeout(goInactive, idleTimeout);
        idle = false;
    }

    function resetIdleTimer() {
        clearTimeout(timeoutID);
        startIdleTimer();
    }

    function goInactive() {
        idle = true;
        for (let dot of dots) {
            dot.lock();
        }
    }

    function buildDots() {
        for (let i = 0; i < amount; i++) {
            let dot = new Dot(i);
            dots.push(dot);
        }
    }

    const onMouseMove = event => {
        mousePosition.x = event.clientX - width / 2;
        mousePosition.y = event.clientY - width / 2;
        resetIdleTimer();
    };

    const onTouchMove = () => {
        mousePosition.x = event.touches[0].clientX - width / 2;
        mousePosition.y = event.touches[0].clientY - width / 2;
        resetIdleTimer();
    };

    const render = timestamp => {
        const delta = timestamp - lastFrame;
        positionCursor(delta);
        lastFrame = timestamp;
        requestAnimationFrame(render);
    };

    const positionCursor = delta => {
        let x = mousePosition.x;
        let y = mousePosition.y;
        dots.forEach((dot, index, dots) => {
            let nextDot = dots[index + 1] || dots[0];
            dot.x = x;
            dot.y = y;
            dot.draw(delta);
            if (!idle || index <= sineDots) {
                const dx = (nextDot.x - dot.x) * 0.35;
                const dy = (nextDot.y - dot.y) * 0.35;
                x += dx;
                y += dy;
            }
        });
    };

    init();
});





















/*

const promoVideos = document.querySelectorAll('.promo_video');

    promoVideos.forEach(promoVideo => {
        let isDown = false; // Флаг нажатия кнопки мыши
        let startX; // Начальная позиция мыши
        let scrollLeft; // Начальная позиция прокрутки

        promoVideo.addEventListener('mousedown', (e) => {
            isDown = true; // Устанавливаем флаг нажатия на true
            promoVideo.classList.add('active');
            startX = e.pageX - promoVideo.offsetLeft; // Получаем начальную позицию
            scrollLeft = promoVideo.scrollLeft; // Получаем текущее положение прокрутки
        });

        promoVideo.addEventListener('mouseleave', () => {
            isDown = false; // При выходе устанавливаем флаг на false
            promoVideo.classList.remove('active');
        });

        promoVideo.addEventListener('mouseup', () => {
            isDown = false; // Устанавливаем флаг на false при отпускании кнопки
            promoVideo.classList.remove('active');
        });

        promoVideo.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Если кнопка мыши не нажата, выходим
            e.preventDefault(); // Отменяем стандартное поведение
            const x = e.pageX - promoVideo.offsetLeft; // Получаем текущую позицию
            const scroll = (x - startX) * 1.5; // Вычисляем прокрутку
            promoVideo.scrollLeft = scrollLeft - scroll; // Прокручиваем контейнер
        });
    });

    const projectVideo = document.querySelectorAll('.project-container');

    projectVideo.forEach(projectVideo => {
        let isDown = false; // Флаг нажатия кнопки мыши
        let startX; // Начальная позиция мыши
        let scrollLeft; // Начальная позиция прокрутки

        projectVideo.addEventListener('mousedown', (e) => {
            isDown = true; // Устанавливаем флаг нажатия на true
            projectVideo.classList.add('active');
            startX = e.pageX - projectVideo.offsetLeft; // Получаем начальную позицию
            scrollLeft = projectVideo.scrollLeft; // Получаем текущее положение прокрутки
        });

        projectVideo.addEventListener('mouseleave', () => {
            isDown = false; // При выходе устанавливаем флаг на false
            projectVideo.classList.remove('active');
        });

        projectVideo.addEventListener('mouseup', () => {
            isDown = false; // Устанавливаем флаг на false при отпускании кнопки
            projectVideo.classList.remove('active');
        });

        projectVideo.addEventListener('mousemove', (e) => {
            if (!isDown) return; // Если кнопка мыши не нажата, выходим
            e.preventDefault(); // Отменяем стандартное поведение
            const x = e.pageX - projectVideo.offsetLeft; // Получаем текущую позицию
            const scroll = (x - startX) * 1.5; // Вычисляем прокрутку
            projectVideo.scrollLeft = scrollLeft - scroll; // Прокручиваем контейнер
        });
    });*/