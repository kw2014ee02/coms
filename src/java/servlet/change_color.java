/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import dao.dbconnection;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author w15rdknl
 */
public class change_color extends HttpServlet {

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
        response.setContentType("text/html;charset=UTF-8");
        response.setContentType("application/json");
        try {

            String color_update_msg = "true";

            // http parameters 
            String p_ftp_number = request.getParameter("ftp_number");
            String p_filename = request.getParameter("filename");
            String p_color = request.getParameter("color");
            String p_type = request.getParameter("type");

            //connect db
            Connection connection;
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            connection = dbconnection.getConnection(driver, db_url, db_name, db_user, db_pwd);

            // SQL   
            String sql_stmt = "";

            /*
                IF NOT EXISTS (SELECT * FROM [winpak].[dbo].[COLOR] WHERE ftp_number = 61080016 AND file_name = '61003 $01 Plain 3 Side Seal Pouch (3).xlsx' ) 
                INSERT INTO [winpak].[dbo].[COLOR] (ftp_number, file_name, color) VALUES (61080016,'61003 $01 Plain 3 Side Seal Pouch (3).xlsx','rgb(255, 128, 128)') 
                ELSE UPDATE [winpak].[dbo].[COLOR] SET color = 'rgb(0, 0, 128)' WHERE ftp_number = 61080016 AND file_name = '61003 $01 Plain 3 Side Seal Pouch (3).xlsx'
             */
            sql_stmt = "IF NOT EXISTS (SELECT * FROM COLOR"
                    + " WHERE ftp_number = " + p_ftp_number
                    + " AND file_name = " + "\'" + p_filename + "\'"
                    + " )"
                    + " INSERT INTO COLOR (ftp_number, file_name, color) VALUES ("
                    + p_ftp_number + ","
                    + "\'" + p_filename + "\'" + ","
                    + "\'" + p_color + "\'"
                    + ")"
                    + " ELSE UPDATE COLOR SET color ="
                    + "\'" + p_color + "\'"
                    + " WHERE ftp_number = " + p_ftp_number
                    + " AND file_name = " + "\'" + p_filename + "\'";

            PreparedStatement ps = connection.prepareStatement(sql_stmt);
            // ResultSet rs = null;

            try {
                ps.executeUpdate();
            } catch (Exception e) {
                color_update_msg = "false";
                /*
                if (p_type.equals("change")) {
                    //color_update_msg = "error while changing color for" + p_ftp_number + "  " + p_filename;  // error
                    color_update_msg = "false";
                } else {
                    //color_update_msg = "error while getting color for " + p_ftp_number + "  " + p_filename;  // error
                    color_update_msg = "false";
                }
                 */
                System.out.println("error color here: " + e.getMessage());
            } finally {
                try {
                    if (ps != null) {
                        ps.close();
                    }
                    connection.close();
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }
            }

            //JSONP
            String callbackFunc = request.getParameter("jsonp_test");
            //String jsonpDataStr;
            JSONArray myarray = new JSONArray();
            try {
                JSONObject myjsonobj = new JSONObject();
                myjsonobj.put("j_modify_color", color_update_msg);
                myarray.put(myjsonobj);
            } catch (JSONException e) {
                System.out.println(e.getMessage());
            }

            String jsonpDataStr = myarray.toString();
            String return_str = callbackFunc + "(" + jsonpDataStr + ")";

            try (PrintWriter out = response.getWriter()) {
                out.print(return_str);

            }
        } catch (SQLException | NumberFormatException e) {
            System.err.println(e.getMessage());
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
