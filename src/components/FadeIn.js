import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const FadeIn = ({
  children,
  state
}) => {
  return (
    <SwitchTransition mode={"out-in"}>
        <CSSTransition
        key={state ? "if" : "else"}
        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
        classNames='fade'
        >
            {children}
        </CSSTransition>
    </SwitchTransition>
  );
};

FadeIn.propTypes = {
    children: PropTypes.node.isRequired,
    state: PropTypes.bool.isRequired
}

export default FadeIn;