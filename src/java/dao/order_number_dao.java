/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author w15rdknl
 */
public class order_number_dao {
    
    private final Connection connection;

    public order_number_dao(String p1, String p2, String p3, String p4, String p5, String table_name) throws Exception {
        connection = dbconnection.getConnection(p1, p2, p3, p4, p5);
    }
    
    public ArrayList<String> getOrderNumbers(String callbackFunc, String sql_stmt, String term) {

        ArrayList<String> list = new ArrayList<String>();
        PreparedStatement ps = null;
        String data;


        try {
            //ps = connection.prepareStatement("SELECT EMAIL FROM USER_MGM WHERE UPPER(EMAIL) LIKE UPPER(?)");
            ps = connection.prepareStatement("SELECT * FROM FTP_MASTER WHERE (CAST (FTP_NUMBER AS CHAR(8))) LIKE ?");
            ps.setString(1, term + "%");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                data = rs.getString("FTP_NUMBER");
                list.add(data);
                
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
       
      
    }
    
}
