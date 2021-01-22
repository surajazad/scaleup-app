import React from 'react'
import './WhoBenefits.css'
import Steps from '../Steps/Steps';

const WhoBenefits = () => {
    return (
        <div className="whoBenefits">
        <div className="benefitsHeader">
         <h1>Who benefits from us ? </h1>
        </div>
           <div className="benefitsBody">
             <div class = "col-left">
                  <div class="col-content">Plammimg a Startup?</div>
                  <div class="col-content">Early stage companies</div>
                  <div class="col-content">Established businesses</div>
                  <div class="col-content">Corporate & Enterprises</div>
             </div>
             <div class = "col-arrow">
                  <div class="col-content1"><img src="%PUBLIC_URL%/arrow.ico"></img></div>
                  <div class="col-content1"><img src="%PUBLIC_URL%/arrow.ico"></img></div>
                  <div class="col-content1"><img src="%PUBLIC_URL%/arrow.ico"></img></div>
                  <div class="col-content1"><img src="%PUBLIC_URL%/arrow.ico"></img></div>
             </div>
             <div class = "col-right">
                  <div class="col-right1">
                     <div className="col-right-content">
                     Our business plan template enables you to be future ready for success
                     </div>
                     <div className="col-right-content">
                     Mid to Long term business mentoring to deliver higher growth & profitability
                     </div>
                     <div className="col-right-content">
                         Our Complete Eco System expertise to help in creating new business and personal success
                     </div>
                  </div>
                  <div class="col-right2">
                    <div className="col-right-content">
                     We will help your raise capital
                    </div>
                    <div className="col-right-content">
                    We will help you craft and execute winning stratergies - be it Producr or Channel building or Customer engagement or Marketing plans
                    </div>
                    <div className="col-right-content">
                     Our Leadership programs will build future ready leaders
                    </div>
                  </div>
                  <div class="col-right3">
                    <div className="col-right-content">
                    ..... & more impactpul engagements
                    </div>
                  </div>
             </div>
           </div>
           <div className="benefitsFooter">
            <div>
               <Steps /> 
           </div>
           Key Industries and sectors that we serve
           </div>
        </div>
    )
}

export default WhoBenefits;