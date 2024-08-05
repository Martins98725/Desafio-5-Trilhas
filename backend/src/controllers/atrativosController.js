const Controller = require('./controller');
const AtrativoService = require('../service/atrativoService');

const atrativoService = new AtrativoService();

class AtrativoController extends Controller{
    constructor(){
        super(atrativoService)
    }
}
module.exports = AtrativoController;