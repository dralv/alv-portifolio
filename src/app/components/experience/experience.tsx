import "./experience.scss"
import { SectionTitle } from "../sectionTitle/section-title";

export function Experience(){
  return(
    <div className="experience">
      <SectionTitle text="Experiência"/>
      <p>Engenheiro de Dados Júnior com dois anos de experiência prática em engenharia de dados, especialmente em análises de CRM e Marketing. Atualmente, desenvolvo pipelines de dados para exportar dados do Google BigQuery para o Salesforce Marketing Cloud, permitindo comunicações relacionais eficazes com clientes através de jornadas de marketing direcionadas. Meu papel também envolve a criação e otimização de dashboards no Power BI para medir e aprimorar o impacto desses esforços de marketing.</p>
      <div className="experience-time">

      </div>
    </div>
  )
}