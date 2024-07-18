import './App.css'
import Profile_Image from './components/ProfileImage'
import FollowButton from './components/FollowButton'
import Title from './components/Title'
import Description from './components/Description'
import SocialButtons  from './components/SocialButtons'

function App() {

  return (
    <>
      <Profile_Image></Profile_Image>
      <Title></Title>
      <FollowButton></FollowButton>
      <Description></Description>
      <SocialButtons type='discord'></SocialButtons>
      <SocialButtons type="mail"></SocialButtons>
    </>
  )
}

export default App
