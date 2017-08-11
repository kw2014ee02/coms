/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.File;
import javax.servlet.ServletContext;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author w15rdknl
 */
public class get_file_list extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");

        String callbackFunc = request.getParameter("jsonp_test");
        String jsonpDataStr = "";
        JSONArray myarray = new JSONArray();

        String folder_name = request.getParameter("folder_name");
        ServletContext context = getServletContext();
        String real_path = context.getRealPath(folder_name);
        real_path = real_path.replace('\\', '/');

        File f = null;
        File[] paths;
        
        String file_name="";
        String path_name="";

        try {

            f = new File(real_path);
            // returns pathnames for files and directory
            paths = f.listFiles();                      

            // for each pathname in pathname array
            for (File path : paths) {
                // prints file and directory paths
                //System.out.println(path);
                file_name = path.getName();
                path_name= path.getPath();
                try {
                    JSONObject myjsonobj = new JSONObject();
                    myjsonobj.put("full_file", path);
                    myjsonobj.put("file_name", path.getName());
                    myjsonobj.put("file_path", path.getPath());                 
                    myarray.put(myjsonobj);
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                }
            }
        } catch (Exception e) {
            // if any error occurs
            e.printStackTrace();
        }

        jsonpDataStr = myarray.toString();
        String return_str = callbackFunc + "(" + jsonpDataStr + ")";
        // out.print(callbackFunc + "(" + jsonpDataStr + ")"); //padding callbackfunction

        try (PrintWriter out = response.getWriter()) {
            // System.out.println("Final Json " + item_locations);
            out.print(return_str);

        }

    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
