const supabase = require('../config/supabase');
const { nanoid } = require('nanoid');

module.exports = {
  getItems: async function () {
    const { data, error } = await supabase
      .from('content')
      .select('*');
    return { data, error };
  },

  getItemById: async function (id) {
    const { data, error } = await supabase
      .from('content')
      .select('*')
      .eq('id', id)
      .single();
    return { data, error };
  },

  createItem: async function (itemData) {
    const id = nanoid();
    const { title, image_url, description } = itemData;
    const { data, error } = await supabase
      .from('content')
      .insert([
        { id, title, image_url, description }
      ]);
    return { data, error };
  },

  updateItem: async function (id, itemData) {
    const { title, image_url, description } = itemData;
    const { data, error } = await supabase
      .from('content')
      .update({ title, image_url, description })
      .match({ id });
    return { data, error };
  },

  deleteItem: async function (id) {
    const { data, error } = await supabase
      .from('content')
      .delete()
      .match({ id });
    return { data, error };
  }
};
