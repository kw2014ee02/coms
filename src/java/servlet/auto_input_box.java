/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import dao.auto_input;

/**
 *
 * @author w15rdknl
 */
public class auto_input_box extends HttpServlet {

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

        String p1 = request.getParameter("p1");

        try {
            
            /*
            String driver = "apache_derby_net";
            String db_url = "jdbc:derby://localhost:1527/";
            String db_name = "winpak";
            String db_user = "sa";
            String db_pwd = "sa";
*/
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";

            
            
            /*
            String table_name = "AUTO_CUSTOMER_NAME";
            String sql_field_1 = "CUSTOMER_NAME";     // result field
            String sql_field_2 = "CUSTOMER_NAME";     // comparing / searching field            
            String sql_stmt = "SELECT " + sql_field_1 + " FROM " + table_name + " WHERE UPPER(" + sql_field_2 + ") LIKE UPPER(?)";
             */
            String table_name = "";
            String sql_field_1 = "";     // result field
            String sql_field_2 = "";     // comparing / searching field            
            String sql_stmt = "";

            switch (p1) {
                case "customer_name":
                    table_name = "AUTO_CUSTOMER_NAME";
                    sql_field_1 = "CUSTOMER_NAME";     // result field
                    sql_field_2 = "CUSTOMER_NAME";     // comparing / searching field            
                    sql_stmt = "SELECT " + sql_field_1 + " FROM " + table_name + " WHERE UPPER(" + sql_field_2 + ") LIKE UPPER(?)";
                    break;
                case "product_description":
                    table_name = "AUTO_CUSTOMER_NAME";
                    sql_field_1 = "CUSTOMER_NAME";     // result field
                    sql_field_2 = "CUSTOMER_NAME";     // comparing / searching field            
                    sql_stmt = "SELECT " + sql_field_1 + " FROM " + table_name + " WHERE UPPER(" + sql_field_2 + ") LIKE UPPER(?)";
                    break;
                case "primary_key":
                    table_name = "FTP_MASTER";
                    sql_field_1 = "PRIMARY_KEY";     // result field
                    sql_field_2 = "PRIMARY_KEY";     // comparing / searching field            
                    sql_stmt = "SELECT " + sql_field_1 + " FROM " + table_name + " WHERE UPPER(" + sql_field_2 + ") LIKE UPPER(?)";
                    break;
                case "template_search":
                  //  table_name = "TEMPLATE";   //未在文件名前加61008（step number）时候的表名
                    table_name = "TEMPLATE_FOR_TEMPLATE_SEARCH";   //新
                    sql_field_1 = "FILE_NAME";     // result field
                    sql_field_2 = "FILE_NAME";     // comparing / searching field            
                    sql_stmt = "SELECT " + sql_field_1 + " FROM " + table_name + " WHERE UPPER(" + sql_field_2 + ") LIKE UPPER(?)";
                    break;

                    

                default:

                    break;
            }

            String term = request.getParameter("term");
            String callbackFunc = request.getParameter("jsonp_test");
            System.out.println("Data from ajax call " + term);

            //  term="a";
            auto_input auto_input_dao = new auto_input(driver, db_url, db_name, db_user, db_pwd, table_name);
            ArrayList<String> list = auto_input_dao.getSuggest(callbackFunc, sql_stmt, term, sql_field_1);
            // String list = emailDao.getEmails(callbackFunc, sql_stmt, term);

            String searchList = new Gson().toJson(list);

            searchList = callbackFunc + "(" + searchList + ")";
            //  return callbackFunc + "(" + jsonpDataStr + ")"; //padding callbackfunction

            response.getWriter().write(searchList);
        } catch (Exception e) {
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
