import React, {useState} from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
  
      <div>Página do Chat</div>
  
    const [mensagem, setMensagem] = useState('');
    const [listaDeMensagens, setListaDeMensagens] = useState([]);

    /*
    // Usuário
    - Usuário digita no campo textarea
    - Aperta enter para enviar
    - Tem que adicionar o texto na listagem
    
    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens 
    */
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'vanessametonini',
            texto: novaMensagem,
        };

        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
        ]);
        setMensagem('');
    }

    return (
    
        <>
            <style global jsx>{`
                .bg-chat{
                    display: flex; 
                    align-items: center; 
                    justify-content: center;
                    background-color: ${appConfig.theme.colors.primary[500]};
                    background-image: url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/the-last-of-us-streets-of-pittsburgh-1536x864.jpg);
                    background-repeat: no-repeat; 
                    background-size: cover; 
                    background-blend-mode: multiply;
                    color: ${appConfig.theme.colors.primary['200']}
                }

                .chat-wrapper{
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    box-shadow: 0 2px 10px 0 rgb(0, 0, 0, 20%);
                    border-radius: 5px;
                    background-color: ${appConfig.theme.colors.neutrals[400]};
                    height: 100%;
                    max-width: 95%;
                    max-height: 95vh;
                    padding: 32px;
                }

                .area-mensagens{
                    position: relative;
                    display: flex;
                    flex: 1;
                    height: 80%;
                    background-color: ${appConfig.theme.colors.neutrals[400]};
                    background-image: url(/bg-ellie.jpeg);
                    background-repeat: no-repeat; 
                    background-size: cover; 
                    background-blend-mode: multiply;
                    flex-direction: column;
                    border-radius: 5px;
                    padding: 16px;
                }
                .header-wrapper{
                    width: 100%; 
                    margin-bottom: 16px;
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between;
                }
                .header-logo{
                    color: white;
                }
                .logout{
                    text-decoration: none;
                    color: white;
                    font-size: 18px;
                }
                form{
                    display: flex;
                    align-items: center;
                }
                textarea{
                    outline: none;
                    width: 100%;
                    min-height: 100px;
                    font-size: 16px;
                    border: 0;
                    resize: none;
                    border-radius: 5px;
                    padding: 6px 8px;
                    background-color: ${appConfig.theme.colors.neutrals[400]};
                    margin-right: 12px;
                    color: ${appConfig.theme.colors.neutrals['000']};
                }
                ul.lista-mensagens{
                    display: flex;
                    flex-direction: column-reverse;
                    flex: 1;
                    color: ${appConfig.theme.colors.neutrals["000"]};
                    margin-bottom: 16px;
                    overflow-x: hidden;
                }
                li.mensagem{
                    border-radius: 5px;
                    padding: 6px;
                    margin-bottom: 12px;
                    border: 1px solid ${appConfig.theme.colors.neutrals["400"]};
                }
                li.mensagem:hover{
                    background-color: ${appConfig.theme.colors.neutrals[200]};
                }
                .perfil-wrapper{
                    margin-bottom: 8px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .perfil-img{
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 8px;
                }
                .perfil-codigo{
                    font-size: 10px;
                    margin-left: 8px;
                    color: ${appConfig.theme.colors.neutrals[300]};
                }
                .mensagem-enviar{
                    font-size: 17px;
                }
            `}</style>
            
            <div className="bg-chat">
                <div className="chat-wrapper">
                    <Header />
                    <div className="area-mensagens">
                        <MessageList mensagens={listaDeMensagens} />
                        {/* {listaDeMensagens.map((mensagemAtual) => {
                            return (
                                <li key={mensagemAtual.id}>
                                    {mensagemAtual.de}: {mensagemAtual.texto}
                                </li>
                            )
                        })} */}
                        <form>
                            <textarea
                                value={mensagem}
                                onChange={(event) => {
                                    const valor = event.target.value;
                                    setMensagem(valor);
                                }}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        handleNovaMensagem(mensagem);
                                    }
                                }}
                                placeholder="Insira sua mensagem aqui..."
                            ></textarea>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function Header() {
    return (
        
        <div className="header-wrapper">
            <h1 className="header-logo">Chat</h1>
            <a className="logout" href="/">Logout</a>
        </div>
        
    )
}

function MessageList(props) {
    console.log(props);
    return (
        <ul className="lista-mensagens">
            {props.mensagens.map((mensagem) => {
                return (
                    <li className="mensagem" key={mensagem.id}>
                        <div className="perfil-wrapper">
                            <img className="perfil-img" src={`https://github.com/lucasinmanuel.png`} />
                            <h4 className="perfil-conta">{mensagem.de}</h4>
                            <span className="perfil-codigo">
                                {(new Date().toLocaleDateString())}
                            </span>
                        </div>
                        <p className="mensagem-enviar">{mensagem.texto}</p>
                    </li>
                );
            })}
        </ul>
    )

}