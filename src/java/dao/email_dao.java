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
public class email_dao {

    private final Connection connection;

    public email_dao(String p1, String p2, String p3, String p4, String p5, String table_name) throws Exception {
        connection = dbconnection.getConnection(p1, p2, p3, p4, p5);
    }

    public ArrayList<String> getEmails(String callbackFunc, String sql_stmt, String term) {

        ArrayList<String> list = new ArrayList<String>();
        PreparedStatement ps = null;
        String data;

        JSONArray myarray = new JSONArray();

        try {
            //ps = connection.prepareStatement("SELECT EMAIL FROM USER_MGM WHERE UPPER(EMAIL) LIKE UPPER(?)");
            ps = connection.prepareStatement("SELECT email FROM USER_MGM WHERE UPPER(NAME) LIKE UPPER(?)");
            ps.setString(1, term + "%");
            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                data = rs.getString("EMAIL");
                list.add(data);

                JSONObject myjsonobj = new JSONObject();
                //myjsonobj.put("EMAIL", data);
                myjsonobj.put("EMAIL", data);
                myarray.put(myjsonobj);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return list;
       
       //return myarray.toString();

        /* 
        String jsonpDataStr = "";
        PreparedStatement ps = null;
        String data_name, data_email;
        Integer data_id;

        JSONArray myarray = new JSONArray();
        // JSONObject myjsonobj = new JSONObject();
        JSONObject mygrp = new JSONObject();

        try {
            ps = connection.prepareStatement(sql_stmt);
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                JSONObject myjsonobj = new JSONObject();

                //data_id = rs.getInt("USER_ID");
              //  data_name = rs.getString("NAME");
                data_email = rs.getString("EMAIL");

                //with Json
               // myjsonobj.put("ID", data_id);
              //  myjsonobj.put("NAME", data_name);
                myjsonobj.put("EMAIL", data_email);

                //    mygrp.put(item_location + places, myjsonobj);
                // places++;
                // myarray.put(myjsonobj.toString());
                myarray.put(myjsonobj);

            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        //return myarray;

        jsonpDataStr = myarray.toString();
        return callbackFunc + "(" + jsonpDataStr + ")"; //padding callbackfunction


         */
    }

}
