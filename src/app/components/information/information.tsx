import { Education } from "../education/education"
import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"
export function Information(){
  return(
      <div className="infos">
        <SectionTitle text="Línguas"/>
        <div className="languages-info">
          <span>🇺🇸 Inglês - B2</span>
          <span>Português - Nativo</span>
        </div>
        <SectionTitle text="Educação"/>
        <div className="education-info">
          <Education text="Tecnólogo em Gestão de TI - Univafip Wyden" emoji="🎓"/>
          <Education text="Bacharelado em Engenharia de Software - Estácio" emoji="👨🏻‍💻"/>
        </div>
    </div>
  )
}