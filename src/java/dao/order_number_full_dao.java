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
import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.sql.Date;
import org.json.JSONArray;
import org.json.JSONObject;

/**
 *
 * @author w15rdknl
 */
public class order_number_full_dao {

    private final Connection connection;

    public order_number_full_dao(String p1, String p2, String p3, String p4, String p5, String table_name) throws Exception {
        connection = dbconnection.getConnection(p1, p2, p3, p4, p5);
    }

    public String getOrderNumbers_full(String callbackFunc, String sql_stmt, String term) {
        String jsonpDataStr = "";
        PreparedStatement ps = null;
        Date data_due_date;
        DateFormat df = new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");
        Integer FTP_NUMBER;

        String p_auto_1, p_auto_2, p_auto_3, p_auto_4, p_auto_5, p_auto_6, p_auto_7, p_auto_8, p_auto_9, p_auto_10;

        JSONArray myarray = new JSONArray();
        // JSONObject myjsonobj = new JSONObject();
        JSONObject mygrp = new JSONObject();

        try {
            ps = connection.prepareStatement(sql_stmt);

            // ps = connection.prepareStatement("SELECT * FROM FTP_MASTER");          
            ResultSet rs = ps.executeQuery();

            while (rs.next()) {

                JSONObject myjsonobj = new JSONObject();

                FTP_NUMBER = rs.getInt("FTP_NUMBER");
                data_due_date = rs.getDate("DATE_2");

                p_auto_1 = rs.getString("CUSTOMER_NAME");
                p_auto_2 = rs.getString("PRODUCT_DESCRIPTION");
                p_auto_3 = rs.getString("CUSTOMER_NUMBER");
                p_auto_4 = rs.getString("SALE_NUMBER");
                p_auto_5 = rs.getString("ITEM_NUMBER");

                p_auto_6 = rs.getString("PO_NUMBER");
                p_auto_7 = rs.getString("CA_FT_NPQ_NUMBER");

                p_auto_8 = rs.getString("LOCK_FLAG");
                p_auto_9 = rs.getString("LOCK_TXT");
                p_auto_10 = rs.getString("LOCKED_BY");

                //with Json
                myjsonobj.put("FTP_NUMBER", FTP_NUMBER);
                myjsonobj.put("DUE_DATE", data_due_date);

                myjsonobj.put("CUSTOMER_NAME", p_auto_1);
                myjsonobj.put("PRODUCT_DESCRIPTION", p_auto_2);
                myjsonobj.put("CUSTOMER_NUMBER", p_auto_3);
                myjsonobj.put("SALE_NUMBER", p_auto_4);
                myjsonobj.put("ITEM_NUMBER", p_auto_5);

                myjsonobj.put("PO_NUMBER", p_auto_6);
                myjsonobj.put("CA_FT_NPQ_NUMBER", p_auto_7);
                myjsonobj.put("LOCK_FLAG", p_auto_8);
                myjsonobj.put("LOCK_TXT", p_auto_9);
                myjsonobj.put("LOCKED_BY", p_auto_10);

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

    public int getRow_Number(String callbackFunc, String sql_stmt, String term) {
        String jsonpDataStr = "";
        PreparedStatement ps = null;

        int numberOfRows = 0;
        JSONArray myarray = new JSONArray();

        try {
            ps = connection.prepareStatement(sql_stmt);
            //ps = connection.prepareStatement("SELECT COUNT(*) FROM FTP_MASTER");
            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                numberOfRows = rs.getInt(1);
                System.out.println("numberOfRows= " + numberOfRows);

                JSONObject myjsonobj = new JSONObject();
                myjsonobj.put("ROW_NUMBER", numberOfRows);
                myarray.put(myjsonobj);

                rs.close();

            } else {
                System.out.println("error: could not get the record counts");
            }

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
        //return callbackFunc + "(" + jsonpDataStr + ")"; //padding callbackfunction
        return numberOfRows;
    }

    public void addNew_row(String callbackFunc, String sql_stmt,
            String order_number, String creator, Timestamp date_1, Date date_2, String comm, String number_1, String number_2, Integer number_3,
            String p_auto_1, String p_auto_2, String p_auto_3, String p_auto_4, String p_auto_5, String p_auto_PO, String p_auto_CA, String p_auto_Lock,  String p_auto_6) {
        PreparedStatement ps = null;

        try {
            //ps = connection.prepareStatement(sql_stmt);
            /*
            ps = connection.prepareStatement("INSERT INTO FTP_MASTER" 
                    + " (FTP_NUMBER, CREATOR, DATE_1, DATE_2, COMM_1, NUMBER_1, NUMBER_2, NUMBER_3) VALUES" 
                    + " (?,?,?,?,?,?,?,?)");

             */
            ps = connection.prepareStatement(sql_stmt);
            //  int tmp_ftp_number = Integer.parseInt(p4);
            ps.setInt(1, Integer.parseInt(order_number));
            ps.setString(2, creator);
            //ps.setTimestamp(3, date_1);
            // ps.setTimestamp(3, DEFAULT); 
            /*  
            ps.setDate(4, date_2);
            ps.setInt(5, Integer.parseInt(comm));
            ps.setInt(6, Integer.parseInt(number_1));
            ps.setInt(7, Integer.parseInt(number_2));
            ps.setInt(8, number_3 + 1);

            ps.setString(9, p_auto_1);
            ps.setString(10, p_auto_2);
            ps.setString(11, p_auto_3);
            ps.setString(12, p_auto_4);
            ps.setString(13, p_auto_5);
            ps.setString(14, p_auto_6);
             */

 /* */
            ps.setDate(3, date_2);
            ps.setInt(4, Integer.parseInt(comm));
            ps.setInt(5, Integer.parseInt(number_1));
            ps.setInt(6, Integer.parseInt(number_2));
            ps.setInt(7, number_3 + 1);

            ps.setString(8, p_auto_1);
            ps.setString(9, p_auto_2);
            ps.setString(10, p_auto_3);
            ps.setString(11, p_auto_4);
            ps.setString(12, p_auto_5);
           // ps.setString(13, p_auto_6);
           
           ps.setString(13, p_auto_PO);
           ps.setString(14, p_auto_CA);
           ps.setString(15, p_auto_Lock);
           ps.setString(16, p_auto_6);

            /* 
            ps.setInt(1, Integer.parseInt(order_number));
            
            ps.setString(2, creator);
            ps.setTimestamp(3, date_1);
            ps.setDate(4, date_2);
            ps.setString(5, comm);
            ps.setInt(6, Integer.parseInt(number_1));
            ps.setInt(7, Integer.parseInt(number_2));
            ps.setInt(7, number_3);
             */
            //  ps.setInt(1, 11);
            //  ps.setString(2, "mkyong");
            //   ps.setString(3, "system");
            //   ps.setTimestamp(4, getCurrentTimeStamp());
            ps.executeUpdate();

            /*
            ps = null;
            ps = connection.prepareStatement(sql_stmt);
            sql_stmt = "INSERT INTO FTP_MASTER"
                    + "(DATE_1) VALUES"
                    + "(?)";
            ps.setTimestamp(1, date_1);
            ps.executeUpdate();
             */
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            try {
                ps.close();
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}
