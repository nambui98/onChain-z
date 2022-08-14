import { h } from "preact"
import Styles from "./styles.module.scss"

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} GurucoreAuthor
      <small className={Styles.byline}>🚀 Gurucore.com Astro Tina</small>
    </footer>
  )
}
export default Footer
