import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';



export function Home() {
    const navigate = useNavigate();
    const { user, signInWithGoogle } = useAuth

    async function handleCreateRoom() {
        if (!user) {
           await signInWithGoogle()
        }
      
        navigate('/rooms/new');
    }

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
                    <button onClick={handleCreateRoom} className='create-room' >
                        <img  src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator' >ou entre em uma sala</div>
                    <form>
                        <input
                         type="text"
                         placeholder='Digite o código da sala' 
                         />
                         <Button type='submit' >
                             Entrar na sala
                         </Button>
                    </form>
                </div>
            </main>
        </div>
    )

}