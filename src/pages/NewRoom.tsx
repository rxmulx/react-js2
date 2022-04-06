
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import '../styles/auth.scss';

export function NewRoom() {
    return(
        <div id='page-auth' >
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas dee Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiencia </p>
            </aside>
            <main>
                <div className='main-content' >
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                         type="text"
                         placeholder='Digite o código da sala' 
                         />
                         <Button type='submit' >
                             Criar sala
                         </Button>
                    </form>
                    <p>Quer entart em uma sala existente <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>
    )
}
 