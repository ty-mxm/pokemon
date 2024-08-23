import Pokemon from "@/modeles/pokemon";

export const fetchPokemonByID = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    
    if (!response.ok) {
      throw new Error(`Pokemon with ID ${id} not found`);
    }

    const data = await response.json();
    const pokemon = new Pokemon(id, data);
    return pokemon;
  } catch (error) {
    console.error(`Error fetching Pokemon by ID: ${error.message}`);
    throw error;  // Rethrow the error to handle it in the calling function
  }
};
