/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import org.json.JSONException;
import org.json.*;

/**
 *
 * @author w15rdknl
 */
public class getJSONPStudentData {
    public String getJSONPStudentData(String callbackFunc) throws  JSONException
{
    String jsonpDataStr="";
 
        JSONObject jSonDataArrObj;
        JSONObject jSonDataFinalArrObj;
 
        JSONObject studentMarkDetails;
        JSONArray studentMarkDetailsArr;
 
        JSONArray jSonDataFinalArr;
        jSonDataFinalArr =new JSONArray(); 
 
     studentMarkDetails = new JSONObject();
     studentMarkDetails.put("rollNo", "5000");
     studentMarkDetails.put("Name", "Jacob");
     studentMarkDetails.put("M1", "90");
     studentMarkDetails.put("M2", "93");
     studentMarkDetails.put("M3", "92");
 
         studentMarkDetailsArr =new JSONArray();
     studentMarkDetailsArr.put(studentMarkDetails);
 
     jSonDataArrObj=new JSONObject();
     jSonDataArrObj.put("JsonData", studentMarkDetailsArr);
 
     jSonDataFinalArr.put(jSonDataArrObj);
 
     studentMarkDetails = new JSONObject();
     studentMarkDetails.put("rollNo", "5001");
     studentMarkDetails.put("Name", "Kamal");
     studentMarkDetails.put("M1", "65");
     studentMarkDetails.put("M2", "92");
     studentMarkDetails.put("M3", "67");
 
     studentMarkDetailsArr =new JSONArray();
     studentMarkDetailsArr.put(studentMarkDetails);
 
     jSonDataArrObj=new JSONObject();
     jSonDataArrObj.put("JsonData", studentMarkDetailsArr);
 
     jSonDataFinalArr.put(jSonDataArrObj);
 
     jSonDataFinalArrObj=new JSONObject();
 
     jSonDataFinalArrObj.put("JSonDataFinal", jSonDataFinalArr);
 
     jsonpDataStr=jSonDataFinalArrObj.toString();
 
        return callbackFunc +"("+jsonpDataStr+")"; //padding callbackfunction
 
    }
}

