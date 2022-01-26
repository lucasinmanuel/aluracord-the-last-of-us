import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';

function GlobalStyle(){
  return (
    <style global jsx>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
    }
    /* ./App fit Height */ 
      
    `}</style>
  )
}

function Titulo(props){
  console.log(props)
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
/*
function HomePage() {

  return(
    <div>
      <GlobalStyle />
        <Titulo tag="h1">Boas vindas de volta!</Titulo>
        <h2>Discord - Alura Matrix</h2>
        
    </div>
  )

}

export default HomePage*/

export default function PaginaInicial() {
  const username = 'LucasInmanuel';

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary['100'],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/the-last-of-us-streets-of-pittsburgh-1536x864.jpg)', width: '100%', height: '100%',
          backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '750px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[200],
            border: '1.5px solid' + appConfig.theme.colors.neutrals[400],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h1">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ fontWeight: 'bold', marginBottom: '32px', color: appConfig.theme.colors.neutrals[400] }}>
              {appConfig.name}
            </Text>

            <TextField
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
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[400],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
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
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}