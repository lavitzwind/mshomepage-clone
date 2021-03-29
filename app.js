// toggle hamburger menu based on click
//will only run less than 700 px due to our media queries
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.main-menu').classList.toggle('show')
})
