import express from 'express'
import { getCampaigns } from "../controllers/campaignRoutes.js"

const router = express.Router();


router.get('/', getCampaigns);

export default router;