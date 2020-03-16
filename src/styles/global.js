import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Slab:wght@300;400;700&display=swap');
 *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
 }
 
html, body, #root{
    height: 100%;
}

body{
    font: 14px 'Noto Sans',sans-serif;
    color: #333;
    background:#eee;
    -webkit-font-smoothing: antialised !important;
}

`;