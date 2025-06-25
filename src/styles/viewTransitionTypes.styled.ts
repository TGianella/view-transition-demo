import css from "styled-jsx/css";

export const viewTransitionTypes = css.global`
    /* Determine what gets captured when the type is forwards or backwards */
    html:active-view-transition-type(forwards, backwards) {
      :root, div.card {
        view-transition-name: none !important;
      }
      
      div.cards-list {
        view-transition-name: content;
      }
    }
    
    /* Animation styles for forwards type only */
    html:active-view-transition-type(forwards) {
      &::view-transition-old(content) {
        animation-name: slide-out-to-left;
      }
      &::view-transition-new(content) {
        animation-name: slide-in-from-right;
      }
    }
    
    /* Animation styles for backwards type only */
    html:active-view-transition-type(backwards) {
      &::view-transition-old(content) {
        animation-name: slide-out-to-right;
      }
      &::view-transition-new(content) {
        animation-name: slide-in-from-left;
      }
    }
`
