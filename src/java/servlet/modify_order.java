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
import java.sql.Date;
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
public class modify_order extends HttpServlet {

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

            String order_update_flag = "true";

            // http parameters 
            String p_cus_name = request.getParameter("p_cus_name");
            String p_pro_desc = request.getParameter("p_pro_desc");
            String p_date_tmp = request.getParameter("p_date");
            //String p_date_tmp = "2017-01-01";
            Date p_date = java.sql.Date.valueOf(p_date_tmp);
            String p_gr_po = request.getParameter("p_gr_po");
            String p_cus_number = request.getParameter("p_cus_number");
            String p_sale_number = request.getParameter("p_sale_number");
            String p_item_number = request.getParameter("p_item_number");
            String p_ca_ft_npq = request.getParameter("p_ca_ft_npq");

            String p_ftp_number = request.getParameter("p_ftp_number");
            String p_order_memo_area = request.getParameter("p_order_memo_area");

            /* 
            p_cus_name = "gggggggg22";
            p_pro_desc = "ggggggg2";
            p_date_tmp = "2017-01-01";
            p_date = java.sql.Date.valueOf(p_date_tmp);
            p_gr_po = "ggggggg2";
            p_cus_number = "22225";
            p_sale_number = "22225";
            p_item_number = "22225";
            p_ca_ft_npq = "22225";
            p_ftp_number = "61990002";
             */
            //connect db
            Connection connection;
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            String table_name = "FTP_MASTER";
            connection = dbconnection.getConnection(driver, db_url, db_name, db_user, db_pwd);

            // SQL
            String sql_stmt = "UPDATE [winpak].[dbo].[FTP_MASTER]"
                    + " SET CUSTOMER_NAME = ?, PRODUCT_DESCRIPTION = ?, DATE_2 = ?, PO_NUMBER = ?,"
                    + " CUSTOMER_NUMBER = ?, SALE_NUMBER = ?, ITEM_NUMBER = ?, CA_FT_NPQ_NUMBER = ?, LOCK_TXT = ?,"
                    + " PRIMARY_KEY = ?"
                    + " WHERE FTP_NUMBER = ?";

            PreparedStatement ps = connection.prepareStatement(sql_stmt);
            ps.setString(1, p_cus_name);
            ps.setString(2, p_pro_desc);
            ps.setDate(3, p_date);
            ps.setString(4, p_gr_po);
            ps.setString(5, p_cus_number);
            ps.setString(6, p_sale_number);
            ps.setString(7, p_item_number);
            ps.setString(8, p_ca_ft_npq);
            ps.setString(9, p_order_memo_area);
            ps.setString(10, p_ftp_number + ";" + p_cus_name + ";" + p_pro_desc + ";" + p_gr_po + ";" + p_cus_number + ";" + p_sale_number + ";" + p_item_number + ";" + p_ca_ft_npq);

            ps.setString(11, p_ftp_number);

            try {
                ps.executeUpdate();
            } catch (Exception e) {
                order_update_flag = "false";  // error
                System.out.println("modify error here: " + e.getMessage());
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
                myjsonobj.put("j_modify_memo", order_update_flag);
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
