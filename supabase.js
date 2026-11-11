
// ========================================
// UNIVERSO ENTRE LINEAS
// Conexion con Supabase
// ========================================

const SUPABASE_URL = "https://uylzswlxmlmovhgqmfht.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_wS1DKixR5HB1ssNXNgJ0sg_KtKEiLs_";

// Crear conexion
const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// Hacer disponible la conexion
window.supabaseClient = supabaseClient;

console.log("Universo Entre Líneas: conexión preparada.");
