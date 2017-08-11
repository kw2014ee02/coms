<%@ Page Language="vb" Debug="true" Trace="false" AutoEventWireup="true" MasterPageFile="~/Site1NoPrint1024.Master" CodeFile="default.aspx.vb" Inherits="links_default"
    Title="Main Menu" %>

<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="cphHead" runat="server">
    <!-- Use IE7 mode and disable compatibility view button on browser toolbar  -->
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" />  -->
    <!-- <meta http-equiv="refresh" content="100"> -->
    <link href="default.css" type="text/css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../print.css" media="print" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="cphBody" runat="server">
    <asp:UpdatePanel ID="UpdatePanel6" runat="server" RenderMode="Inline">
        <ContentTemplate>
            <table style="text-align: center;" cellspacing="0" cellpadding="0" width="950">
                <tbody>
                    
                    <tr>
                        <td>                                                            
                            <table style="text-align: right; width: 100%; background-position: left top; background-image: url('../images/globenew.png'); background-repeat: no-repeat;" border="0">
                                <tbody>                                   
                                    
                                    <tr>
                                        <td>
                                        
                                            <table style="vertical-align: middle; margin-right:  60px; margin-top: 110px; margin-bottom: 100px;" align="right" border = "0">
                                                <tbody>
                                                    <tr>
                                                        <td style="vertical-align: text-bottom; padding-bottom: 10px;">
                                                            <asp:LinkButton style="width: 150px;" TabIndex="300" ID="btnView" CssClass="linkButtonBlue" onmouseout='window.status=""; return true' onmouseover="window.status='Click here to list document links and open documents.'; return true"
                                                                runat="server" Visible="true" autopostback="false" CausesValidation="false" Text="Open Document" onfocus='ChangeButtonFocus("Click here to list document links and open documents.","linkButtonBlueFocus")'
                                                                onblur='ChangeButtonFocus("","linkButtonBlue")' />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align: text-bottom; padding-bottom: 10px;">
                                                            <asp:LinkButton style="width: 150px;" TabIndex="300" ID="btnSave" CssClass="linkButtonBlue" onmouseout='window.status=""; return true' onmouseover="window.status='Click here to create a new document link.'; return true"
                                                                runat="server" Visible="true" autopostback="false" CausesValidation="false" Text="Link Document" onfocus='ChangeButtonFocus("Click here to create a new document link.","linkButtonBlueFocus")'
                                                                onblur='ChangeButtonFocus("","linkButtonBlue")' />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style="vertical-align: text-bottom; padding-bottom: 10px;">
                                                            <asp:LinkButton style="width: 150px;" TabIndex="300" ID="btnDelete" CssClass="linkButtonBlue" onmouseout='window.status=""; return true' onmouseover="window.status='Click here to delete a document link.'; return true"
                                                                runat="server" Visible="true" autopostback="false" CausesValidation="false" Text="Un-Link Document" onfocus='ChangeButtonFocus("Click here to delete a document link.","linkButtonBlueFocus")'
                                                                onblur='ChangeButtonFocus("","linkButtonBlue")' />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 320px; vertical-align: top;">
                            <asp:Button ID="btnShowPopup" runat="server" Style="display: none" />
                            <cc1:ModalPopupExtender OkControlID="btnPopupOK" ID="ModalPopupExtender1" runat="server" TargetControlID="btnShowPopup" PopupControlID="pnlPopupOK" DropShadow="true"
                                BackgroundCssClass="modalBackground1024" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </ContentTemplate>
    </asp:UpdatePanel>
</asp:Content>
