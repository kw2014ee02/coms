<%-- 
    Document   : result
    Created on : 23-Jun-2016, 12:40:31 PM
    Author     : w15rdknl
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
         <div id="result">
            <h3>${requestScope["message"]}</h3>
        </div>
    </body>
</html>
