import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import "./styles/home.scss"
export default function Home() {
  return (
    <main className="container">
      <Header/>
      <Experience/>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span>Inglês - B2</span>
            <span>Português - Nativo</span>
          </div>
          <h3>Educação</h3>
          <div className="education-info">
            <span>🎓</span>
            <span>Técnologo em Gestão da Tecnologia da Informação - Unifavip Wyden</span>
            <span>👨🏻‍💻</span>
            <span>Bacharelado em Engenharia de Software - Estácio</span>
          </div>
          <span></span>
        </div>
        <div className="buttons">
          <div className="social"></div>
          <button>Entre em contato</button>
        </div>
   
    </main>

  )
}
