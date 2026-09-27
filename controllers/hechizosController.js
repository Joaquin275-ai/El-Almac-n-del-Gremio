const supabase = require('../config/supabaseClient');

const obtenerTodos = async (req, res) => {
    const { data, error } = await supabase
        .from('hechizos')
        .select('*');

    res.json({ data, error });
};

const obtenerPorId = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('hechizos')
        .select('*')
        .eq('id', id)
        .single();

    res.json({ data, error });
};

const crear = async (req, res) => {
    const { nombre, escuela, mana_requerido, aprendido } = req.body;

    const { data, error } = await supabase
        .from('hechizos')
        .insert({
            nombre,
            escuela,
            mana_requerido,
            aprendido
        })
        .select()
        .single();

    res.json({ data, error });
};

const actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, escuela, mana_requerido, aprendido } = req.body;

    const { data, error } = await supabase
        .from('hechizos')
        .update({
            nombre,
            escuela,
            mana_requerido,
            aprendido
        })
        .eq('id', id)
        .select()
        .single();

    res.json({ data, error });
};

const eliminar = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('hechizos')
        .delete()
        .eq('id', id)
        .select()
        .single();

    res.json({ data, error });
};

const filtrarPorEscuela = async (req, res) => {
    const { escuela } = req.query;

    const { data, error } = await supabase
        .from('hechizos')
        .select('*')
        .eq('escuela', escuela);

    res.json({ data, error });
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
    filtrarPorEscuela
};