const supabase = require('../config/supabaseClient');

const obtenerTodos = async (req, res) => {
    const { data, error } = await supabase
        .from('objetos')
        .select('*');

    res.json({ data, error });
};

const obtenerPorId = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('objetos')
        .select('*')
        .eq('id', id)
        .single();

    res.json({ data, error });
};

const crear = async (req, res) => {
    const { nombre, tipo, valor, equipado } = req.body;

    const { data, error } = await supabase
        .from('objetos')
        .insert({
            nombre,
            tipo,
            valor,
            equipado
        })
        .select()
        .single();

    res.json({ data, error });
};

const actualizar = async (req, res) => {
    const { id } = req.params;
    const { nombre, tipo, valor, equipado } = req.body;

    const { data, error } = await supabase
        .from('objetos')
        .update({
            nombre,
            tipo,
            valor,
            equipado
        })
        .eq('id', id)
        .select()
        .single();

    res.json({ data, error });
};

const eliminar = async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('objetos')
        .delete()
        .eq('id', id)
        .select()
        .single();

    res.json({ data, error });
};

const filtrarPorTipo = async (req, res) => {
    const { tipo } = req.query;

    const { data, error } = await supabase
        .from('objetos')
        .select('*')
        .eq('tipo', tipo);

    res.json({ data, error });
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    crear,
    actualizar,
    eliminar,
    filtrarPorTipo
};