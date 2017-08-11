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
import java.util.logging.Level;
import java.util.logging.Logger;
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
public class add_memo extends HttpServlet {

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

            String memo_add_flag = "true";

            // http parameters 
            String p_directory = request.getParameter("directory");
            String p_filename = request.getParameter("filename");
            String p_memo = request.getParameter("memo");
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

            //SQL
            int numberOfRows = 0;
            PreparedStatement ps = connection.prepareStatement("SELECT COUNT(*) FROM [winpak].[dbo].[MEMO]");
            try {
                ResultSet rs = ps.executeQuery();

                if (rs.next()) {
                    numberOfRows = rs.getInt(1);
                    System.out.println("numberOfRows= " + numberOfRows);
                    rs.close();
                } else {
                    System.out.println("error: could not get the record counts");
                }
            } catch (Exception e) {
                System.out.println(e.getMessage());
            }

            /*
            try {
                ps = connection.prepareStatement(sql_stmt);
                //ps = connection.prepareStatement("SELECT COUNT(*) FROM FTP_MASTER");
                ResultSet rs = ps.executeQuery();

                if (rs.next()) {
                    numberOfRows = rs.getInt(1);
                    System.out.println("numberOfRows= " + numberOfRows);

                    JSONObject myjsonobj = new JSONObject();
                    myjsonobj.put("ROW_NUMBER", numberOfRows);
                    myarray.put(myjsonobj);

                    rs.close();

                } else {
                    System.out.println("error: could not get the record counts");
                }

            } catch (Exception e) {
                System.out.println(e.getMessage());
            }
             */
            // SQL
            //PreparedStatement ps = null;
            String sql_stmt = "INSERT INTO [winpak].[dbo].[MEMO] ([SERIAL],[DIRECTORY],[FILENAME],[MEMO])"
                    + " VALUES (?,?,?,?)";
            ps = connection.prepareStatement(sql_stmt);
            ps.setInt(1, numberOfRows + 1);
            ps.setString(2, p_directory);
            ps.setString(3, p_filename);
            ps.setString(4, p_memo);
            //ps.setDate(5, "");
            
            /*
            System.out.println(numberOfRows + 1);
            System.out.println(p_directory);
            System.out.println(p_filename);
            System.out.println(p_memo);
            */
            

            try {
                ps.executeUpdate();
            } catch (Exception e) {
                memo_add_flag = "false";  // error
                System.out.println("add error here: " + e.getMessage());
            } finally {
                try {
                    ps.close();
                    connection.close();
                } catch (SQLException e) {
                    System.out.println(e.getMessage());
                }
            }

            //JSONP
            String callbackFunc = request.getParameter("jsonp_test");
            String jsonpDataStr = "1";
            JSONArray myarray = new JSONArray();
            try {
                JSONObject myjsonobj = new JSONObject();
                myjsonobj.put("j_add_memo", memo_add_flag);
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
