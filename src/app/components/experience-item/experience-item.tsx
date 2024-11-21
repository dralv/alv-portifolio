import { SectionTitle } from "../sectionTitle/section-title"
import "./experience-item.scss"

interface ExperieceItemProps{
  titulo:string;
  duracao:string;
  empresa:string;
  tarefas:string[]
}
export function ExperienceItem({titulo,duracao,empresa,tarefas}: ExperieceItemProps){
  return(
    <div className="experience-item">
      <div className="experience-title">
        <SectionTitle text={titulo}/>
        <span id="duracao">{duracao}</span>
      </div>
      <span id="empresa">{empresa}</span>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  )
}