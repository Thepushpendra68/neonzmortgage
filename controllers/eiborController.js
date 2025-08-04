
const Eibor = require('../models/Eibor');

class EiborController {
    async updateEibor (req, res){
          try {
            const eibor = await Eibor.findOneAndUpdate({e_id: 'eid'}, {$set: {...req.body, e_id: 'eid'}}, {upsert: true, returnDocument: 'after'});
            return res.json(eibor)
          } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal server error'})
          }
    }

    async getEibor(req, res){
          try {
            const eibor = await Eibor.findOne({e_id: 'eid'});
            return res.json(eibor)
          } catch (error) {
            console.log(error)
            return res.status(500).json({message: 'Internal server error'})
          }
    } 
};

module.exports = new EiborController;