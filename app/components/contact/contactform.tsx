import React from 'react';

const ContactForm = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to bottom, #071259ff, #00051d)',
        color: '#ffffff',
        padding: '60px 40px',
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
        }}
      >
        {/* Left Column: Form */}
        <div style={{ flex: 3, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Row 1: Title, First name, Last name */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Title</label>
              <select
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                }}
              >
                <option>Select</option>
              </select>
            </div>
            <div style={{ flex: 2 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>First name</label>
              <input
                type="text"
                placeholder="John"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                }}
              />
            </div>
            <div style={{ flex: 2 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Last name</label>
              <input
                type="text"
                placeholder="Doe"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                }}
              />
            </div>
          </div>

          {/* Row 2: Email, Country */}
          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 2 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Email address</label>
              <input
                type="email"
                placeholder="johndoe@mail.com"
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                }}
              />
            </div>
            <div style={{ flex: 3 }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Country of residence</label>
              <select
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '16px',
                }}
              >
                <option>Select your country</option>
              </select>
            </div>
          </div>

          {/* I want to... */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>I want to...</label>
            <select
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '16px',
              }}
            >
              <option>I want to...</option>
            </select>
          </div>

          {/* Select the subject */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Select the subject</label>
            <select
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '16px',
              }}
            >
              <option>Select the subject</option>
            </select>
          </div>

          {/* Message title */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Message title</label>
            <input
              type="text"
              placeholder="Message title"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '16px',
              }}
            />
          </div>

          {/* Message */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px' }}>Message</label>
            <textarea
              placeholder="I would like to know..."
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '16px',
                minHeight: '150px',
              }}
            ></textarea>
          </div>

          {/* Footer: Mandatory and Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
            <span style={{ fontSize: '14px', opacity: 0.8 }}>All fields are mandatory</span>
            <button
              style={{
                backgroundColor: '#bfff00',
                color: '#000000',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Right Column: Company Info */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', margin: 0 }}>
            Our Corporate Headquarters
          </h2>
          <p style={{ margin: 0, fontSize: '16px' }}>
            Spawn Point Creative Labs →
            <br />
            Level 14, Marina Plaza, Dubai Marina
            <br />
            Dubai, United Arab Emirates
          </p>
          <p style={{ margin: 0, fontSize: '16px' }}>+971 52 345 6789</p>
          <p style={{ margin: 0, fontSize: '16px' }}>play@spawnpointstudio.com</p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <span style={{ fontSize: '20px' }}>f</span> {/* Facebook */}
            <span style={{ fontSize: '20px' }}>in</span> {/* LinkedIn */}
            <span style={{ fontSize: '20px' }}>👾</span> {/* Discord? */}
            <span style={{ fontSize: '20px' }}>X</span> {/* X/Twitter */}
            <span style={{ fontSize: '20px' }}>▶️</span> {/* YouTube */}
            <span style={{ fontSize: '20px' }}>📷</span> {/* Instagram */}
          </div>
        </div>
      </div>

      {/* Bottom Left Icon - Snowflake or Logo */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '40px',
          backgroundColor: '#bfff00',
          color: '#000000',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
        }}
      >
        ❄️
      </div>
    </div>
  );
};

export default ContactForm;