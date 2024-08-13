import { Container } from '@mui/system'
import React from 'react'

const Desc = () => {
  return (
    <div style={{backgroundColor:"#646464",marginTop:"25px"}}>
    {/* <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-evenly',margin:'20px'}}>
        <Container>
                <h1 style={{color:'white'}}>How Your Essentials Reach You....</h1>
                <br></br>
                <div style={{color:'white'}}>
                From the moment you decide to upgrade your home to the seamless installation of top-notch appliances, the journey of renting essential home electronics is a meticulously crafted experience. Leading providers showcase a vast array of premium options, including fridges, washing machines, dishwashers, and more, initiating the rental process. Intuitive online platforms offer comprehensive descriptions, vivid images, and customer reviews, empowering you to make the perfect choice. Dedicated customer service teams provide personalized recommendations, ensuring you find the ideal appliances to match your lifestyle.

Once selected, expert logistics teams coordinate swift and careful delivery, while skilled technicians handle the installation, guaranteeing a hassle-free setup. Throughout this journey, rigorous quality checks and ongoing maintenance services ensure the peak performance and longevity of your rented appliances, making this sophisticated process an indispensable aspect of modern, convenient living






                </div>
        </Container>
    </div> */}
    <div style={{display: 'flex',flexDirection: 'row',justifyContent:'space-evenly',margin:'20px'}}>
        <Container sx={{marginTop:"10px"}}>
            <img src="https://i.pinimg.com/originals/3f/c3/2b/3fc32b3699a73c4a172720cc51b24e19.gif" alt="img" style={{height:'50vh',width:'40vw'}}/>
        </Container>
        <Container>
            <div style={{color:'white'}}>
                <h1 >Experience Convenience with LeaseEase</h1>
                <br></br>
                <div>
                

At LeaseEase, we believe that rental convenience goes beyond mere transactions; it's an experience that transforms everyday living. Imagine having access to top-quality appliances without the hassle of ownership—where ease and efficiency meet to elevate your daily routines. Whether it’s the latest washing machine, a state-of-the-art refrigerator, or a versatile kitchen gadget, LeaseEase brings them right to your doorstep.

With LeaseEase, each rental is more than just a service; it's a promise of seamless integration into your lifestyle. Our curated selection ensures that every appliance not only meets your needs but enhances your home environment. From the initial selection to delivery and support, every step is designed with you in mind, turning appliance rental into a streamlined, enjoyable process.

Our commitment is to bring comfort and simplicity to your life, making high-quality appliances accessible and manageable. Experience the difference with LeaseEase—where every rental is an opportunity to enhance your home and simplify your life
                </div>
            </div>
        </Container>
    </div>

    </div>
  )
}

export default Desc;