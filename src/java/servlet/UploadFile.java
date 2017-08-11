/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.File;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;



/**
 *
 * @author w15rdknl
 */
public class UploadFile extends HttpServlet {

    private static final long serialVersionUID = 1L;
    private final String UPLOAD_DIRECTORY = "C:/Files/";

    //  private final String UPLOAD_DIRECTORY = "C:/Users/w15rdknl/Documents/NetBeansProjects/winpak/web/pdf";
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
        boolean isMultipart = ServletFileUpload.isMultipartContent(request);

        
     //   String userName = request.getParameter("key1");
        /*
        String userName2 = request.getParameter("key2");
        String tes222 = request.getParameter("varname");
        */
   
    /*    
        //此处不新建session，只是去取已经创建的session 
        HttpSession session = request.getSession(false); 
        //如果session能够取到，说明用户已经登录 
        if(session!=null) 
{ 
    order22 = (String)session.getAttribute("order_number"); 

}
        */
        
        // following two lines 2016-06-29
        ServletContext context = getServletContext();
        String upload_path = context.getRealPath("/pdf");
        
        

        // process only if its multipart content
        if (isMultipart) {
            // Create a factory for disk-based file items
            FileItemFactory factory = new DiskFileItemFactory();

            // Create a new file upload handler
            ServletFileUpload upload = new ServletFileUpload(factory);
            try {
                // Parse the request
                List<FileItem> multiparts = upload.parseRequest(request);
                
                 for (FileItem item_para_1 : multiparts) {
                    if (item_para_1.isFormField()) {
                        String filed_name=item_para_1.getFieldName();
                        if (filed_name.equals("order_number")){
                            String field_value = item_para_1.getString();
                            upload_path=upload_path+"\\"+field_value;
                        }
                        
                    }                    
                 }

                 for (FileItem item_para : multiparts) {
                    if (!item_para.isFormField()) {
                       String name = new File(item_para.getName()).getName();
                        //item.write(new File(UPLOAD_DIRECTORY + File.separator + name));
                        
                         // following one lines 2016-06-29
                        item_para.write(new File(upload_path + File.separator + name));
                    }                    
                 }
               
                 
                 
             /*    
                for (FileItem item : multiparts) {
                    if (!item.isFormField()) {
                        String name = new File(item.getName()).getName();
                        //item.write(new File(UPLOAD_DIRECTORY + File.separator + name));
                        
                         // following one lines 2016-06-29
                        item.write(new File(upload_path + File.separator + name));
                    }
                    else{
                        String test11111=item.getFieldName();
                        String fieldvalue = item.getString();
                        Integer no1=123;
                    }
                }
                */
            } catch (Exception e) {
                System.out.println("File upload failed");
            }
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
