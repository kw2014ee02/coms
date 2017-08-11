/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import com.google.gson.Gson;
import dao.order_number_full_dao;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author w15rdknl
 */
public class order_number extends HttpServlet {

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
        try {
            /*
            String driver = "apache_derby_net";
            String db_url = "jdbc:derby://localhost:1527/";
            String db_name = "winpak";
            String db_user = "sa";
            String db_pwd = "sa";
            String table_name = "FTP_MASTER";
            String sql_stmt = "SELECT * FROM FTP_MASTER";
*/
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            String table_name = "FTP_MASTER";
            String sql_stmt = "SELECT * FROM FTP_MASTER";

            
            String term = request.getParameter("para_1");
            String callbackFunc = request.getParameter("jsonp_test");
            System.out.println("Data from ajax call " + term);
// term="Order Number";

            String p2 = request.getParameter("para_2");

            if (p2.equals("default")) {
                if (term.trim().equals("Order Number")) {
                    sql_stmt = sql_stmt + " ORDER BY NUMBER_3 DESC";
                } else {
                    sql_stmt = sql_stmt + " ORDER BY (CAST (DATE_2 AS CHAR(10)))  ASC";
                }
            } else {
                Integer p3=Integer.parseInt(p2);
                sql_stmt = sql_stmt + " WHERE FTP_NUMBER = " + p3;
            }

            order_number_full_dao ordernumberDao_full = new order_number_full_dao(driver, db_url, db_name, db_user, db_pwd, table_name);
            String order_list_full = ordernumberDao_full.getOrderNumbers_full(callbackFunc, sql_stmt, term);
            // String list = emailDao.getEmails(callbackFunc, sql_stmt, term);

            try (PrintWriter out = response.getWriter()) {
                // System.out.println("Final Json " + item_locations);
                out.print(order_list_full);

            }
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
