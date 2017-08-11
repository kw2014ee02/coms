/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import dao.table_test_signin;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author w15rdknl
 */
public class table_test extends HttpServlet {

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

            String driver = "apache_derby_net";
            String db_url = "jdbc:derby://localhost:1527/";
            String db_name = "winpak";
            String db_user = "sa";
            String db_pwd = "sa";
            String table_name = "USER_MGM";
            String sql_stmt = "SELECT * FROM USER_MGM";
            
            

            // test http parameters 
            String term_1 = "1001";
            String term_2 = "123456";
            System.out.println("Data from ajax call " + term_1 + term_2);
                                                        

            table_test_signin user_signin = new table_test_signin(driver, db_url, db_name, db_user, db_pwd, table_name);

            String callbackFunc = request.getParameter("jsonp_test");
            //term_1="1001";
            //term_2="123456";
            sql_stmt=sql_stmt+" WHERE user_id = " + term_1 + " AND " + "PWD = " + "\'" + term_2 + "\'";
            String user_list = user_signin.getUsers(callbackFunc, sql_stmt);
            //String searchList = new Gson().toJson(list);
            //  response.getWriter().write(searchList);

            System.out.println("fsagagge");

            try (PrintWriter out = response.getWriter()) {
                // System.out.println("Final Json " + item_locations);
                out.print(user_list);

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
