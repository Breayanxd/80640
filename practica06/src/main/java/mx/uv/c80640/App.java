package mx.uv.c80640;
import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/Juan", (req, res) -> "Hello Juan");
        get("/Pepito", (req, res) -> "Hello Pepito");
        get("/", (req, res) -> "<h1>Bienvenido</h1><img src='https://www.uv.mx/v2/images/logouv.jpg'>");
    }
}
