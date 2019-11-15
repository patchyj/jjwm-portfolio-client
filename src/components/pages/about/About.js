/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import S from '../../styledComponents';

const About = () => (
  <S.About>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-justify p-3">
            <h3 className="py-4">A bit about me...</h3>
            <p>
              I never used to be interested in tech. Up until late 2016, my
              experience with coding went as far as editing my MySpace page with
              retro HTML and CSS way back in 2006. After that, I tended to stay
              away, preferring the feel of pen, pencil and paintbrush on canvas
              than keys on a computer.
            </p>
            <p>
              But that all changed in 2017 when I was wokring a dead-end job in
              Edinburgh. It was my first job after nearly four years of
              traveling around the world, and I was woefully unprepared for the
              unglamorous, monotonous and soul-destroying feeling of sitting at
              a desk at a job you hate knowing you could do more. So I started
              researching. I threw myself at YouTube and Udemy tutorials, hoping
              to find something that I could make my own{' '}
              <a
                href="https://en.wikipedia.org/wiki/Ikigai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ikigai
              </a>{' '}
              career of.
            </p>
            <p>
              At first, I played to my creative strengths, seeking courses on
              digital art and design. I became adept at both Illustrator and
              Photoshop, whiling away the hours making nonsense pictures and
              getting used to the software. Soon after, I came across Sketch and
              changed my direction to a more UX/UI focus, which I fell in love
              with. However, with these new found skills, I still had no formal
              training or qualifications, let alone somewhere to showcase what I
              could do.
            </p>
            <p>
              Enter coding: I wanted - nay, needed - a portfolio, but I was too
              poor to pay someone to make one, and too tech illiterate to make
              one myself. So I started learning. I came across a simple video on
              Udemy, "Create your own website using HTML and CSS", and the rest
              is history. I truly fell in love with coding from that moment
              onwards, and threw myself at it every chance I got.
            </p>
            <p>
              That said, I quickly realised I didn't know what I didn't know,
              and Edinburgh, great city though it is, isn't exactly known for
              its tech culture. So, after a bit of research, a smidge of asking
              favours, and borrowing a truckload of money, I signed up to
              General Assembly in London. What followed was a painful five
              months of couchsurfing on a friends sofa, three months of
              scrimping and a whirlwind of learning, which has only slowed down
              once or twice since it started. And I wouldn't have it any other
              way.
            </p>
            <p>
              This is just the start of my story. I hope you've enjoyed it as
              much as I have and will continue too.
            </p>
          </div>
        </div>
      </div>
    </div>
  </S.About>
);

export default About;
