/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import dao.order_number_full_dao;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONObject;


//import java.sql.Date;
import java.sql.Date;
/**
 *
 * @author w15rdknl
 */
public class create_folder extends HttpServlet {

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
        //response.setContentType("text/html;charset=UTF-8");
        response.setContentType("application/json");

        /* 
        
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
        
        
    Step 1: seperate    Get order table row number 
        
        
        
        
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
         */
        int row_number = 0;

        try {
            /*
            String driver = "apache_derby_net";
            String db_url = "jdbc:derby://localhost:1527/";
            String db_name = "winpak";
            String db_user = "sa";
            String db_pwd = "sa";
            String table_name = "FTP_MASTER";
            String sql_stmt = "SELECT COUNT(*) FROM FTP_MASTER";
            */

            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            String table_name = "USER_MGM";
            String sql_stmt = "SELECT COUNT(*) FROM FTP_MASTER";

            
            String term = request.getParameter("para_1");
            String callbackFunc = request.getParameter("jsonp_test");
            System.out.println("Data from ajax call " + term);

            order_number_full_dao ordernumberDao_full = new order_number_full_dao(driver, db_url, db_name, db_user, db_pwd, table_name);
            row_number = ordernumberDao_full.getRow_Number(callbackFunc, sql_stmt, term);
            // String list = emailDao.getEmails(callbackFunc, sql_stmt, term);
            /*
            try (PrintWriter out = response.getWriter()) {
                // System.out.println("Final Json " + item_locations);
                out.print(row_number);

            }
             */
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }

        /* 
        
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
        
    Step 2: seperate  Create folder
        
        
        
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
         */
        String folder_name = request.getParameter("folder_name");
        String p1 = request.getParameter("para_1");
        String p2 = request.getParameter("para_2");
        String p3 = request.getParameter("para_3");
        String p4 = request.getParameter("para_4");
        String p5 = request.getParameter("para_5");
        String p6 = request.getParameter("para_6");

        int tmp_folder_name = Integer.parseInt(folder_name);
        tmp_folder_name = tmp_folder_name + row_number + 1;
        folder_name = Integer.toString(tmp_folder_name);
        
        Date p9=java.sql.Date.valueOf(p3);

        
//String absolutePathToIndexJSP = servletContext.getRealPath("/") + "index.jsp";
        ServletContext context = getServletContext();
        String str12 = context.getRealPath("/pdf");

        //    PrintWriter out = response.getWriter();
        /*
        String test111 = request.getContextPath();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Servlet NewServlet3</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Servlet NewServlet3 at " + request.getContextPath() + "</h1>");
        out.println("<h1>Servlet NewServlet3 at " + test111 + "</h1>");
        out.println("</body>");
        out.println("</html>");
         */
        //RequestDispatcher view = request.getRequestDispatcher("/result.jsp");
        //view.forward(request, response);
        /*
        out.println("<H1>Hello from a Servlet</h2>");
        out.println("<P>This servlet ran at ");
        out.println(str12);
        out.println("<P>Courtesy of HelloServlet.java 1.2 ");
         */
        str12 = str12 + "\\" + folder_name;
        //    out.println(str12);

        File ProjectDir = new File(str12);
        if (!ProjectDir.exists()) {
            ProjectDir.mkdir();
        }


        /*
        ServletContext context = getServletContext();
        String str12 = context.getRealPath("pdf");
        str12 = str12 + "\\1234";
        File ProjectDir = new File(str12);
        if (!ProjectDir.exists()) {
            ProjectDir.mkdir();
        }
         */

 /*
ServletContext context = getServletContext();
//String str23=context.getResource("/").getPath();  //get root directory
String str23=context.getResource("/pdf").getPath();

PrintWriter out = response.getWriter();  
response.setContentType("text/html");  
out.println("<script type=\"text/javascript\">");  
out.println("alert(str23);");  
out.println("</script>");

str23 = str23 + "/234";
        File ProjectDir = new File(str23);
        if (!ProjectDir.exists()) {
            ProjectDir.mkdir();
        }
         */
//ServletContext.getResourceAsStream("/WEB-INF/config/aa.config");
        //  String term_1 = request.getSession().getServletContext();
        // new File(request.getRealPath("users") + "/me@this.com").mkdir();
        /*
       
       String strProjectDir = "";
               strProjectDir = request.getRealPath("/jsp/NewFolderName");
               File ProjectDir = new File(strProjectDir);
               if (!ProjectDir.exists()) {
                   ProjectDir.mkdir();
               }
         */
        String callbackFunc = request.getParameter("jsonp_test");
        String new_path = context.getRealPath("/pdf/" + folder_name);
        String jsonpDataStr = "";
        JSONArray myarray = new JSONArray();
        JSONObject myjsonobj = new JSONObject();
        try {
            myjsonobj.put("new_order_real_path", new_path);
            myjsonobj.put("folder_name", folder_name);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        myarray.put(myjsonobj);
        jsonpDataStr = myarray.toString();
        String test123 = callbackFunc + "(" + jsonpDataStr + ")";
        // out.print(callbackFunc + "(" + jsonpDataStr + ")"); //padding callbackfunction

        try (PrintWriter out = response.getWriter()) {
            // System.out.println("Final Json " + item_locations);
            out.print(test123);

        }

        /* 
        
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
        
        
    Step 3: seperate   add new row to table 
        
        
        
        
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        
         */
     //   String p_1 = request.getParameter("para_1");
      //  String p_2 = request.getParameter("para_2");
     //   String p_3 = request.getParameter("para_3");
     //   String p_4 = folder_name;
     //   Integer p_5 = row_number;
     
    // String dateString = "2012-12-06 ";  
    
    String p_auto_1 = request.getParameter("p_auto_1");
    String p_auto_2 = request.getParameter("p_auto_2");
    String p_auto_3 = request.getParameter("p_auto_3");
    String p_auto_4 = request.getParameter("p_auto_4");
    String p_auto_5 = request.getParameter("p_auto_5");
    String p_auto_6 = request.getParameter("p_auto_6");
    String p_auto_7 = request.getParameter("p_auto_7");
    
    

        try {
            /*
            String driver = "apache_derby_net";
            String db_url = "jdbc:derby://localhost:1527/";
            String db_name = "winpak";
            String db_user = "sa";
            String db_pwd = "sa";
            String table_name = "FTP_MASTER";
            String sql_stmt = "INSERT INTO FTP_MASTER"
                    + "(FTP_NUMBER, CREATOR, DATE_1, DATE_2, COMM_1, NUMBER_1, NUMBER_2, NUMBER_3,"
                    + " CUSTOMER_NAME, PRODUCT_DESCRIPTION, CUSTOMER_NUMBER, SALE_NUMBER, ITEM_NUMBER,"
                    + " PRIMARY_KEY) VALUES"
                    + "(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            */
            
            String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
            String db_url = "jdbc:sqlserver://128.1.8.132:1433;DatabaseName=";
            String db_name = "winpak";
            String db_user = "SA";
            String db_pwd = "Winpaksql18";
            String table_name = "FTP_MASTER";
            
            /* 
            String sql_stmt = "INSERT INTO FTP_MASTER"
                    + "(FTP_NUMBER, CREATOR, DATE_1, DATE_2, COMM_1, NUMBER_1, NUMBER_2, NUMBER_3,"
                    + " CUSTOMER_NAME, PRODUCT_DESCRIPTION, CUSTOMER_NUMBER, SALE_NUMBER, ITEM_NUMBER,"
                    + " PRIMARY_KEY) VALUES"
                    + "(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
*/
            /* */
            String sql_stmt = "INSERT INTO FTP_MASTER"
                    + "(FTP_NUMBER, CREATOR,  DATE_2, COMM_1, NUMBER_1, NUMBER_2, NUMBER_3,"
                    + " CUSTOMER_NAME, PRODUCT_DESCRIPTION, CUSTOMER_NUMBER, SALE_NUMBER, ITEM_NUMBER, PO_NUMBER, CA_FT_NPQ_NUMBER, LOCK_FLAG,"
                    + " PRIMARY_KEY) VALUES"
                    + "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

            //String term = request.getParameter("para_1");

            //System.out.println("Data from ajax call " + term);
            
           // String create_date=new SimpleDateFormat("MM/dd/yyyy").format(new Date());
            //Timestamp time_1 =new Timestamp(create_date.getTime());
 //java.util.Date date= new java.util.Date();
	// System.out.println(new Timestamp(date.getTime()));
         
         Timestamp time_stamp = new Timestamp(System.currentTimeMillis()); 
         
         

         
            order_number_full_dao ordernumberDao_full = new order_number_full_dao(driver, db_url, db_name, db_user, db_pwd, table_name);
            ordernumberDao_full.addNew_row(callbackFunc, sql_stmt, folder_name, p1, time_stamp, p9,p4,p5,p6,row_number,
                    p_auto_1,p_auto_2,p_auto_3,p_auto_4,p_auto_5,p_auto_6,p_auto_7,"0",
                    folder_name+";"+p_auto_1+";"+p_auto_2+";"+p_auto_3+";"+p_auto_4+";"+p_auto_5+";"+p_auto_6+";"+p_auto_7);
            // String list = emailDao.getEmails(callbackFunc, sql_stmt, term);
            /*
            try (PrintWriter out = response.getWriter()) {
                // System.out.println("Final Json " + item_locations);
                out.print(row_number);

            }
             */
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
