import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import {Route} from 'react-router-dom';

export default function Transitions(props) {
  return (
    <Route 
      render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={800}
              classNames="fade"
            >
              {props.children}
            </CSSTransition>
          </TransitionGroup>
      )} />
  )
};