import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, {useState,useEffect} from 'react';
import {useRouter} from 'next/router';

function Titulo(props){
  const Tag = props.tag || 'h1'
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
          
        ${Tag} {
            color: white;
            font-weigth: bold;
        }

      `}</style>
    </>
  )

}

export default function PaginaInicial() {

  const [username,setUsername] = useState(['LucasInmanuel','.png'])
  const [usernamePage,setUsernamePage] = useState('https://github.com/');
  const roteamento = useRouter();
  
  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: '1',width: '100%', height: '100vh', 
          overflow: 'hidden',
        }}
      >
      {/*Video de fundo*/}
      <video poster="https://virtualbackgrounds.site/wp-content/uploads/2020/07/the-last-of-us-streets-of-pittsburgh-1536x864.jpg" 
      autoPlay playsInline muted loop>
          <source src="/bg-the-last-of-us.mp4" type="video/mp4" ></source>
      </video>
      {/*Video de fundo*/}
        <Box
          styleSheet={{
            display: 'flex', position: 'relative',
            alignItems: 'center', zIndex: '5',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '750px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundImage: 'url('+'https://i.imgur.com/ExUFiA7.jpg'+')',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            backgroundColor: '#6d6d6d',
            border: '2px solid' + appConfig.theme.colors.neutrals[400],
          }}
        >

          <img alt="Joel tocando violão" className="personagem-form1" 
            src="https://i.imgur.com/qRUp6ER.png"
          />
          <img alt="Joel tocando violão" className="personagem-form2" 
            src="https://i.imgur.com/qRUp6ER.png"
          />
          <img alt="Joel tocando violão" className="personagem-form3" 
            src="https://i.imgur.com/qRUp6ER.png"
          />
          
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (e){
              e.preventDefault()
              roteamento.push('/chat')
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: '10',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', position: 'relative',
            }}
          >
            <Titulo tag="h1">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ fontWeight: 'bold', marginBottom: '32px', color: appConfig.theme.colors.primary[200] }}>
              {appConfig.name}
            </Text>

            <TextField
              value={username[0]} 
              onChange={function (e){
                const valor = e.target.value
                const caracteres = valor.length
                setUsername([valor,'.png'])
                if(caracteres <= 2){
                  setUsernamePage('https://via.placeholder.com/300/?text=')
                }else{
                  setUsernamePage('https://github.com/')
                }
                
              }}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals['000'],
                  mainColor: appConfig.theme.colors.neutrals[300],
                  mainColorHighlight: appConfig.theme.colors.neutrals[400],
                  backgroundColor: appConfig.theme.colors.neutrals[300],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['000'],
                mainColor: appConfig.theme.colors.primary[200],
                mainColorLight: appConfig.theme.colors.primary[300],
                mainColorStrong: appConfig.theme.colors.primary[300],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[300],
              border: '2px solid',
              borderColor: appConfig.theme.colors.neutrals[400],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px', zIndex: '5', zIndex: '10'
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`${usernamePage}`+`${username[0]}`+`${username[1]}`}
              alt="Usuário inexistente :("
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals['000'],
                backgroundColor: appConfig.theme.colors.neutrals[400],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username[0]}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
      <style jsx>{`
        video{
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
        }
      
        .personagem-form1{
          position: absolute; 
          top: 0; 
          left: -1px;
          z-Index: 5;
          width: 500px;
          height: 100%; 
          opacity: 0.3;
          animation-delay: 2s;
          animation-duration: 3s;
          animation-name: slide1;
          animation-iteration-count: infinite;
        }
        @keyframes slide1 {
          0% {left:0p;top:0px}
          50% {left:8px;top:-3px}
          100% {left:0px;top:0px}
        }
        .personagem-form2{
          position: absolute; 
          top: 0; 
          left: -1px;
          z-Index: 6;
          width: 500px;
          height: 100%; 
          opacity: 0.3;
          animation-delay: 4s;
          animation-duration: 3s;
          animation-name: slide1;
          animation-iteration-count: infinite;
        }
        @keyframes slide2 {
          0% {left:0p;top:0px}
          50% {left:16px;top:3px}
          100% {left:0p;top:0px}
        }
        .personagem-form3{
          position: absolute; 
          top: 0; 
          left: -1px;
          z-Index: 7;
          width: 500px;
          height: 100%; 
          opacity: 1;
        }
      `}</style>
    </>
  );
}