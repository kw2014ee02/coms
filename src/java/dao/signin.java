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
import java.util.ArrayList;

import org.json.*;

/**
 *
 * @author w15rdknl
 */
public class signin {

    private final Connection connection;

    public signin(String p1, String p2, String p3, String p4, String p5, String table_name) throws Exception {
        connection = dbconnection.getConnection(p1, p2, p3, p4, p5);
    }

    public String getUsers(String callbackFunc, String sql_stmt) {
        String jsonpDataStr = "";
        PreparedStatement ps = null;
        String data_name, data_email, data_department;
        Integer data_id;

        JSONArray myarray = new JSONArray();
        // JSONObject myjsonobj = new JSONObject();
        JSONObject mygrp = new JSONObject();

        try {
            ps = connection.prepareStatement(sql_stmt);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                JSONObject myjsonobj = new JSONObject();

                data_id = rs.getInt("USER_ID");
                data_name = rs.getString("NAME");
                data_email = rs.getString("EMAIL");
                data_department = rs.getString("DEPARTMENT");

                //with Json
                myjsonobj.put("ID", data_id);
                myjsonobj.put("NAME", data_name);
                myjsonobj.put("EMAIL", data_email);
                myjsonobj.put("DEPARTMENT", data_department);

                //    mygrp.put(item_location + places, myjsonobj);
                // places++;
                // myarray.put(myjsonobj.toString());
                myarray.put(myjsonobj);

            }
            rs.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                 if (ps != null) {
                    ps.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        //return myarray;

        jsonpDataStr = myarray.toString();
        return callbackFunc + "(" + jsonpDataStr + ")"; //padding callbackfunction
    }
}
