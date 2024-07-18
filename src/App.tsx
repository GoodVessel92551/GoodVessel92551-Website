import './App.css'
import ImageGroup from './components/ImageGroup'
import Description from './components/Description'
import SocialButtons  from './components/SocialButtons'

function App() {

  return (
    <>
    <div className='topContainer'>
    <ImageGroup></ImageGroup>
    <Description></Description>
    <div className='buttonContainer'>
      <SocialButtons type='discord'></SocialButtons>
      <SocialButtons type="mail"></SocialButtons>
    </div>
    </div>
    </>
  )
}

export default App
