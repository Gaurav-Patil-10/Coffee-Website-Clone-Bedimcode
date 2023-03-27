// CHANGE BACKGROUND HEADER 

const scrollHeader = () => {
    const header = document.getElementById('header')

    // when scrolled more than 50 viewport height add scroll-header class
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader);
 
      
      
