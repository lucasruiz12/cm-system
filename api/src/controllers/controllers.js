const { Turn } = require('../db');

//////////////////////////////// GET ////////////////////////////////

const getAllTurns = async (req, res, next) => {
    const allTurns = await Turn.findAll();
    try {
        allTurns.length ? res.status(200).send(allTurns) : res.status(404).send('No hay turnos aún')
    }
    catch (error) {
        next(error)
    }
};

const getOneTurn = async (req, res, next) => {
    const { id } = req.params;
    try {
        const oneTurn = await Turn.findOne({
            where: {
                id: id
            }
        });
        oneTurn? res.status(200).send(oneTurn) : res.status(404).send('No hay turne con este número de id')
    }
    catch (error) {
        next(error);
    }
}

//////////////////////////////// POST ////////////////////////////////

const createTurn = async (req, res, next) => {
    const {
        fullname,
        dni,
    } = req.body
    const allTurns = await Turn.findAll()
    const checkTurn = await allTurns.filter((el) => dni === el.dni)

    try {
        if (!checkTurn.length) {
            const newTurn = await Turn.create({
                fullname,
                dni,
            });
            res.status(200).send(`Turno creado para: ${newTurn.fullname}`);
        }
        else {
            res.status(404).send(`Ya creaste un turno ese día y a esa hora!`)
        }
    }
    catch (error) {
        console.log("Omar, algo anda mal!")
        next(error);
    }
}

//// VER TEMA TURNERO YA

//////////////////////////////// PUT ////////////////////////////////

const updateTurn = async (req, res, next) => {
    const { dni } = req.params;
    let Turn = req.body;
    try {
        const updateTurn = await Turn.update(Turn, {
            where: {
                dni: dni,
            }
        })
        res.status(200).send("Usuario actualizado")
    }
    catch (error) {
        next(error)
    }
}

const updateAllNewMonth = async (req, res, next) => {
    try {
        const allTurns = await Turn.findAll();
        const newMonth = await allTurns.map((el) => {
            const update = el.update({state: false})
        })
        console.log("Pasando todo a false");
        res.status(200).send("Nuevo mes iniciado! Todos los usuarios en rojo.")
    }
    catch(error){
        next(error);
    }
}

//////////////////////////////// DELETE ////////////////////////////////

const deleteTurn = async (req, res, next) => {
    const {id} = req.body
    try {
        const turnToDelete = await Turn.destroy({
            where: {
                id: id
            }
        })
        res.status(200).send('Turno eliminado')
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    getAllTurns,
    getOneTurn,
    createTurn,
    updateTurn,
    updateAllNewMonth,
    deleteTurn
}