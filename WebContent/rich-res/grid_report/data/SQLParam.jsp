﻿<%@ page contentType="text/html; charset=utf-8"%>
<%@ include file = "GenXmlData.jsp" %>
<%
String QuerySQL = request.getParameter("QuerySQL");
XML_GenOneRecordset(response, QuerySQL);
%> 