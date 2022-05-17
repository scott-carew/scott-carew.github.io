class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="bannerimage-container">
          <img id="bannerimage" src="../images/bannerimage3.png" alt="A Journey from Teacher to Tech">    
        </div>       
        <nav>
          <div class="nav-bar">
            <div class="nav-links">
              <a href="../index.html">Home</a>
              <a href="../index.html#tech-blog">Tech</a>
              <a href="../index.html#core-blog">Core</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>
    `
  }
}

customElements.define('my-header', myHeader)

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="contact-container">
        <h4 id="contact">Contact Me:</h4>
        <div>
          <a href="https://www.instagram.com/scarooo/" target="_blank"><img class="contact-images" src="../images/insta.png" alt="Instagram Logo"></a>
          <a href="https://www.linkedin.com/in/scottcarew/" target="_blank"><img class="contact-images" src="../images/linkedin.png" alt="LinkedIn Logo"></a>
          <a href="https://github.com/scott-carew/" target="_blank"><img class="contact-images" src="../images/github.png" alt="Github Logo"></a>
        </div>
      </div>
    </footer>
    `
  }
}

customElements.define('my-footer', myFooter)
