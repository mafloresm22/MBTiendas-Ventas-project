import Swal from "sweetalert2";
import { supabase } from "../index"
const tabla = "categorias"

export async function InsertarCategorias(p, file) {
    const { error, data } = await supabase.rpc("insertarCategorias", p)
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Error al insertar categoria",
            text: error.message,
        });
        return;
    }
    const img = file.size;
    if (img != undefined) {
        const nuevo_idCategorias = data;
        const urlImagen = await subirImagen(nuevo_idCategorias, file)
        const iconoEditar = {
            icono: urlImagen.publicUrl,
            idCategorias: nuevo_idCategorias
        }
        await EditarIconoCategorias(iconoEditar)
    }
}

async function subirImagen(idCategorias, file) {
    const ruta = "categorias/" + idCategorias
    const { data, error } = await supabase.storage
        .from("imagenes")
        .upload(ruta, file, {
            cacheControl: "0",
            upsert: true,
        });
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Oops... ha ocurrido un error",
            text: error.message,
        });
        return;
    }

    if (data) {
        const { data: urlimagen } = await supabase.storage
            .from("imagenes")
            .getPublicUrl(ruta);
        return urlimagen;
    }
}

async function EditarIconoCategorias(p) {
    const { error } = await supabase.from("categorias").update(p).eq("idCategorias", p.idCategorias);
    if (error) {
        Swal.fire({
            icon: "error",
            title: "Error al editar categoria",
            text: error.message,
        });
        return;
    }
}

export async function ListarCategorias(p) {
    const { data } = await supabase
        .from(tabla)
        .select()
        .eq("idEmpresaCategorias", p.idEmpresaCategorias)
        .order('idCategorias', { ascending: false });
    return data;
}