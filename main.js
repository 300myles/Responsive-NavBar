const menu = document.querySelectorAll('.menu');
const sidebar = document.querySelector('.sidebar');
const sidebarExit = document.querySelector('.empty');


menu.forEach(type => {
  type.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (sidebar.classList.contains('active')) {
      sidebar.classList.remove('active');
      sidebarExit.classList.add("exit");
      sidebarExit.classList.remove("active");
    } else {
      sidebar.classList.add("active");
      sidebarExit.classList.remove("exit");
      sidebarExit.classList.add("active");
    }
  });
})

sidebarExit.addEventListener("click", (e) => {
  e.preventDefault();
  
  sidebar.classList.remove('active');
  sidebarExit.classList.add("exit");
  sidebarExit.classList.remove("active");
})