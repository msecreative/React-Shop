import { Inter } from 'next/font/google'
import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  Row,
  Col
} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import HeaderMain from './shared/Header';
import FooterMain from './shared/Footer';
import MobileFooterMenu from './shared/Header/Mobile/MobileFooterMenu';
import FlatButton from './FlatButton';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Korean Mall - Korean Cosmetics and Skin Care Products.',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" async ></script>
      </head>
      <body className={inter.className}>
        <FlatButton/>
        <Container fluid>
          <HeaderMain/>
          {/* <Container> */}
            
          <Row>
            <Col 
            style={{
              overflow:'hidden'
            }}>
              {children}
            </Col>
          </Row>
        
          {/* </Container> */}
          <FooterMain/>
          <MobileFooterMenu/>
        </Container>
      </body>
    </html>
  )
}
