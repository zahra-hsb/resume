const { Schema, default: mongoose } = require("mongoose");


const PortfolioSchema = new Schema({
    name: {
        type: String
    },
    github_link: {
        type: String
    },
    website_link: {
        type: String
    },
    readme_link: {
        type: String,
    },
    readme_texts: {
        type: String
    }
})  



const PortfolioModel = mongoose.models.portfolios || mongoose.model('portfolios', PortfolioSchema)

export default PortfolioModel