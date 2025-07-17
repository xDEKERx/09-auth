
import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>
            Developer:{" "}
            <a
              href="https://github.com/xDEKERx"
              target="_blank"
            >
              Dmytro Solonko
            </a>
          </p>
          <p>
            Contact us:
            <a href="mailto:victorharasymiv97@gmail.com">
              {" "}
              prostodeker@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
