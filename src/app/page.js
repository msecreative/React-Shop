import Image from 'next/image'
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Button variant="outline-primary">Hello World</Button>{' '}
      </div>
    </main>
  )
}
