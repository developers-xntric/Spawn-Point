import React from 'react';

const ContactCTA = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #0a0f2e, #0a0f2e 50%, #00051d)',
        color: '#ffffff',
        padding: '40px 20px',
        textAlign: 'center',
        position: 'relative',
        fontFamily: 'sans-serif',
        overflow: 'hidden',
      }}
    >
      {/* Pixelated OMG icon approximation - you can replace with an actual image or SVG for exact pixel art */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '24px',
          fontFamily: '"Press Start 2P", cursive', // Use a pixel font; import from Google Fonts if needed
          color: '#ffffff',
          transform: 'rotate(-15deg)',
        }}
      >
        OMG
      </div>

      <h1
        style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
          lineHeight: 1.1,
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        <span style={{ color: '#ffffff' }}>Create Whats</span>
        <br />
        <span style={{ color: '#bfff00' }}>Next In Gaming</span>
      </h1>

      <p
        style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.4,
        }}
      >
        Whether youre ready to launch a full-scale immersive world or
        <br />
        just want to explore what your brand could look like inside a game, wed love to hear from you.
      </p>

      {/* Pixelated $ icon approximation - you can replace with an actual image or SVG for exact pixel art */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          fontSize: '24px',
          fontFamily: '"Press Start 2P", cursive', // Use a pixel font
          color: '#ffd700',
        }}
      >
        $
      </div>
    </div>
  );
};

export default ContactCTA;