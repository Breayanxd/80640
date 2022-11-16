package uv.mx;
import static spark.Spark.*;

import com.google.gson.Gson;


/**
 * Hello world!
 *
 */
public class AppDb 
{
    public static Gson gson = new Gson();
    public static void main( String[] args )
    {   
        port(80);
        System.out.println("Hello world");
        before((req, res)->res.type("application/json"));
    }
}
