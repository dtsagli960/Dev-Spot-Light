function Footer({ name }) {
    return (
      <footer>
        <p>© {new Date().getFullYear()} {name} - Web Developer</p>
      </footer>
    );
  }
  
  export default Footer;
  