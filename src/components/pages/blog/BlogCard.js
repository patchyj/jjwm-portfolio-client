import React from 'react';
import styled from 'styled-components';

const S = {
  BlogCard: styled.div`
    position: relative;

    :hover .overlay {
      opacity: 1;
    }
  `,
  Image: styled.img`
    display: block;
    width: 100%;
    height: auto;
  `,
  Overlay: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
  `,
  Text: styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;

    h5 {
      color: white;
    }
  `
};

// eslint-disable-next-line react/prop-types
const BlogCard = ({ post }) => (
  <S.BlogCard className="card col-md-4 offset-md-1 col-sm-8 offset-sm-2 p-5 my-2">
    <S.Image src={post.images[0]} alt="Avatar" class="image" />
    <S.Overlay className="overlay">
      <S.Text className="text">
        <h5>{post.title}</h5>
        <p className="text-muted">{post.tagline}</p>
      </S.Text>
    </S.Overlay>
  </S.BlogCard>
);

export default BlogCard;
