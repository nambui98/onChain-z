import { h } from "preact"
import Styles from "./styles.module.scss"
import packagejson from "../../../package.json"
function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} OnChainZ
      <small className={Styles.byline}>
        🚀 Gurucore.com {packagejson.productName} v{packagejson.version}
      </small>
    </footer>
  )
}
export default Footer
