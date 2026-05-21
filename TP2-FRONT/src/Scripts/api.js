import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
	import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
	import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase =
	supabaseUrl && supabaseKey
		? createClient(supabaseUrl, supabaseKey)
		: null;

export async function getProducts(category,prenda) {
	if (!supabase) {
		return {
			data: null,
			error: new Error(
				"Missing Supabase environment variables: VITE_SUPABASE_URL and key"
			),
		};
	}

	let query = supabase
		.from("producto")
		.select('*')
		.order("nombre", { ascending: true });
		if(category) {
			query = query.eq('type', category)
		}
		if(prenda) {
			query = query.eq('prenda', prenda)
		}
		return(query)
}
export async function getProduct(id) {
	if (!supabase) {
		return {
			data: null,
			error: new Error(
				"Missing Supabase environment variables: VITE_SUPABASE_URL and key"
			),
		};
	}

	return supabase
		.from("producto")
		.select('*')
		.eq('id', id)
}
