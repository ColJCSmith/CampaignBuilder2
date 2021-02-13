import React, { useState, useEffect } from "react";

function Microsite() {
    const [campaign, setCampaign] = useState([{
        title: '',
        description: '',
        donation: '',
        caseStudy: ''
    }]);

    useEffect(() => {
        fetch('/campaignSite').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCampaign(jsonRes))
    });

    return (
        <div class="w3-content w3-container w3-padding-64" id="microSite">
            <br />
            {campaign.map(campaign =>
                <div>
                    <h1><span>Title: </span>{campaign.title}</h1>
                    <h2><span>Description: </span>{campaign.description}</h2>
                    <h2><span>Donation: </span>{campaign.donation}</h2>
                    <h2><span>Case Study: </span>{campaign.caseStudy}</h2>
                </div>
            )}
        </div>
    )
}

export default Microsite;




// REQUIRES TESTING
// ===========================================

// import React from "react";

// function Microsite() {
//     return (

//         <body class="w3-light-grey">
//             <div class="w3-content" style="max-width:1400px">
//                 <header class="w3-container w3-center w3-padding-32">
//                     <h1><b>My Campaign</b></h1>
//                     <p>Welcome to the blog of <span class="w3-tag">unknown</span></p>
//                 </header>
//                 <div class="w3-row">
//                     <div class="w3-col l8 s12">
//                         <div class="w3-card-4 w3-margin w3-white">
//                             <div class="w3-container">
//                                 <h3><b><span id="title">Campaign Title</span></b></h3>
//                                 <h5><span id="description">Campaign Description</span> <span class="w3-opacity">{Date}</span>
//                                 </h5>
//                             </div>

//                             <div class="w3-container">
//                                 <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem
//                                 euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed
//                                 ultricies mi non congue ullam corper. Praesent tincidunt sed
//                                 tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida
//                         diam non fringilla.</p>
//                                 <div class="w3-row">
//                                     <div class="w3-col m8 s12">
//                                         <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE
//                                         »</b></button></p>
//                                     </div>
//                                     <div class="w3-col m4 w3-hide-small">
//                                         <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span
//                                             class="w3-tag">0</span></span></p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr />
//                         <div class="w3-col l4">
//                             <div class="w3-card w3-margin w3-margin-top">
//                                 <div class="w3-container w3-white">
//                                     <h4><b><span id="caseStudy">Persona Name</span></b></h4>
//                                     <p>Persona Story</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <hr />

//                         <button type="submit" class="btn btn-primary btn-md" id="submit-btn"><span class="fa fa-search"></span>Generate</button>

//                         <button type="submit" class="btn btn-primary btn-md" id="chipin-btn"><span class="fa fa-search"></span>
//                 Yes, I will chip in <span id="caseStudy">Persona Name</span>to help someone like <span
//                                 id="caseStudy">Persona Name</span></button>

//                     </div><br />

//                 </div>

//                 {/* <script type="text/javascript"> */}
//         {/* $("#submit-btn").on("click", function () {

//                     $.get("/api/campaigns/mentalhealth", function (data) {
//                         console.log(data);
//                         if (data) {
//                             $("#title").text(data.title);
//                             $("#description").text(data.description);
//                             $("#caseStudy").text(data.caseStudy);
//                             $("#donation").text(data.donation)
//                         } else {
//                             $("#name").text(
//                                 "The force is not strong with this one. Your character was not found.");
//                         }
//                     });
//         }); */}

//     {/* </script> */}

//             </div>
//         </body>
//     )
// }

// export default Microsite;




//     }, [])

//     const [campaign, setCampaign] = useState([]);

//     const fetchCampaign = async () => {
//         const data = await fetch(
//             'XXXXXXXXXXXX'
//         );

//         const campaign = await data.json();
//         console.log(campaign);
//         setCampaign(campaign);
//     };
