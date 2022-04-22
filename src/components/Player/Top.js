import React, { useState } from 'react';
import styled from 'styled-components';
import PropsTypes from 'prop-types';
import { Audio } from './Audio';

export function Top(props) {
  const Container = styled.div`
    border-radius: 10px;
    height: 160px;
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    color: #333;
    box-sizing: border-box;
    background-image: linear-gradient(
      to bottom,
      #212529,
      #212529,
      #212529,
      #212529,
      #212529
    );
    opacity:0.9;
  `;

  const Cover = styled.img`
    width: 135px;
    height: 200px;
    border-radius: 5px;
    margin-right: 1rem;
    margin-left: 65%;
    margin-top: -41%;
  `;

  const Info = styled.div`
    margin-top: 1rem;
  `;

  const Title = styled.p`
    font-size: 1rem;
    font-weight: 600;
    color:#fff;
  `;

  const Author = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 0.5rem;
  `;

  const Controls = styled.div`
    flex-basis: 63%;
    margin-top: -2.5rem;
    width: 215px;
    margin-left:-5%;
  `;

  return (
    <Container>
      <Info>
        <Title>{props.track.title}</Title>
        <Author>{props.track.author}</Author>
      </Info>
      <Cover src={props.track.img} alt="cover" />
      <Controls>
        <Audio url={props.track.url} />
      </Controls>
    </Container>
  );
}

Top.propTypes = {
  track: PropsTypes.object,
};
