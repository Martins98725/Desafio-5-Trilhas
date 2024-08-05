const dataSource = require('../models');
const Atrativos = dataSource.Atrativos;
const Destino = dataSource.Destino;
class controller {
    constructor(classService) {
        this.classService = classService;
    }

    async getAll(req, res) {
        try {
            let options = {};
            if(this.classService.model === 'Destino'){
                options.include = [{ model: Atrativos, as: 'Atrativos' }];
            }
            else if(this.classService.model === 'Atrativos'){
                options.include = { model: Destino, as: 'Destino' }
            }
            const listaDeObejtos = await this.classService.getAll(options);
            return res.status(200).json(listaDeObejtos)
        }
        catch (error) {
            console.log(error)
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            let options = {where:  {id: Number(id)}};
            if(this.classService.model === 'Atrativos'){
                options.include = { model: Destino, as: 'Destino' }
            }
            else if(this.classService.model === 'Destino'){
                options.include = [{ model: Atrativos, as: 'Atrativos' }];
            }
            const oneObject = await this.classService.getById(id, options)
            return res.status(200).json(oneObject);
        }
        catch (error) {
            console.log(error)
        }
    }

    async save(req, res) {
        const data = req.body;

        try {
            const newData = await this.classService.create(data);
            return res.status(201).json(newData);
        }
        catch (error) {

        }
    }

    async update(req, res) {
        const { id } = req.params
        const updating = req.body;

        try {
            const isUpadated = await this.classService.update(updating, Number(id));
            if (!isUpadated) {
                return res.status(400).json({ mensagem: 'Não foi possivel atualizar' })
            }
            return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
        } catch (error) {

        }

    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            await this.classService.delete(Number(id))
            return res.status(200).json({ mensagem: `id ${id} deletado` });
        } catch (error) {

        }
    }
}

module.exports = controller;