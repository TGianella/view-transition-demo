import css from "styled-jsx/css";

export const shuffle = css.global`
    ::view-transition-group(*) {
        animation-duration: 5s;
    }
    
    ::view-transition, :root {
        filter: blur(2px) brightness(1.2) saturate(0.5);
    }
    
    .card {
        box-shadow: none;
    }
`