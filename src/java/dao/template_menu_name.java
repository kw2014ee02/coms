/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
/**
 *
 * @author w15rdknl
 */
public class template_menu_name {
    
     private final Connection connection;

    public template_menu_name(String p1, String p2, String p3, String p4, String p5, String table_name) throws Exception {
        connection = dbconnection.getConnection(p1, p2, p3, p4, p5);
    }
    
    public String get_menu_name(String callbackFunc, String p1) {

        PreparedStatement ps = null;
        JSONArray myarray = new JSONArray();

        try {
            ps = connection.prepareStatement("SELECT MENU_NAME FROM TEMPLATE WHERE UPPER(FILE_NAME) = UPPER(?)");
            ps.setString(1, p1);
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                JSONObject myjsonobj = new JSONObject();
                myjsonobj.put("MENU_NAME", rs.getString("MENU_NAME"));
                myarray.put(myjsonobj);
            }
        } catch (SQLException | JSONException e) {
            System.out.println(e.getMessage());
        }
        String jsonpDataStr = myarray.toString();
        return callbackFunc + "(" + jsonpDataStr + ")"; //padding callbackfunction
    }

    
}
