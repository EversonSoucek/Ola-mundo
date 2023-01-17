import React from 'react'
import styles from './NaoEncontrado.module.css'
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'components/BotaoPrincipal'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrado() {
    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>
                    Ops! Página não encontrada
                </h1>

                <p className={styles.paragrafo}>Tem certeza de que era isso que estava procurando</p>

                <p className={styles.paragrafo}>Recarregue a página ou volte a página principal</p>

                <div 
                className={styles.botaoContainer}
                onClick={() =>navegar('/')}
                    >
                    <BotaoPrincipal tamanho='lg'>Voltar</BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt='cachorro de óculos e vestido igual humano'/>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>

    )
}
  