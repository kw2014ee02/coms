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
public class auto_input {

    private final Connection connection;

    public auto_input(String p1, String p2, String p3, String p4, String p5, String table_name) throws Exception {
        connection = dbconnection.getConnection(p1, p2, p3, p4, p5);
    }

    public ArrayList<String> getSuggest(String callbackFunc, String sql_stmt, String term, String sql_field_1) {

        ArrayList<String> list = new ArrayList<String>();
        PreparedStatement ps = null;
        String data;

        JSONArray myarray = new JSONArray();

        try {
            //ps = connection.prepareStatement("SELECT EMAIL FROM USER_MGM WHERE UPPER(EMAIL) LIKE UPPER(?)");
            // ps = connection.prepareStatement("SELECT email FROM USER_MGM WHERE UPPER(NAME) LIKE UPPER(?)");
            ps = connection.prepareStatement(sql_stmt);
            ps.setString(1, "%" + term + "%");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                // data = rs.getString("EMAIL");
                data = rs.getString(sql_field_1);
                list.add(data);

                JSONObject myjsonobj = new JSONObject();
                // myjsonobj.put("EMAIL", data);
                myjsonobj.put(sql_field_1, data);
                myarray.put(myjsonobj);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
    }
}
