document.addEventListener('DOMContentLoaded', () => {
  const firstTab = document.querySelector('.tab__first');
  const secondTab = document.querySelector('.tab__second');
  const thirdTab = document.querySelector('.tab__third');
  const text1Elem = document.querySelector('.text__1');
  const text2Elem = document.querySelector('.text__2');
  const text3Elem = document.querySelector('.text__3');
  let activeTab = 'firstTab';

// default firstTab
  firstTab.classList.add('active');
  secondTab.classList.remove('active');
  thirdTab.classList.remove('active');
  text1Elem.style.display = 'initial';
  text2Elem.style.display = 'none';
  text3Elem.style.display = 'none';
// =========================


  firstTab.addEventListener('click', () => {
    firstTab.classList.add('active');
    secondTab.classList.remove('active');
    thirdTab.classList.remove('active');
    text1Elem.style.display = 'initial';
    text2Elem.style.display = 'none';
    text3Elem.style.display = 'none';
  });
  secondTab.addEventListener('click', () => {
    firstTab.classList.remove('active');
    secondTab.classList.add('active');
    thirdTab.classList.remove('active');
    text1Elem.style.display = 'none';
    text2Elem.style.display = 'initial';
    text3Elem.style.display = 'none';
  });
  thirdTab.addEventListener('click', () => {
    firstTab.classList.remove('active');
    secondTab.classList.remove('active');
    thirdTab.classList.add('active');
    text1Elem.style.display = 'none';
    text2Elem.style.display = 'none';
    text3Elem.style.display = 'initial';
  });
});