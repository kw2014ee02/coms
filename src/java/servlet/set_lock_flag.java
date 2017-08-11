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
public class set_lock_flag extends HttpServlet {

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

            boolean set_lock = true;  // success

            // http parameters 
            String p_order_number = request.getParameter("p_order_number");
            String p_lock = request.getParameter("p_lock");
            String p_user = request.getParameter("p_user");
            System.out.println("Data from ajax call " + p_order_number + p_lock);

            //connect db
            Connection connection;
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            String table_name = "FTP_MASTER";
            connection = dbconnection.getConnection(driver, db_url, db_name, db_user, db_pwd);

            //String sql_stmt = "UPDATE FTP_MASTER SET [LOCK_FLAG]=" + p_lock + " WHERE [FTP_NUMBER]=" + p_order_number;
            String sql_stmt = "UPDATE FTP_MASTER SET LOCK_FLAG=" + p_lock + ", LOCKED_BY=" + "\'" + p_user + "\'" + " WHERE [FTP_NUMBER]=" + p_order_number;
            PreparedStatement ps = connection.prepareStatement(sql_stmt);

            try {
                ps.executeUpdate();
            } catch (Exception e) {
                set_lock = false;
                System.out.println("lock servlet error here: " + e.getMessage());
            } finally {
                try {
                    ps.close();
                    connection.close();
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }
            }

            /* */
            //JSONP
            String callbackFunc = request.getParameter("jsonp_test");
            String jsonpDataStr = "";
            JSONArray myarray = new JSONArray();
            try {
                JSONObject myjsonobj = new JSONObject();
                //myjsonobj.put("j_set_lock", set_lock);
                if (set_lock) {
                    myjsonobj.put("j_lock_user", p_user);
                } else {
                    myjsonobj.put("j_lock_user", "000000");
                }
                myarray.put(myjsonobj);
            } catch (JSONException e) {
                System.out.println(e.getMessage());
            }

            jsonpDataStr = myarray.toString();
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
