import PostModelo from "components/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './Sobremim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function Sobremim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>Olá eu sou o Everson</h3>

            <img src={fotoSobreMim} alt='pessoa sorrindo' className={styles.fotoSobreMim}></img>
            
            <p className={styles.paragrafo}>Sou everson estudante de engenharia de software no 3° periodo</p>

        </PostModelo>
    )

}