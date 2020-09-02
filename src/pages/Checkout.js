import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Header from 'parts/Header'
import Button from 'elements/button'
import Stepper,{Numbering,Meta,MainContent,Controller} from 'elements/stepper'
import BookingInformation from 'parts/checkout/BookingInformation'
import Payment from 'parts/checkout/Payment'
import Completed from 'parts/checkout/Completed'
import ItemDetails from 'Json/itemDetails.json'

export default class Checkout extends Component {
  state={
    data:{
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      proofPayment:"",
      bankName:"",
      bankHolder:""
    }
  }

  onChange=(event)=>{
    this.setState({
      data:{
        ...this.state.data,
        [event.target.value]:event.target.value
      }
    })
  }

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    const {data} = this.state

    const checkout = {
      duration:3
    }

    const steps = {
      bookingInformation:{
        title:"Booking Information",
        description:"Please fill up the blank fields below",
        content:(
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },

      payment:{
        title:"Payment",
        description:"Kindly follow the instruction below",
        content:(
          <Payment 
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        )
      },
      completed:{
        title:"Yeay Completed",
        description:null,
        content:<Completed/>
      }
    }

    
    return (
      <div>
        <Header isCentered/>
        <Stepper steps={steps}>
          {
            (prevStep,nextStep,CurrentStep,steps)=>( 
             <>
              <Numbering 
              data={steps}
              current={CurrentStep}
              style={{marginBottom:50}}
              />
              <Meta data={steps} current={CurrentStep}/>
              <MainContent data={steps} current={CurrentStep} />


              {CurrentStep === "bookingInformation" &&(
                <Controller>
                  {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" && (
                    <Fade>
                      <Button
                      className="btn mb-3"
                      type="button"
                      isBlock
                      isPrimary
                      hasShadow
                      onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )
                  }
                  <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  // onClick={prevStep}
                  href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button 
                  className="btn"
                  type="link"
                  isBlock
                  isPrimary
                  hasShadow
                  href=""
                  >
                  Back to Home
                  </Button>
                </Controller>
              )}
             </>
            )
          }
        </Stepper>
      </div>
    )
  }
}
