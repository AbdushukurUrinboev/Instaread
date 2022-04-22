import React from 'react';
import PropsTypes from 'prop-types';
import styled from 'styled-components';

export function Playlist(props) {
  const Container = styled.div`
    height: 260px;
    box-sizing: border-box;
  `;

  const Item = styled.div`
    width: 100%;
    height: 45px;
    cursor: pointer;
    color: black;
    margin-left: 2rem;
    margin-top: 1rem;
    display: flex;
    box-sizing: border-box;
  `;

  const Image = styled.img`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-left: -25%;
  `;

  const Descr = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    width: 100%;
    justify-content: center;
  `;

  const Title = styled.p`
    font-weight: bold;
    font-size: 0.8rem;
  `;

  return (
    <Container>
      {props.playlist.map(track => (
        <Item key={track.id} onClick={() => props.onChangeTrack(track.id)}>
          <Descr>
            <Title>{track.title}</Title>
          </Descr>
          <Image src={track.cover} alt="cover" />
        </Item>
      ))}
    </Container>
  );
}

Playlist.PropsTypes = {
  playlist: PropsTypes.array,
  onChangeTrack: PropsTypes.func,
};
