/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Administrator
 */
public class dbconnection {
    //Connection con = null;
    
    public static Connection getConnection(String p1, String p2, String p3, String p4, String p5) {
        Connection con = null;
        
        /*
        String driver="apache_derby_net";
        //String db_url="jdbc:derby://localhost:1527/winpak/";
        String db_url="jdbc:derby://localhost:1527/";
        String db_name="winpak"+"/";
        String db_user="sa";
        String db_pwd="sa";
        */
        
        String driver=p1;
        String db_url=p2;
        String db_name=p3;
        String db_user=p4;
        String db_pwd=p5;
        
        try {
            Class.forName(driver);//Mysql Connection
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(dbconnection.class.getName()).log(Level.SEVERE, null, ex);
        }
        try {
            con = DriverManager.getConnection(db_url+db_name, db_user, db_pwd);//mysql database
    

 
        } catch (SQLException ex) {
            Logger.getLogger(dbconnection.class.getName()).log(Level.SEVERE, null, ex);
        }
        return con;
    }
    
    /*
     ResultSet rs = null;
    
            Class.forName("org.apache.derby.jdbc.ClientDriver").newInstance();
            Connection conn = null;
            conn = DriverManager.getConnection("jdbc:derby://localhost:1527/contact", "nbuser", "123456");
            Statement s = conn.createStatement();
            rs = s.executeQuery("SELECT * FROM FRIENDS");
   */
}
