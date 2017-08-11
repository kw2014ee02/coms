/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.demo;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONValue;
import java.util.List;

/**
 *
 * @author w15rdknl
 */
public class LoadJsonDataServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    public LoadJsonDataServlet() {

    }

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
        String postcode = request.getParameter("type");
        if (postcode == null || postcode.trim().length() == 0) {
            postcode = "BS21 7RH";
        }
        System.out.println("Type: " + postcode);
        List<Person> personList = new Data().getData(postcode);

        int totalNumberOfPages = 1;
        int currentPageNumber = 1;
        int totalNumberOfRecords = 8; // All in there are 8 records in our dummy data object

        JqGridData<Person> gridData = new JqGridData<Person>(totalNumberOfPages, currentPageNumber, totalNumberOfRecords, personList);
        System.out.println("Grid Data: " + gridData.getJsonString());
        response.getWriter().write(gridData.getJsonString());
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
