import React, { useState, useEffect } from "react";

import { makeStyles, Grid, Paper, Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';


import Image from '../assets/images/BushfireAfterHills.jpg';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        height: '1000px',
        // filter: 'blur(5px)',
        text: 'white'
    },
    root: {
        position: "absolute",
        margin: "20px",

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
};

function Microsite() {
    const [campaign, setCampaign] = useState([{
        title: '',
        description: '',
        donation: '',
        caseStudy: ''
    }]);

    useEffect(() => {
        fetch('http://localhost:5000/campaigns/campaignSite').then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setCampaign(jsonRes))
    });


    return (
        <div>
            <Paper style={styles.paperContainer}>
                <Grid container height="20px"></Grid>
                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={3} color="white" variant="h2" component="h2">[Bushfires in Murrindindi] {campaign.title}<br />
                    [Description goes here] {campaign.description}</Grid>
                    <Grid item xs={4}><br />
                        <Button size="large">Yes I will chip in {campaign.donation} to help communities like {campaign.caseStudy}'s</Button>

                        <Card className="root" variant="outlined">
                            <CardContent>
                                <Typography className="title" color="textSecondary" gutterBottom>
                                    Tough times in our regions
              </Typography>
                                <Typography variant="h5" component="h2">
                                    {campaign.caseStudy}'s Story
              </Typography>
                                <Typography className="pos" color="textSecondary">
                                    When a human or animal cries for help the instinct of a compassionate community is to do what they can. People in Marysville showed that spirit on Black Saturday, aware that an immense fire was about to descend on our town.

<br />The fire started at 3 pm at Murrindindi old mill, fifty kilometres to the north-west and half an hour later smoke began to billow behind Mt. Gordon. The mountain is several kilometres away from where Marysville is nestled in a valley and it blocks the view out west. By 4:30 the firestorm had razed Narbethong to the ground, a mere ten kilometres westward. The only information was on the local radio, being that the settlement was "being impacted by direct ember attack". The winds were gusting and at 5:15 we lost power in Marysville, by which time the western half of the sky and the sun were blocked out by the massive smoke clouds.

<br />Bev McGeary, a middle-aged masseur, was heading to a friend's house with her cats at 5:30 when a massive tree blew down on her car, on the corner of Lyell and Sedgwick Streets. The front half of the passenger compartment was crushed and she was pinned inside, bleeding from a head wound.              </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Read more about {campaign.caseStudy} </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={1}></Grid>
            </Paper>
        </div>
        // <div class="w3-content w3-container w3-padding-64" id="microSite">
        //     <br />
        //     {campaign.map(campaign =>
        //         <div>
        //             <h1><span>Title: </span>{campaign.title}</h1>
        //             <h2><span>Description: </span>{campaign.description}</h2>
        //             <h2><span>Donation: </span>{campaign.donation}</h2>
        //             <h2><span>Case Study: </span>{campaign.caseStudy}</h2>
        //         </div>
        //     )}
        // </div>
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
