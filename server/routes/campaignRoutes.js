import express from 'express'

const router = express.Router();
import Campaign from '../models/campaignData.js'

// router.route('/create').post((req, res) => {
router.route('/create').post((req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const donation = req.body.donation;
    const caseStudy = req.body.caseStudy;
    const newCampaign = new Campaign({
        title,
        description,
        donation,
        caseStudy
    })

    newCampaign.save()
})

router.route('/campaignSite').get((req, res) => {
    Campaign.find()
        .then(foundCampaign => res.json(foundCampaign))
})

export default router;




// WITH CONTROLLER METHOD
// ===========================

// import express from 'express'
// import { getCampaigns, createCampaign } from "../controllers/campaignRoutes.js"

// const router = express.Router();


// router.get('/', getCampaigns);
// router.post('/', createCampaign);


// export default router;