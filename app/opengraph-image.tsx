import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Bibek Bhattarai | React & Next.js Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            fontSize: 24,
            fontWeight: 'bold',
            color: '#3b82f6',
          }}
        >
          BB
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 900,
              margin: 0,
              textAlign: 'center',
              background: 'linear-gradient(to right, #ffffff, #a1a1a1)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Bibek Bhattarai
          </h1>
          <p
            style={{
              fontSize: 32,
              color: '#3b82f6',
              fontWeight: 'bold',
              marginTop: 20,
              textAlign: 'center',
            }}
          >
            React & Next.js Developer
          </p>
          <p
            style={{
              fontSize: 20,
              color: '#666666',
              marginTop: 40,
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Crafting premium digital experiences with modern web technologies.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 20,
            color: '#444444',
            fontSize: 18,
          }}
        >
          <span>bibekbhattarai14.com.np</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
