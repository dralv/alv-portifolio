import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, me chamo Álvaro! 👋</h1>
            <h2>Engenheiro de Dados</h2>
          </div>
          <Image
            src="/alvaro.png"
            alt="Imagem de Álvaro Araújo. Ele é um homem branco de cabelos pretos curtos e usa óculos. Está sentado em uma mesa usando um notebook."
            width={325}
            height={310}
            priority
        />
        </div>
    )
}