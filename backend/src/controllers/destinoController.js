const Controller = require('./controller');
const DestinoService = require('../service/destinoService');

const { Op } = require('sequelize');

const destinoService = new DestinoService();

class DestinoController extends Controller{
    constructor(){
        super(destinoService);
    }

    async searchByNameOrRegion(query) {
        try {
            const listaDeObejtos = await this.classService.getAll({
                where: {
                    [Op.or]: [
                        { nome: { [Op.like]: `%${query}%` } },
                    ]
                },
                include: [{ model: Atrativos, as: 'Atrativos' }]
            });
            return listaDeObejtos;
        } catch (error) {
            console.error('Erro ao buscar destinos:', error);
            return [];
        }
    }
}

module.exports = DestinoController;

