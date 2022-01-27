
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
       
        `}</style>
    )
}
  
export default function MyApp({ Component, pageProps }) {
    return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
    )
}