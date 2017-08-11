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
import java.sql.SQLException;
import java.sql.ResultSet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author w15rdknl
 */
public class get_memo extends HttpServlet {

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

            //JSONP
            String callbackFunc = request.getParameter("jsonp_test");
            String jsonpDataStr = "";

            // http parameters 
            String p_directory = request.getParameter("directory");
            String p_filename = request.getParameter("filename");
            System.out.println("Data from ajax call " + p_directory + p_filename);

            //connect db
            Connection connection;
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            String table_name = "MEMO";
            connection = dbconnection.getConnection(driver, db_url, db_name, db_user, db_pwd);

            //  p_directory = "61120003";
            //   p_filename = "9.gif";
            // SQL
            //PreparedStatement ps = null;
            /*
            String sql_stmt = "SELECT * FROM [winpak].[dbo].[MEMO] WHERE"
                    + " DIRECTORY = " + p_directory + " AND "
                    + " FILENAME = " + p_filename;
             */
            
            
            //String sql_stmt = "SELECT * FROM [winpak].[dbo].[MEMO] WHERE DIRECTORY = ? AND FILENAME = ?";
            //String sql_stmt = "SELECT TOP 1 * FROM [winpak].[dbo].[MEMO] WHERE DIRECTORY = ? AND FILENAME = ? ORDER BY TS DESC";
            String sql_stmt = "SELECT TOP 1 * FROM [winpak].[dbo].[MEMO_UPDATE] WHERE ftp_number = ? AND file_name = ? ORDER BY TS DESC";
            PreparedStatement ps = connection.prepareStatement(sql_stmt);
            ps.setString(1, p_directory);
            ps.setString(2, p_filename);

            JSONArray myarray = new JSONArray();
            try {
                ResultSet rs = ps.executeQuery();
                while (rs.next()) {

                    //jsonpDataStr = rs.getString("MEMO"); 
                    JSONObject myjsonobj = new JSONObject();
                    myjsonobj.put("j_memo", rs.getString("MEMO"));
                    myarray.put(myjsonobj);
                }
                rs.close();
            } catch (Exception e) {
                System.out.println(e.getMessage());
            } finally {
                try {
                    ps.close();
                    connection.close();
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }
            }

            jsonpDataStr = myarray.toString();
            //   return callbackFunc + "(" + jsonpDataStr + ")"; //padding callbackfunction

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
