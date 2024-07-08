import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer class="nav-wrap">
      <a
        href="https://github.com/your-github-profile"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-style"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/your-linkedin-profile/"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-style"
      >
        LinkedIn
      </a>
      <a
        href="https://stackoverflow.com/users/your-stackoverflow-id"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-style"
      >
        Stack Overflow
      </a>
    </footer>
  );
}

export default Footer;
