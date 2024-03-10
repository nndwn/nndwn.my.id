<style>

@font-face {
    font-family: unifont;
    src: url(/unifont.woff2);
    font-display: swap;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
  
  body,
  h1,
  p {
    margin: 0;
  }
  
  body {
    color: rgb(233, 233, 233);
    font-family: unifont, sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: rgb(2, 2, 2);
  }
  
  a {
    text-decoration: underline;
    color: inherit;
  }
  
  div#app {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  div#app > p {
    width: 30rem;
    padding-inline: 1rem;
  }
  
</style>