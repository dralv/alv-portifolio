import "./education.scss"

interface EducationProps{
  text: string,
  emoji: string
}
export function Education({text,emoji}: EducationProps){
  return(
    <div className="education">
        <span>{emoji}</span>
        <span>{text}</span>
    </div>
  )
}