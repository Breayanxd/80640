package uv.mx;
import static spark.Spark.*;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;


/**
 * Hello world!
 *
 */
public class App 
{
    public static Gson gson = new Gson();
    //base de datos en memoria
    public static Map<String, Usuario> usuarios = new HashMap<>();

    public static void main( String[] args )
    {
        port(80);
        //inicialización de datos
        Usuario u1 = new Usuario("1", "Pablo", "1234");
        Usuario u2 = new Usuario("2", "Ana", "5678");

        usuarios.put(u1.getId(), u1);
        usuarios.put(u2.getId(), u2);

        System.out.println( "Hello World!" );
        before((req, res)-> res.type("application/json"));
        get("/usuario", (req, res) -> gson.toJson(u1));

        //USUARIOS
        get("/usuarios", (req, res) -> gson.toJson(usuarios));


        post("/usuarios", (req, res) ->{
            String datosFormulario =req.body();
            Usuario u = gson.fromJson(datosFormulario, Usuario.class);
            usuarios.put(u.getId(), u);
            return "Usuario agregado";
        });
    }
}
