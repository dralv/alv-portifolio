import "./experience.scss"
import { SectionTitle } from "../sectionTitle/section-title";
import { ExperienceTime } from "@/app/components/experience-time/experience-time";
import { ExperienceItem } from "../experience-item/experience-item";

export function Experience(){
  return(
    <div className="experience">
      <SectionTitle text="Experiência"/>
      <p>Engenheiro de Dados Júnior com dois anos de experiência prática em engenharia de dados, especialmente em análises de CRM e Marketing. Atualmente, desenvolvo pipelines de dados para exportar dados do Google BigQuery para o Salesforce Marketing Cloud, permitindo comunicações relacionais eficazes com clientes através de jornadas de marketing direcionadas. Meu papel também envolve a criação e otimização de dashboards no Power BI para medir e aprimorar o impacto desses esforços de marketing.</p>
      <div className="experience-time">
        <ExperienceTime/>
      </div>
      <div className="experience-itens">
        <ExperienceItem 
          titulo="Engenheiro de Dados Junior" 
          duracao="(2023/08 - presente)" 
          empresa="Framework Digital" 
          tarefas={[
          "Colaborou de perto com as equipes de marketing e CRM para entender os requisitos de dados e projetou soluções de dados personalizadas para apoiar suas necessidades de análise e comunicação",
          "Desenvolveu e manteve pipelines de dados usando uma combinação de SQL e Python no Apache Airflow, extraindo, transformando e carregando (ETL) dados de várias fontes no BigQuery para análise e relatórios",
          "Trabalhou extensivamente com o BigQuery para lidar com conjuntos de dados em larga escala, otimizando consultas para recuperação e análise eficientes de dados",
          "Projetou e desenvolveu dashboards no Power BI para visualizar métricas-chave de marketing e CRM, fornecendo insights acionáveis para as partes interessadas do negócio",
          "Colaborou com equipes multifuncionais para integrar e sincronizar dados entre plataformas de automação de marketing e sistemas CRM, garantindo uma visão unificada das interações com os clientes",
          "Utilizou Python para automatização de tarefas rotineiras de dados e desenvolvimento de scripts personalizados para melhorar a eficiência do processamento de dados",
          "Envolveu-se em aprendizado contínuo, mantendo-se atualizado sobre os últimos avanços em engenharia de dados, tecnologias de marketing e sistemas CRM",
          "Analisou a relevância estatística usando testes de hipóteses em testes A/B para impulsionar a tomada de decisões baseada em dados"
        ]}/>
        <ExperienceItem 
          titulo="Estagiário de Desenvolvimento de Software" 
          duracao="(2022/10 - 2023/08)" 
          empresa="Framework Digital" 
          tarefas={[
            "Colaborou com desenvolvedores seniores e arquitetos de soluções para projetar, desenvolver e manter soluções robustas de backend, com foco principalmente em APIs e CronJobs usando tecnologias .NET/C#",
            "Projetou, implementou e agendou CronJobs usando .NET, proporcionando processamento automatizado de dados, relatórios e tarefas de manutenção do sistema para vários projetos",
            "Utilizou Kafka e RabbitMQ para integrar mecanismos de mensagens assíncronas na arquitetura do sistema, melhorando as capacidades de processamento de dados em tempo real e permitindo comunicação eficiente entre aplicativos",
            "Utilizou o Azure DevOps para controle de versão, integração contínua e pipelines de deployment, contribuindo para fluxos de trabalho de desenvolvimento mais ágeis e garantindo lançamentos de aplicativos confiáveis e consistentes",
            "Implementou testes unitários, aprimorando a qualidade do código e facilitando os processos de integração e deployment contínuos",
            "Participou ativamente de revisões de código, fornecendo feedback construtivo aos colegas e incorporando feedback no próprio código para manter a qualidade e consistência do Código",
            "Depurou e resolveu problemas reportados durante as fases de teste e QA, garantindo um aplicativo estável e confiável para os usuários",
            "Participou ativamente das cerimônias Ágeis/Scrum, incluindo planejamento de sprints, reuniões diárias e retrospectivas, para facilitar a gestão eficiente de projetos e a melhoria contínua"
          ]}
        />        
      </div>
    </div>
  )
}