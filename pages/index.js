import Head from 'next/head'
import FooterBackground from '../components/FooterBackground'
import FooterMenu from '../components/footer-menu'
import Widget from '../components/widget'
import SocialMenu from '../components/social-menu'

export default function Home() {
  return (
    <div className='container'>
    <FooterBackground/>
    <div className='footer-root'>
    
      <Widget widget="widget1" />
      <Widget widget="widget2" />
      <div className='space'></div>
      <Widget widget="widget3" /> 

      <FooterMenu />  
      
      <SocialMenu/>
      <div className='legal'>
      <p>Enroute Systems &copy; { (new Date()).getFullYear() } All Right Reserved</p>
      </div>
    </div>
    </div>
  )
}

