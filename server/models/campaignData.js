import mongoose from 'mongoose';

const campaignSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        donation: {
            type: Number,
            default: 0
        },
        // startDate: {
        //     type: Date,
        //     default: new Date()
        // },
        caseStudy: String,
    }
);

const Campaign = mongoose.model('campaign', campaignSchema);

export default Campaign